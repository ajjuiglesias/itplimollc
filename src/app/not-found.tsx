import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { locations } from '@/content/locations';
import { services } from '@/content/services';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

/*
 * The default 404 was unbranded and a dead end. This one carries the brand and,
 * more usefully, routes the visitor onward — a 404 that lists the markets and
 * services is a recoverable landing, and these pages are also the ones most
 * likely to have been what they were looking for.
 */
export const metadata: Metadata = {
  title: 'Page not found | ITP Limo',
  // Never index a 404, and never let it pass authority onward.
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center bg-[#070707] py-28 text-white sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#888888]">
              Error 404
            </span>
            <h1 className="mt-4 font-serif text-[2.1rem] font-normal leading-[1.08] tracking-tight text-[#F8F6F2] sm:text-5xl xl:text-6xl">
              This one is off the route.
            </h1>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-[#B8B8B8]">
              The page you were looking for has moved or never existed. Dispatch is
              open regardless — and everything else on the site is a click away.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3">
              <BookNowButton label="Book Your Ride" variant="onDark" />
              <OrCallNote onDark />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#A0A0A0]">
              Service areas
            </span>
            <ul className="mt-4 mb-10">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="group flex items-center justify-between border-b border-white/10 py-4 font-serif text-xl text-[#F8F6F2] transition-opacity hover:opacity-70 sm:text-2xl"
                  >
                    {location.city}, {location.stateAbbr}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#888888] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#A0A0A0]">
              Services
            </span>
            <ul className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex min-h-[44px] items-center border-b border-white/10 text-sm text-[#B8B8B8] transition-colors hover:text-white"
                  >
                    {service.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
