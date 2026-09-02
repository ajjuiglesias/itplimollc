/**
 * Generates the social share image and the favicon set.
 *
 * Built from the client's own logo and photography rather than drawn from
 * scratch — the share card is often the first thing anyone sees of the brand,
 * and a generic one undoes the work the rest of the site does.
 *
 * Run:  node scripts/make-og-assets.mjs
 * Outputs are committed. Re-run only if the logo or hero photography changes.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

sharp.cache(false);
mkdirSync('public/og', { recursive: true });

const W = 1200;
const H = 630;

/* ---------- social share card ---------- */

// The full fleet lined up with an aircraft overhead, from the September 2026
// professional shoot. Replaces the Gulfstream frame: that plane is not theirs,
// whereas this is five ITP vehicles, and it is landscape so it fills the card
// without cropping away the subject.
const photo = await sharp('public/images/fleet-lineup.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.55 })
  .blur(1.5)
  .toBuffer();

// The horizontal lockup, brightened the way the dark navbar does it.
const logo = await sharp('public/images/itp-logo-horizontal.png')
  .resize({ width: 460 })
  .modulate({ brightness: 1.6 })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

const overlay = Buffer.from(`<svg width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%"  stop-color="#000" stop-opacity="0.86"/>
      <stop offset="60%" stop-color="#000" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.62"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>

  <text x="80" y="392" font-family="Georgia, serif" font-size="62" fill="#F8F6F2">
    Executive chauffeur service
  </text>
  <text x="80" y="462" font-family="Georgia, serif" font-size="62" fill="#F8F6F2" opacity="0.82">
    across North Carolina &amp; Boston
  </text>

  <rect x="80" y="516" width="54" height="2" fill="#34D399"/>
  <text x="80" y="566" font-family="Helvetica, Arial, sans-serif" font-size="21"
        letter-spacing="3" fill="#FFFFFF" opacity="0.8">
    RDU · ILM · SOP · FAY · BOS
  </text>
</svg>`);

await sharp(photo)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 74, left: 80 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og/share.jpg');

/* ---------- favicons ---------- */

/*
 * The horizontal lockup is unreadable at 32px, so the icon is the monogram on
 * the brand's near-black instead. Squared with a dark ground rather than left
 * transparent, because a transparent favicon disappears on dark browser chrome.
 */
const BG = { r: 15, g: 18, b: 17, alpha: 1 };

for (const [size, name] of [[512, 'icon.png'], [180, 'apple-icon.png']]) {
  const pad = Math.round(size * 0.18);
  const mark = await sharp('public/images/itp_logo.png')
    .resize({
      width: size - pad * 2,
      height: size - pad * 2,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .modulate({ brightness: 1.7 })
    .toBuffer();

  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: mark, top: pad, left: pad }])
    .png()
    .toFile(`src/app/${name}`);
}

const info = await sharp('public/og/share.jpg').metadata();
console.log(`share.jpg   ${info.width}x${info.height}`);
console.log('icon.png    512x512  -> src/app/icon.png');
console.log('apple-icon  180x180  -> src/app/apple-icon.png');
console.log('logo width used for card:', logoMeta.width);
