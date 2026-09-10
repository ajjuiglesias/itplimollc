import { WeddingFleetFeature } from '@/components/ui/WeddingFleetFeature';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react';
import { weddingVenueRegions } from '@/content/weddingVenues';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BookNowButton, OrCallNote } from '@/components/ui/CallDispatchButton';
import { JsonLd, breadcrumbSchema, pageMetadata, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Raleigh Wedding Venues & Transportation | ITP Limo',
  description:
    'Plan wedding transportation for venues across Raleigh, Wake Forest, Cary, Apex, Durham, Chapel Hill, Clayton, Pittsboro and the Triangle.',
  path: '/wedding-venues',
});

export default function WeddingVenuesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Wedding venue transportation in the Triangle',
            path: '/wedding-venues',
            description:
              'Private cars, wedding-party transportation and guest shuttles for venues across Raleigh, Wake Forest and the greater Triangle.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Wedding Venues', path: '/wedding-venues' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Triangle Wedding Venues"
        title="Your venue. Your people. One plan."
        subtitle="Wedding cars, guest shuttles and airport arrivals planned together for celebrations across Raleigh, Wake Forest and the greater Triangle."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Wedding Venues' }]}
        image="/images/chauffeur-door.jpg"
        ctaLabel="Plan Your Wedding"
      />

      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Wedding Transportation"
                size="compact" title="Every arrival. One plan."
                align="left"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg font-light leading-relaxed text-[#524E48] sm:text-xl dark:text-[#CCCCCC]">
                The venue is one address. A wedding day is many: RDU, hotels,
                getting-ready locations, the ceremony, the reception and the ride home.
                ITP Limo coordinates those movements as one schedule, with a private car
                for the couple, group transportation for the wedding party and planned
                shuttle runs for guests.
              </p>

              <div className="mt-8 grid gap-5 border-t border-black/10 pt-8 sm:grid-cols-3 dark:border-white/10">
                {[
                  { icon: CalendarDays, label: 'One master run sheet' },
                  { icon: Users, label: 'Cars and group shuttles' },
                  { icon: MapPin, label: 'RDU, hotels and venues' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-[#524E48] dark:text-[#CCCCCC]">
                    <Icon className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#FAF8F5] py-16 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Venue Guides"
            title="Choose your part of the Triangle."
            subtitle="Each guide covers local venues and the transportation decisions that matter in that part of the region."
            align="left"
            className="mb-12"
          />

          <div className="border-t border-black/10 dark:border-white/10">
            {weddingVenueRegions.map((region, index) => (
              <Link
                key={region.slug}
                href={`/wedding-venues/${region.slug}`}
                className="group grid gap-4 border-b border-black/10 py-7 sm:grid-cols-12 sm:items-center sm:py-9 dark:border-white/10"
              >
                <span className="font-mono text-xs font-bold text-[#888888] sm:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="sm:col-span-5">
                  <span className="font-serif text-2xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-3xl dark:text-[#F8F6F2]">
                    {region.label}
                  </span>
                  <span className="mt-1 block text-xs text-[#66625C] dark:text-[#A0A0A0]">
                    {region.venues.length} featured venues
                  </span>
                </span>
                <span className="text-sm font-light leading-relaxed text-[#66625C] sm:col-span-5 dark:text-[#B8B8B8]">
                  {region.subtitle}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#171717] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:col-span-1 sm:justify-self-end dark:text-[#F8F6F2]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WeddingFleetFeature />

      <section className="bg-white py-16 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            eyebrow="Start With The Schedule"
            title="Tell us where everyone needs to be."
            subtitle="Share the venue, hotels, guest count and timing. Dispatch will help match the fleet to the day."
            className="mb-9"
          />
          <div className="flex flex-col items-center gap-3">
            <BookNowButton label="Plan Your Wedding" />
            <OrCallNote />
          </div>
        </div>
      </section>
    </>
  );
}
