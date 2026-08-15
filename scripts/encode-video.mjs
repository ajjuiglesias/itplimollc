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
 * `start`/`duration` pick the strongest continuous window of each montage.
 * Notes record why, so these are re-derivable rather than magic numbers.
 *
 * Deliberately omitted: "Your comfort.mov" carries a burned-in caption reading
 * "YOUR COMFORT IT'S OUR PRIORITY" - a possessive error baked into the pixels
 * that cannot be removed without cropping away the shot. Flagged to the client.
 */
/**
 * All three run side by side as the desktop hero background. Three 9:16 panels
 * tile to 3240x1920, i.e. ~1.69:1, which is near enough to widescreen that each
 * clip plays at close to native scale - the reason this works where a single
 * cropped reel does not. On a 1920px viewport each panel renders ~640px wide,
 * so 640 is the encode width and anything larger is wasted bytes.
 *
 * Durations are deliberately unequal so the three loops drift out of phase
 * instead of restarting together as one visible "wall".
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
 * These sources are social montages that cut every ~2s, so the trim points are
 * shot boundaries, not round numbers. Every window opens on a bright exterior:
 * the first frame is also the poster, and a panel that opens on a dark cabin
 * reads as a broken image before the video starts.
 *
 * Boundaries found by sampling at 0.6s (see git history):
 *   New.mov      cabin | 5.4 fleet lineup | 7.2 decal + sky | 9.0 cabin
 *   Preview.mov  0.3 chauffeur at door | 2.9 decal on bodywork | 5.4 grille
 *   New2.mov     dark cabin | 5.5 Suburban three-quarter | 7.5 cabin, luggage
 */
const CLIPS = [
  {
    name: 'hero-fleet',
    file: 'New.mov',
    start: 6.0,
    duration: 3.0,
    width: HERO_WIDTH,
    note: 'Fleet at the glass tower, running into the ITPLIMO.COM decal. All exterior.',
  },
  {
    name: 'hero-chauffeur',
    file: 'Preview.mov',
    start: 0.4,
    duration: 5.0,
    width: HERO_WIDTH,
    note:
      'Chauffeur opens the rear door, then the decal. Centre panel: it darkens as ' +
      'it runs, which is where the headline sits, so it gains contrast rather than losing it.',
  },
  {
    name: 'hero-arrival',
    file: 'New2.mov',
    start: 5.7,
    duration: 3.7,
    width: HERO_WIDTH,
    note: 'Suburban three-quarter against sky, into the luggage load.',
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
