import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Car, Globe, Plane, ShieldCheck } from 'lucide-react';
import { locations } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PillarColumns } from '@/components/ui/PillarColumns';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'About ITP Limo | Executive Chauffeur Company, NC',
  description:
    'Private chauffeur and executive transportation across North Carolina and Boston, built on discretion, flight-aware dispatch and an all-2026 fleet.',
  path: '/about',
});

const pillars = [
  {
    icon: Globe,
    title: 'Two markets, one standard',
    subtitle: 'The Triangle and Boston',
    desc: 'Dedicated chauffeurs serving Raleigh, Durham, Chapel Hill, RTP and RDU, plus Greater Boston and Logan — run to identical protocol in both.',
  },
  {
    icon: Car,
    title: 'A maintained fleet',
    subtitle: 'Recent models only',
    desc: 'A Mercedes-Benz executive Sprinter, SUVs and sedans, cleaned and checked before every dispatch.',
  },
  {
    icon: Plane,
    title: 'Flight-aware dispatch',
    subtitle: '60 minutes free wait time',
    desc: 'Every airport assignment is tracked against live radar, so early and delayed landings are absorbed by us rather than charged to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Discretion as policy',
    subtitle: 'NDA protocol',
    desc: 'Non-disclosure protocol across the chauffeur team, with quiet cabins built for confidential calls and private conversation.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ITP"
        title="Quietly, precisely, every time."
        subtitle="ITP Limo is a private chauffeur and executive transportation company serving Raleigh-Durham, Pinehurst, Wilmington and Boston, built for travellers whose time and privacy are the point."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        image="/images/chauffeur-team.jpg"
        ctaLabel="Speak to Dispatch"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What We Stand On"
            title="Four things we don't compromise."
            className="mb-20"
          />

          <PillarColumns
            columns={2}
            pillars={pillars.map((pillar) => ({
              eyebrow: pillar.subtitle,
              title: pillar.title,
              body: pillar.desc,
              icon: <pillar.icon className="h-4 w-4" />,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Where We Operate"
            title="Our markets."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group relative h-64 overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={location.image}
                  alt={location.city}
                  className="h-full w-full object-cover brightness-[0.65] transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">
                    {location.airport}
                  </span>
                  <span className="font-serif text-3xl font-medium">{location.city}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <BookNowButton label="Book Your Ride" />
            <OrCallNote />
          </div>
        </div>
      </section>
    </>
  );
}
