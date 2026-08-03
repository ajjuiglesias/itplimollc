import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';

/**
 * PP Fragment Glare — display face used for all headings.
 *
 * Only the Glare cut is registered: the Serif, Sans and Text cuts ship in the
 * repo but nothing in the design references them, and next/font bundles every
 * face it is given. The three weights below mirror the original @font-face
 * declarations exactly so browser weight-matching is unchanged.
 */
export const fragmentGlare = localFont({
  src: [
    { path: './pp-fragment/PPFragment-GlareLight.otf', weight: '300', style: 'normal' },
    { path: './pp-fragment/PPFragment-GlareRegular.otf', weight: '400', style: 'normal' },
    { path: './pp-fragment/PPFragment-GlareExtraBold.otf', weight: '800', style: 'normal' },
  ],
  variable: '--font-fragment-glare',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});
