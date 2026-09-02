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

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative h-[380px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[500px] dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/signature_sprinter.jpg"
                  alt="ITP Sprinter jet van on an FBO tarmac beside a Gulfstream"
                  className="h-full w-full object-cover brightness-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/80">
                    FBO Terminal Integration
                  </span>
                  <h2 className="font-serif text-2xl font-medium sm:text-3xl">
                    Signature Aviation
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul>
                {features.map((feature, idx) => (
                  <li
                    key={feature.title}
                    className="border-b border-black/10 py-6 dark:border-white/10"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-xs font-bold text-[#888888]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl dark:text-[#F8F6F2]">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-start gap-3">
                <BookNowButton label="Arrange FBO Pickup" />
                <OrCallNote />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Terminals We Serve"
            title="Where we meet you."
            align="left"
            className="mb-12"
          />

          <div className="border-t border-black/10 dark:border-white/10">
            {locations.map((location, idx) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group grid grid-cols-1 items-center gap-4 border-b border-black/10 py-8 sm:grid-cols-12 dark:border-white/10"
              >
                <span className="font-mono text-xs font-bold text-[#888888] sm:col-span-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <span className="sm:col-span-5">
                  <span className="mb-1 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    <MapPin className="h-3 w-3" />
                    {location.state}
                  </span>
                  <span className="font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-4xl dark:text-[#F8F6F2]">
                    {location.city}
                  </span>
                </span>

                <span className="hidden text-sm font-light text-[#66625C] sm:col-span-5 sm:block dark:text-[#B8B8B8]">
                  {location.airport} ({location.airportCode})
                </span>

                <ArrowUpRight className="hidden h-5 w-5 justify-self-end text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:col-span-1 sm:block dark:text-[#F8F6F2]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
