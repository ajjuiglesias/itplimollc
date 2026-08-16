/**
 * Encodes the client's vertical (9:16) phone footage into web-ready loops.
 *
 * The originals are 1080x1920 .mov files of 20-53 MB, and three of the five are
 * HEVC, which Chrome and Firefox will not decode. Everything therefore has to be
 * transcoded regardless of size; this script also trims each clip to the window
 * that actually reads well and strips audio (these loop muted behind copy).
 *
 * This is an offline asset-prep step, not part of the build. ffmpeg-static and
 * ffprobe-static are deliberately NOT in package.json - together they unpack to
 * ~416 MB of per-platform binaries that Vercel would fetch on every deploy for
 * a script that only ever runs locally. Install them when you need to re-encode:
 *
 *   npm i -D ffmpeg-static ffprobe-static
 *   node scripts/encode-video.mjs
 *   npm uninstall ffmpeg-static ffprobe-static
 *
 * Sources are not committed - point SOURCE_DIR at the client's delivery folder.
 * Outputs land in public/video/ and ARE committed.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, statSync } from 'node:fs';
import ffmpeg from 'ffmpeg-static';

const SOURCE_DIR = 'C:/Users/ajmal/Downloads/drive-download-20260814T145221Z-1-001/';
const OUT_DIR = 'public/video';

/**
 * All three run side by side as the desktop hero background. Three 9:16 panels
 * tile to 3240x1920, i.e. ~1.69:1, which is near enough to widescreen that each
 * clip plays at close to native scale - the reason this works where a single
 * cropped reel does not. On a 1920px viewport each panel renders ~640px wide,
 * so 640 is the encode width and anything larger is wasted bytes.
 *
 * Deliberately omitted: "Your comfort.mov" carries a burned-in caption reading
 * "YOUR COMFORT IT'S OUR PRIORITY" - a possessive error baked into the pixels
 * that cannot be removed without cropping away the shot. Flagged to the client.
 */
const HERO_WIDTH = 640;
// CRF 30 rather than 27: these sit under brightness-[0.6] and a gradient stack,
// where compression artefacts are invisible but bytes still cost LCP.
const HERO_CRF = '30';

/*
 * One panel per source, 5s each.
 *
 * An earlier pass cut all three from the single continuous shoot ("Special
 * order for Vitaliia") on the theory that a shared grade would match best. It
 * did match, but it read worse: that shoot's strongest long takes are a
 * boulevard with no vehicle in frame and a luggage compartment, so the hero
 * lost the cars. Leading with the fleet and the chauffeur matters more here
 * than a perfectly consistent grade.
 *
 * 5s is long enough to carry the 1.5-3s cuts inside these montages, so each
 * panel plays as a short sequence rather than a loop you can count.
 *
 * Every window opens on a bright exterior - the first frame is also the poster,
 * and a panel that opens on a dark cabin looks like a broken image until the
 * video starts. Starts sit just inside a shot boundary, never on one.
 */
const CLIPS = [
  {
    name: 'hero-fleet',
    file: 'New.mov',
    start: 7.6,
    duration: 5.0,
    width: HERO_WIDTH,
    note:
      'Opens on the ITPLIMO.COM decal against sky, then the cabin and the grille. ' +
      'Starts at 7.6, not 7.3: the white cut at 7.13 takes ~0.2s to fall off, and 7.3 ' +
      'still posters at 208. ' +
      'Sits after the cut at 7.13, which is a white blowout (luma 232) no window may ' +
      'cross. The fleet lineup at 5.6-7.13 is the better image but only 1.5s long, and ' +
      'a 5s window containing it would have to open on dark bodywork at luma 65 - which ' +
      'is also the poster, and all a reduced-motion visitor ever sees.',
  },
  {
    name: 'hero-arrival',
    file: 'New2.mov',
    start: 11.0,
    duration: 5.0,
    width: HERO_WIDTH,
    note:
      'Luggage load opening into the cabin. Moved off 8.4: that window crossed the ' +
      'cut at 10.4, which blows to luma 195 and would flash behind the headline.',
  },
  {
    name: 'hero-chauffeur',
    file: 'Preview.mov',
    start: 11.2,
    duration: 5.0,
    width: HERO_WIDTH,
    note:
      'Suburban held at the portico. The steadiest window in the whole set - mean 135, ' +
      'and it never drops below 123, so it carries the right-hand edge without dimming.',
  },
];

mkdirSync(OUT_DIR, { recursive: true });

const run = (args) => execFileSync(ffmpeg, args, { stdio: 'ignore' });
const mb = (p) => (statSync(p).size / 1048576).toFixed(2);
const src = (clip) => SOURCE_DIR + clip.file;

/** Scale to `width`, keep 9:16, force even dimensions for yuv420p. */
const scaleFilter = (width) => `scale=${width}:-2:flags=lanczos`;

for (const clip of CLIPS) {
  const base = `${OUT_DIR}/${clip.name}`;

  // -ss goes AFTER -i deliberately. Before -i it is a fast keyframe seek, which
  // drifts to the preceding keyframe - enough to open a panel on the tail of the
  // previous shot when cuts are ~2s apart. After -i ffmpeg decodes and discards
  // to the exact frame; on clips this short the extra cost is irrelevant.
  const trim = ['-i', src(clip), '-ss', String(clip.start), '-t', String(clip.duration), '-an'];

  // H.264 - the universal baseline. faststart moves the index to the front so
  // playback can begin before the whole file arrives.
  run([...trim,
    '-c:v', 'libx264', '-profile:v', 'high', '-crf', HERO_CRF, '-preset', 'slow',
    // The shoot is 50fps. Nothing here needs it - these are slow drifting
    // background loops under a dark overlay - and 30 costs ~40% fewer bytes.
    '-r', '30',
    '-pix_fmt', 'yuv420p', '-vf', scaleFilter(clip.width),
    '-movflags', '+faststart', '-y', `${base}.mp4`]);

  // No VP9/WebM companion here. It was measured at CRF 36 and came out LARGER
  // than x264 on every one of these clips (1.73 vs 1.47 MB on the hero) - short,
  // high-motion, heavily-keyframed source is x264's strong suit. A second source
  // that is bigger only costs cache and build time, so MP4 ships alone.

  // Poster from the first frame, so the LCP element is an image and the video
  // never shows a blank box while it buffers. Same accurate seek as above, so
  // the poster matches the frame the video actually starts on.
  run(['-i', src(clip), '-ss', String(clip.start), '-frames:v', '1',
    '-vf', scaleFilter(clip.width), '-q:v', '6', '-y', `${base}-poster.jpg`]);

  console.log(
    clip.name.padEnd(18),
    `mp4 ${mb(`${base}.mp4`)}MB`.padEnd(14),
    `poster ${mb(`${base}-poster.jpg`)}MB`,
  );
}
