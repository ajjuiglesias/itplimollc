import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Briefcase, Check, Users } from 'lucide-react';
import { fleet, getVehicle } from '@/content/fleet';
import { PageHero } from '@/components/ui/PageHero';
import { CallDispatchButton, BookingSoonNote } from '@/components/ui/CallDispatchButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Prerenders every vehicle as static HTML at build time. */
export function generateStaticParams() {
  return fleet.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) return {};

  return {
    title: `${vehicle.name} | Chauffeured ${vehicle.category} | ITP Limo`,
    description: vehicle.description,
    alternates: { canonical: `/fleet/${vehicle.slug}` },
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) notFound();

  const others = fleet.filter((item) => item.slug !== vehicle.slug);

  return (
    <>
      <PageHero
        eyebrow={vehicle.category}
        title={vehicle.name}
        subtitle={vehicle.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Fleet', href: '/fleet' },
          { label: vehicle.shortName },
        ]}
        image={vehicle.image}
        ctaLabel="Reserve This Vehicle"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative h-[340px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[480px] dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-cover brightness-[0.85] contrast-[1.05]"
                />
              </div>

              <h2 className="mt-10 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                About the {vehicle.shortName}
              </h2>

              <p className="mt-5 text-base font-light leading-relaxed text-[#524E48] sm:text-lg dark:text-[#CCCCCC]">
                {vehicle.detail.intro}
              </p>

              <p className="mt-5 text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                {vehicle.description}
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[28px] border border-black/10 bg-[#FAF8F5] p-8 dark:border-white/10 dark:bg-[#1A1A1A]">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Capacity
                </span>

                <div className="mt-4 flex items-center gap-6 border-b border-black/10 pb-6 text-sm dark:border-white/10">
                  <span className="flex items-center gap-2 text-[#171717] dark:text-[#F8F6F2]">
                    <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    {vehicle.passengers}
                  </span>
                  <span className="flex items-center gap-2 text-[#171717] dark:text-[#F8F6F2]">
                    <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    {vehicle.luggage}
                  </span>
                </div>

                <span className="mt-6 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Specification
                </span>
                <ul className="mt-4 space-y-3">
                  {vehicle.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-sm font-light text-[#524E48] dark:text-[#CCCCCC]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Best suited to
                </span>
                <ul className="mt-4 space-y-2.5">
                  {vehicle.detail.bestFor.map((use) => (
                    <li
                      key={use}
                      className="text-sm font-light text-[#524E48] dark:text-[#CCCCCC]"
                    >
                      {use}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <CallDispatchButton label="Reserve This Vehicle" fullWidth />
                  <BookingSoonNote />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Internal linking between vehicles — useful to visitors and to crawlers */}
      <section className="border-t border-black/5 bg-[#FAF8F5] py-20 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0]">
            Also in the fleet
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/fleet/${item.slug}`}
                className="group relative h-56 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover brightness-[0.65] transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70">
                      {item.category}
                    </span>
                    <span className="font-serif text-2xl font-medium">{item.name}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
