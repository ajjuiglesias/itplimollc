import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Briefcase, Users } from 'lucide-react';
import { fleet, getVehicle } from '@/content/fleet';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { CapacityStat } from '@/components/ui/CapacityStat';
import { VehicleImage } from '@/components/ui/VehicleImage';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

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
          {vehicle.image ? (
            <EditorialBanner
              image={vehicle.image}
              alt={vehicle.name}
              eyebrow={vehicle.category}
              title={vehicle.name}
              body={vehicle.tagline}
              size="tall"
              className="mb-20"
            />
          ) : (
            <VehicleImage
              src={undefined}
              alt={vehicle.name}
              className="mb-20 h-[340px] sm:h-[440px]"
            />
          )}

          {/* Capacity as oversized numerals on a rule */}
          <div className="grid grid-cols-2 gap-10 border-y border-black/10 py-10 sm:gap-20 dark:border-white/10">
            <CapacityStat
              value={vehicle.passengers}
              label={vehicle.passengers ?? 'Capacity on request'}
              icon={<Users className="h-3 w-3" />}
              size="large"
            />
            <CapacityStat
              value={vehicle.luggage}
              label={vehicle.luggage ?? 'Capacity on request'}
              icon={<Briefcase className="h-3 w-3" />}
              size="large"
            />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-5xl dark:text-[#F8F6F2]">
                About the {vehicle.shortName}
              </h2>

              <p className="mt-6 text-base font-light leading-relaxed text-[#524E48] sm:text-lg dark:text-[#CCCCCC]">
                {vehicle.detail.intro}
              </p>

              <p className="mt-5 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                {vehicle.description}
              </p>

              <div className="mt-10 flex flex-col items-start gap-3">
                <BookNowButton label="Reserve This Vehicle" />
                <OrCallNote />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                Specification
              </span>
              <ul className="mt-5 border-t border-black/10 dark:border-white/10">
                {vehicle.specs.map((spec, idx) => (
                  <li
                    key={spec}
                    className="flex items-baseline gap-6 border-b border-black/10 py-4 dark:border-white/10"
                  >
                    <span className="font-mono text-xs font-bold text-[#888888]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-[#171717] dark:text-[#F8F6F2]">{spec}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-12 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                Best suited to
              </span>
              <ul className="mt-5 border-t border-black/10 dark:border-white/10">
                {vehicle.detail.bestFor.map((use) => (
                  <li
                    key={use}
                    className="border-b border-black/10 py-4 font-serif text-xl text-[#171717] dark:border-white/10 sm:text-2xl dark:text-[#F8F6F2]"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal linking between vehicles — useful to visitors and to crawlers */}
      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Also in the fleet"
            title="Other vehicles."
            align="left"
            className="mb-12"
          />

          <div className="border-t border-black/10 dark:border-white/10">
            {others.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/fleet/${item.slug}`}
                className="group grid grid-cols-1 items-center gap-6 border-b border-black/10 py-8 sm:grid-cols-12 dark:border-white/10"
              >
                <span className="font-mono text-xs font-bold text-[#888888] sm:col-span-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <span className="sm:col-span-5">
                  <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {item.category}
                  </span>
                  <span className="font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-4xl dark:text-[#F8F6F2]">
                    {item.name}
                  </span>
                </span>

                <span className="hidden text-sm font-light text-[#66625C] sm:col-span-5 sm:block dark:text-[#B8B8B8]">
                  {item.tagline}
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
