import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Briefcase, Check, Users } from 'lucide-react';
import { fleet } from '@/content/fleet';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CallDispatchButton, BookingSoonNote } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Our Fleet | Maybach, Escalade & Sprinter Chauffeur Vehicles | ITP Limo',
  description:
    'Mercedes-Maybach S-Class, Cadillac Escalade ESV and jet-converted Mercedes Sprinter executive vans, chauffeured in Boston and Raleigh-Durham.',
  alternates: { canonical: '/fleet' },
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Flagship Collection"
        title="Crafted for absolute comfort."
        subtitle="Every vehicle is meticulously maintained, sanitized, and spec'd with private luxury amenities — from single-executive sedans to 14-passenger jet vans."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Fleet' }]}
        image="/images/signature_sprinter.jpg"
        ctaLabel="Reserve a Vehicle"
      />

      <section className="bg-white dark:bg-[#141414] py-24 sm:py-32 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Choose Your Vehicle"
            title="Three vehicles, every occasion."
            subtitle="Select a vehicle for full specifications, capacity and the journeys it suits best."
            className="mb-20"
          />

          <div className="space-y-20 sm:space-y-28">
            {fleet.map((vehicle, idx) => (
              <article
                key={vehicle.slug}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Alternate image side so the page has rhythm rather than a repeating column */}
                <div
                  className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <Link
                    href={`/fleet/${vehicle.slug}`}
                    className="group relative block h-[320px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[440px] dark:border-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-full w-full object-cover brightness-[0.8] contrast-[1.05] transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-7 left-7 right-7 text-white">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">
                        {vehicle.category}
                      </span>
                      <h3 className="font-serif text-2xl font-medium sm:text-3xl">{vehicle.name}</h3>
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-mono font-bold text-[#888888]">
                    0{idx + 1}
                  </span>

                  <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                    {vehicle.name}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {vehicle.description}
                  </p>

                  <div className="my-6 flex items-center gap-6 border-y border-black/10 py-4 text-xs dark:border-white/10">
                    <span className="flex items-center gap-2 text-[#171717] dark:text-[#F8F6F2]">
                      <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      {vehicle.passengers}
                    </span>
                    <span className="flex items-center gap-2 text-[#171717] dark:text-[#F8F6F2]">
                      <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      {vehicle.luggage}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {vehicle.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-3 text-xs font-light text-[#524E48] sm:text-sm dark:text-[#CCCCCC]"
                      >
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/fleet/${vehicle.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
                  >
                    Full specifications
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeader
            eyebrow="Not sure which vehicle?"
            title="We'll match the car."
            subtitle="Tell our dispatch desk the party size, luggage and occasion, and we will recommend the right vehicle."
            className="mb-10"
          />
          <div className="flex flex-col items-center gap-4">
            <CallDispatchButton label="Speak to Dispatch" />
            <BookingSoonNote />
          </div>
        </div>
      </section>
    </>
  );
}
