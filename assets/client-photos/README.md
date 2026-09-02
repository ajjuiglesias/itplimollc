# Client photography — originals

The September 2026 shoot as delivered, plus earlier frames no longer used on
the site. Kept for future use but held **outside `public/`** so they are not
deployed: everything under `public/` ships to every visitor, and these were
adding ~4.9MB to the bundle while being referenced by nothing.

The ones in use were imported into `public/images/` under semantic names by
`scripts/import-photos.mjs`, which also re-encodes them for the web. That
script reads from the client's delivery folder, so re-running it needs the
originals — point it here, or at the original download.

To bring one of these into use: add it to the MAP in that script with a
descriptive filename, run it, and reference the new name.
