import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Briefcase, Users } from 'lucide-react';
import { fleet } from '@/content/fleet';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CapacityStat } from '@/components/ui/CapacityStat';
import { VehicleImage } from '@/components/ui/VehicleImage';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = {
  title: 'Our Fleet | 2026 Suburban, Aviator & Sprinter | ITP Limo',
  description:
    'A 2026 Chevrolet Suburban, Lincoln Aviator and Mercedes Sprinter — one of the newest chauffeur fleets in the Triangle, serving Raleigh-Durham and Boston.',
  alternates: { canonical: '/fleet' },
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Newest Fleet in the Triangle"
        title="Every vehicle is a 2026."
        subtitle="A Chevrolet Suburban, a Lincoln Aviator and a Mercedes Sprinter — seating three, seven or fourteen, each driven by a professional licensed chauffeur."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Fleet' }]}
        image="/images/signature_sprinter.jpg"
        ctaLabel="Reserve a Vehicle"
      />

      <section className="bg-white dark:bg-[#141414] py-24 sm:py-32 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Choose Your Vehicle"
            title="The right vehicle for every occasion."
            subtitle="A fleet of five, across three models — seating three, seven or fourteen."
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
                  <Link href={`/fleet/${vehicle.slug}`} className="group block">
                    <VehicleImage
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-[300px] sm:h-[420px]"
                    >
                      <div className="absolute bottom-7 left-7 right-7 text-white">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">
                          {vehicle.category}
                        </span>
                        <h3 className="font-serif text-2xl font-medium sm:text-3xl">
                          {vehicle.name}
                        </h3>
                      </div>
                    </VehicleImage>
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

                  {/* Capacity as display numerals rather than small icon pairs */}
                  <div className="my-8 flex items-stretch gap-10 border-y border-black/10 py-6 dark:border-white/10">
                    <CapacityStat
                      value={vehicle.passengers}
                      label="Passengers"
                      icon={<Users className="h-3 w-3" />}
                    />

                    <div className="w-px bg-black/10 dark:bg-white/10" />

                    <CapacityStat
                      value={vehicle.luggage}
                      label="Luggage"
                      icon={<Briefcase className="h-3 w-3" />}
                    />
                  </div>

                  <ul>
                    {vehicle.specs.map((spec) => (
                      <li
                        key={spec}
                        className="border-b border-black/10 py-3 text-sm text-[#524E48] dark:border-white/10 dark:text-[#CCCCCC]"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/fleet/${vehicle.slug}`}
                    className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
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
            <BookNowButton label="Book Your Ride" />
            <OrCallNote />
          </div>
        </div>
      </section>
    </>
  );
}
