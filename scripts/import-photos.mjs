/**
 * Imports the client's professional shoot (September 2026) into semantic
 * filenames, and optimises it for the web.
 *
 * The originals arrive with Facebook-style names — 787666107_1506783751158279…
 * — which say nothing about what is in them. Every one below was checked
 * visually before being assigned, in particular the vehicle identities: the
 * Chevrolet bowtie, the Lincoln grille and the Mercedes star are all legible in
 * the source frames, so nothing here is labelled on assumption.
 *
 * Run:  node scripts/import-photos.mjs
 * Safe to re-run; it only reads the originals and rewrites the named copies.
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';

sharp.cache(false);

const SRC = 'public/images/';
const originals = readdirSync(SRC).filter((f) => /^\d{9}_/.test(f)).sort();

/* index → semantic name. Index is the position in the sorted original list,
   which is what the contact sheet was numbered by. */
const MAP = [
  [1,  'fleet-lineup.jpg',       'Five ITP vehicles lined up, aircraft overhead. The hero shot.'],
  [4,  'fleet-lineup-wide.jpg',  'Ultra-wide fleet and chauffeurs — good for banners.'],
  [9,  'chauffeur-team.jpg',     'Six chauffeurs, full length. For /about.'],
  [21, 'chevrolet-suburban.jpg', 'Suburban side profile, ITP decal legible.'],
  [10, 'suburban-front.jpg',     'Suburban front three-quarter, Chevrolet bowtie visible.'],
  [22, 'suburban-interior.jpg',  'Suburban rear cabin and load space.'],
  [25, 'suburban-cockpit.jpg',   'Suburban dashboard and console.'],
  [6,  'lincoln-aviator.jpg',    'Aviator front three-quarter, Lincoln grille visible.'],
  [17, 'aviator-front.jpg',      'Aviator head-on.'],
  [8,  'mercedes-sprinter.jpg',  'Sprinter front three-quarter, Mercedes star visible.'],
  [0,  'sprinter-front.jpg',     'Sprinter head-on.'],
  [19, 'sprinter-branded.jpg',   'Sprinter flank with the full ITP LIMO decal.'],
  [11, 'sprinter-interior.jpg',  'Sprinter cabin, side door open.'],
  [2,  'sprinter-seats.jpg',     'Sprinter seating, showing capacity.'],
  [18, 'chauffeur-door.jpg',     'Chauffeur holding the rear door open.'],
  [15, 'chauffeur-sprinter.jpg', 'Chauffeur beside the Sprinter.'],
  [20, 'chauffeur-suburban.jpg', 'Chauffeur beside the Suburban.'],
];

let before = 0;
let after = 0;

for (const [idx, name, note] of MAP) {
  const src = SRC + originals[idx];
  before += statSync(src).size;

  /* Cap the long edge at 1600 and re-encode with mozjpeg. The originals are
     1320–2048px at 80–260KB; this keeps them sharp on a retina card while
     cutting weight, which matters because these load above the fold. */
  await sharp(src)
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(SRC + name);

  after += statSync(SRC + name).size;
  const m = await sharp(SRC + name).metadata();
  console.log(
    name.padEnd(26),
    `${m.width}x${m.height}`.padEnd(11),
    `${Math.round(statSync(SRC + name).size / 1024)}KB`.padStart(7),
    ' ' + note,
  );
}

console.log(
  `\n${MAP.length} imported · ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`
  + ` (${Math.round((1 - after / before) * 100)}% smaller)`,
);
console.log(`${originals.length - MAP.length} originals left unused.`);
