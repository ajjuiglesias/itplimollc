import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Plane } from 'lucide-react';
import { locations, announcedMarkets, extendedCoverage } from '@/content/locations';
import { routes } from '@/content/routes';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';
import { pageMetadata, JsonLd, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Service Areas | NC & Boston Chauffeur Coverage | ITP Limo',
  description:
    'Chauffeur and black car service across Raleigh-Durham, Pinehurst, Wilmington and Boston, with long-distance coverage into Charlotte, Greensboro and beyond.',
  path: '/locations',
});

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
        /* Ultra-wide fleet frame: hero-shaped, and market-neutral for the hub. */
        image="/images/fleet-lineup-wide.jpg"
      />

      {/* Markets with their own page */}
      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
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
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl border border-black/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-2xl dark:border-white/15 sm:min-h-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={location.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.72] dark:brightness-[0.6] transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge mb-3 inline-block">
                    HUB 0{idx + 1}
                  </span>
                  <h3 className="mt-1 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                    {location.city}, {location.stateAbbr}
                  </h3>
                  <p className="mt-3 glass-pill px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-white/90 inline-flex items-center gap-2">
                    <Plane className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{[location.airportCode, ...(location.additionalAirports ?? []).map((a) => a.code)].join(' · ')}</span>
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-xs font-extrabold uppercase tracking-[0.2em] text-white hover:bg-white/20 transition-all">
                      <span>View {location.city} service</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
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
        <section className="border-t border-black/5 bg-[#FAF8F5] py-16 transition-colors duration-500 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow="Also Serving"
              title="Expanding across North Carolina."
              subtitle="The same fleet and the same chauffeurs, now covering more of the state."
              align="left"
              className="mb-12"
            />

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {announcedMarkets.map((market) => (
                <li
                  key={market.slug}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-[#161616] border border-black/5 dark:border-white/10 shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
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

      {/* Long-distance routes */}
      <section className="border-t border-black/5 bg-white py-16 transition-colors duration-500 sm:py-24 dark:border-white/5 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Between Markets"
            title="The long runs."
            subtitle="Routes we drive often enough to have planned properly."
            align="left"
            className="mb-12"
          />

          <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
            {routes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group grid grid-cols-1 items-center gap-3 py-6 px-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] sm:grid-cols-12"
              >
                <span className="font-serif text-2xl text-[#171717] transition-opacity group-hover:opacity-70 sm:col-span-5 sm:text-3xl dark:text-[#F8F6F2]">
                  {route.from} to {route.to}
                </span>
                <span className="text-sm font-light text-[#66625C] sm:col-span-6 dark:text-[#B8B8B8]">
                  {route.facts[0]?.value} · {route.facts[1]?.value} · {route.facts[2]?.value}
                </span>
                <div className="hidden sm:flex col-span-1 justify-end">
                  <div className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white group-hover:bg-[#171717] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*
        Territory covered on request. Named here rather than given pages of its
        own — this is the long-distance service the Triangle page already sells,
        extended, and a page for a market nobody is actively working is the thin
        content the rest of this cluster was built to avoid.
      */}
      {extendedCoverage.length > 0 && (
        <section className="border-t border-black/5 bg-white py-16 sm:py-24 dark:border-white/5 dark:bg-[#141414]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow="Further Afield"
                  title="And wherever the road goes."
                  align="left"
                />
                <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  Long-distance and out-of-state work is a routine part of what we
                  do, not an exception to it. If your journey runs past the
                  Triangle, ask — we will tell you plainly whether we can cover it.
                </p>

                <div className="mt-10 flex flex-col items-start gap-3">
                  <BookNowButton label="Request a Quote" />
                  <OrCallNote />
                </div>
              </div>

              <ul className="lg:col-span-6 lg:col-start-7">
                {extendedCoverage.map((region) => (
                  <li
                    key={region.name}
                    className="flex items-center gap-5 border-b border-black/10 py-5 dark:border-white/10"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-serif text-xl text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                      {region.name}
                      {region.stateAbbr ? `, ${region.stateAbbr}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
