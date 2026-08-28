import type { MetadataRoute } from 'next';
import { business } from '@/lib/seo';

/*
 * Web app manifest. Modest by design — this is a brochure site, not an app, so
 * it exists to make an added-to-home-screen shortcut look deliberate rather
 * than to enable anything installable.
 *
 * `display: 'browser'` rather than 'standalone': booking runs through the Moovs
 * embed on /book, and stripping the browser chrome would take the address bar
 * away from a page that hands off to a third-party payment flow.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — Executive Transportation`,
    short_name: business.shortName,
    description:
      'Chauffeur and black car service across Raleigh-Durham, Pinehurst, Wilmington and Boston.',
    start_url: '/',
    display: 'browser',
    background_color: '#0F1211',
    theme_color: '#0F1211',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
