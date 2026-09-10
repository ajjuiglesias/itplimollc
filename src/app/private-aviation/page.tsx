import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { locations } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'FBO & Private Aviation Transfers | Tarmac Pickup | ITP Limo',
  description:
    'Chauffeur transfers at private aviation terminals including Signature Aviation, serving Raleigh-Durham (RDU) and Boston (BOS), with live tail-number tracking.',
  path: '/private-aviation',
});

const features = [
  {
    title: 'Tarmac Direct Pickup',
    desc: 'Chauffeur and vehicle staged at the FBO terminal, ready as you step off the aircraft.',
  },
  {
    title: 'Tail Number Tracking',
    desc: 'Real-time flight tracking via FAA flight radar so your chauffeur is ready regardless of early or late arrival.',
  },
  {
    title: 'Discreet Privacy Protocol',
    desc: 'Strict non-disclosure agreement protocol for high-profile individuals, C-suite executives and private charter clients.',
  },
  {
    title: 'Group & Crew Movement',
    desc: 'Our executive Sprinter for full passenger manifests, crew transfers and group arrivals.',
  },
];

export default function PrivateAviationPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Aviation Concierge"
        title="Direct to the tarmac."
        subtitle="Seamless private jet transfers at Raleigh-Durham (RDU), Boston Logan (BOS) and regional FBO terminals."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Private Aviation' }]}
        image="/images/gulfstream_sprinter.jpg"
        ctaLabel="Arrange FBO Pickup"
      />

      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative h-[380px] overflow-hidden rounded-3xl border border-black/10 shadow-2xl sm:h-[500px] dark:border-white/10 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/signature_sprinter.jpg"
                  alt="ITP Sprinter jet van on an FBO tarmac beside a Gulfstream"
                  className="h-full w-full object-cover brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-6 right-6">
                  <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs text-white/95 font-medium flex items-center gap-2 shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Tarmac Direct Clearance</span>
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 block mb-1">
                    FBO Terminal Integration
                  </span>
                  <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                    Signature Aviation &amp; Regional Jet Terminals
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#181818] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold gold-accent-badge shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#171717] dark:text-[#F8F6F2] font-medium">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed pl-8">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-start gap-3">
                <BookNowButton label="Arrange FBO Pickup" />
                <OrCallNote />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-16 transition-colors duration-500 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Terminals We Serve"
            title="Where we meet you."
            align="left"
            className="mb-12"
          />

          <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
            {locations.map((location, idx) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group grid grid-cols-1 items-center gap-4 py-6 px-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] sm:grid-cols-12"
              >
                <span className="font-mono text-xs font-bold text-[#888888] sm:col-span-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <span className="sm:col-span-5">
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <MapPin className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    {location.state}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 dark:text-[#F8F6F2]">
                    {location.city}
                  </span>
                </span>

                <span className="text-sm font-light text-[#66625C] sm:col-span-5 dark:text-[#B8B8B8]">
                  {location.airport} ({location.airportCode})
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
    </>
  );
}
