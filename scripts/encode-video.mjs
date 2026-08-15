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
const CLIPS = [
  {
    name: 'hero-chauffeur',
    file: 'Preview.mov',
    start: 0.6,
    duration: 8.5,
    width: 720,
    note: 'Chauffeur opens the rear door, then the ITPLIMO.COM decal. The hero.',
  },
  {
    name: 'fleet-lineup',
    file: 'New.mov',
    start: 5.5,
    duration: 6.5,
    width: 540,
    note: 'Fleet staged outside the glass tower. Trimmed past the phone mockup intro.',
  },
  {
    name: 'arrival-luggage',
    file: 'New2.mov',
    start: 3.5,
    duration: 6.5,
    width: 540,
    note: 'Hotel portico arrival and luggage load.',
  },
  {
    name: 'airport-transfer',
    file: 'Special order for Vitaliia.mov',
    start: 1.2,
    duration: 6.5,
    width: 540,
    note: 'RDU airfield into a door-open. The airport-transfer story.',
  },
];

/**
 * The desktop hero needs a landscape frame, and nothing in public/images is both
 * wide and genuinely ITP's. This lifts a 16:9 band out of the vertical footage:
 * the fleet staged at the glass tower, which is a naturally wide composition
 * (vehicles side by side) with sky up top for the headline to sit against.
 *
 * It is a 1.78x upscale from the 1080px source, which would show on a foreground
 * image but not behind the hero's brightness-[0.65] plus gradient stack.
 */
const STILLS = [
  {
    name: 'hero-fleet-tower',
    file: 'New.mov',
    time: 7.0,
    cropY: 980, // vertical offset of the 1080x608 band; puts vehicles low-centre
    outDir: 'public/images',
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
  // -ss before -i seeks fast; -t after bounds the trim. -an drops audio entirely.
  const trim = ['-ss', String(clip.start), '-i', src(clip), '-t', String(clip.duration), '-an'];

  // H.264 - the universal baseline. faststart moves the index to the front so
  // playback can begin before the whole file arrives.
  run([...trim.slice(0, 4), '-t', String(clip.duration), '-an',
    '-c:v', 'libx264', '-profile:v', 'high', '-crf', '27', '-preset', 'slow',
    '-pix_fmt', 'yuv420p', '-vf', scaleFilter(clip.width),
    '-movflags', '+faststart', '-y', `${base}.mp4`]);

  // No VP9/WebM companion here. It was measured at CRF 36 and came out LARGER
  // than x264 on every one of these clips (1.73 vs 1.47 MB on the hero) - short,
  // high-motion, heavily-keyframed source is x264's strong suit. A second source
  // that is bigger only costs cache and build time, so MP4 ships alone.

  // Poster from the first frame, so the LCP element is an image and the video
  // never shows a blank box while it buffers.
  run(['-ss', String(clip.start), '-i', src(clip), '-frames:v', '1',
    '-vf', scaleFilter(clip.width), '-q:v', '6', '-y', `${base}-poster.jpg`]);

  console.log(
    clip.name.padEnd(18),
    `mp4 ${mb(`${base}.mp4`)}MB`.padEnd(14),
    `poster ${mb(`${base}-poster.jpg`)}MB`,
  );
}

for (const still of STILLS) {
  const out = `${still.outDir}/${still.name}.jpg`;
  run(['-ss', String(still.time), '-i', SOURCE_DIR + still.file, '-frames:v', '1',
    '-vf', `crop=1080:608:0:${still.cropY},scale=1920:1080:flags=lanczos`,
    '-q:v', '4', '-y', out]);
  console.log(still.name.padEnd(18), `${mb(out)}MB`);
}
