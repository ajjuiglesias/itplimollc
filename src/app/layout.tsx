import type { Metadata } from 'next';
import 'lenis/dist/lenis.css';
import './globals.css';
import { fragmentGlare, plusJakartaSans } from '@/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

/*
 * Canonical URLs resolve against this. Set NEXT_PUBLIC_SITE_URL to the real
 * domain once it is known — until then canonicals resolve against the Vercel
 * deployment URL, which is not what should be indexed long term.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ITP Concierge | Private Chauffeur & Executive Transportation Raleigh RDU',
  description:
    "ITP is Raleigh's premier private chauffeur and executive concierge service. Airport transfers, flight tracking, corporate fleets, and bespoke luxury travel.",
  alternates: { canonical: '/' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fragmentGlare.variable} ${plusJakartaSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#FAF8F5] text-[#171717] dark:bg-[#0F0F0F] dark:text-[#F8F6F2] font-sans antialiased selection:bg-[#C8B38B] selection:text-[#0F0F0F] overflow-x-hidden transition-colors duration-500">
        <ThemeProvider>
          <SmoothScroll />
          <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-[#171717] dark:text-[#F8F6F2] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
