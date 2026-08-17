import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Plane } from 'lucide-react';
import { locations, announcedMarkets } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';
import { JsonLd, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Service Areas | Raleigh, Boston, Pinehurst & Wilmington | ITP Limo LLC',
  description:
    'ITP Limo provides chauffeur and black car service across Raleigh-Durham and Boston, and serves Pinehurst and Wilmington, North Carolina.',
  alternates: { canonical: '/locations' },
};

/**
 * The hub for every market, and the internal-linking anchor for the location
 * cluster. Markets with sourced content get a card and a link; markets the
 * client has only told us about are named here and nowhere else, so the site can
 * state its coverage honestly without publishing a page that has nothing in it.
 */
export default function LocationsPage() {
  return (
    <>
      {/*
        Only the breadcrumb here. The LocalBusiness node with its full
        areaServed list is emitted once in the root layout, so repeating it on
        this page would just duplicate a node under the same @id.
      */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/locations' },
        ])}
      />

      <PageHero
        eyebrow="Service Areas"
        title="Where we drive."
        subtitle="One company, one fleet, one standard of chauffeur — across the Triangle, the Carolinas coast and Greater Boston."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        image={locations[0]?.image}
      />

      {/* Markets with their own page */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Primary Markets"
            title="Our core service areas."
            subtitle="Each with a dedicated airport corridor and local chauffeur knowledge."
            align="left"
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {locations.map((location, idx) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] border border-black/10 p-8 transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 sm:min-h-[400px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={location.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.55] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="font-mono text-xs font-bold text-white/60">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                    {location.city}, {location.stateAbbr}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/75">
                    <Plane className="h-3.5 w-3.5" />
                    {location.airport} ({location.airportCode})
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                    View {location.city} service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*
        Announced markets. Named, not linked — we have the client's word that
        they serve these, which is enough to state coverage, but not enough to
        build a page that would only restate the fleet and services blocks.
      */}
      {announcedMarkets.length > 0 && (
        <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow="Also Serving"
              title="Expanding across North Carolina."
              subtitle="The same fleet and the same chauffeurs, now covering more of the state."
              align="left"
              className="mb-12"
            />

            <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {announcedMarkets.map((market) => (
                <li
                  key={market.slug}
                  className="flex items-baseline gap-5 border-b border-black/10 py-6 dark:border-white/10"
                >
                  <MapPin className="h-4 w-4 shrink-0 translate-y-0.5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <span className="block font-serif text-2xl text-[#171717] sm:text-3xl dark:text-[#F8F6F2]">
                      {market.city}, {market.stateAbbr}
                    </span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                      {market.focus}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-start gap-3">
              <BookNowButton label="Request a Quote" />
              <OrCallNote />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
