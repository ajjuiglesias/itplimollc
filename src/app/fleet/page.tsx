import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowUpRight, Briefcase, Users } from 'lucide-react';
import { fleetPageVehicles, vehicleHref } from '@/content/fleet';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CapacityStat } from '@/components/ui/CapacityStat';
import { VehicleImage } from '@/components/ui/VehicleImage';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

export const metadata: Metadata = pageMetadata({
  title: 'Our Fleet | Executive & Wedding Vehicles | ITP Limo',
  description:
    'Explore ITP Limo’s 2026 executive SUVs and Sprinter, plus a Mercedes Gazelle vintage-style wedding car serving Raleigh and the Triangle.',
  path: '/fleet',
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive & Wedding Fleet"
        title="Modern comfort. Timeless arrival."
        subtitle="A 2026 executive fleet for airport, corporate and group travel — joined by a vintage-style Mercedes Gazelle for weddings and special occasions."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Fleet' }]}
        image="/images/fleet-lineup.jpg"
        ctaLabel="Reserve a Vehicle"
      />

      <section className="bg-white dark:bg-[#141414] py-16 sm:py-24 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Choose Your Vehicle"
            title="The right vehicle for every occasion."
            subtitle="Executive SUVs and group transportation, plus a specialty wedding roadster designed to make the arrival part of the occasion."
            className="mb-20"
          />

          <div className="space-y-16 sm:space-y-20">
            {fleetPageVehicles.map((vehicle, idx) => (
              <article
                key={vehicle.slug}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 p-5 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-[#181818] border border-black/5 dark:border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                {/* Alternate image side so the page has rhythm rather than a repeating column */}
                <div
                  className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <Link href={vehicleHref(vehicle)} className="group block">
                    <VehicleImage
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-[320px] sm:h-[440px] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg"
                    >
                      <div className="absolute bottom-7 left-7 right-7 text-white">
                        <span className="glass-pill px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2 inline-block">
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
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold gold-accent-badge">
                    0{idx + 1}
                  </span>

                  <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                    {vehicle.name}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {vehicle.description}
                  </p>

                  {/* Capacity as display numerals rather than small icon pairs. */}
                  {vehicle.passengers || vehicle.luggage ? (
                    <div className="my-7 flex items-stretch gap-8 border-y border-black/10 py-5 dark:border-white/10">
                      <CapacityStat
                        value={vehicle.passengers}
                        label="Passengers"
                        icon={<Users className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />}
                      />

                      <div className="w-px bg-black/10 dark:bg-white/10" />

                      <CapacityStat
                        value={vehicle.luggage}
                        label="Luggage"
                        icon={<Briefcase className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />}
                      />
                    </div>
                  ) : (
                    <p className="my-7 border-y border-black/10 py-5 text-xs font-bold uppercase tracking-[0.18em] text-[#888888] dark:border-white/10">
                      Final vehicle specifications coming soon
                    </p>
                  )}

                  <ul className="space-y-2">
                    {vehicle.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#524E48] dark:text-[#CCCCCC]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={vehicleHref(vehicle)}
                    className="group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2] hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                  >
                    <span>Full specifications</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-16 dark:border-white/5 dark:bg-[#070707]">
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
