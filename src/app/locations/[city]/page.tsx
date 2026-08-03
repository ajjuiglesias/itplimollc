import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Navigation, Plane } from 'lucide-react';
import { locations, getLocation } from '@/content/locations';
import { services } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CallDispatchButton, BookingSoonNote } from '@/components/ui/CallDispatchButton';

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) return {};

  return {
    title: `${location.city} Private Chauffeur & ${location.airportCode} Airport Car Service | ITP Limo`,
    description: location.desc,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) notFound();

  const other = locations.find((item) => item.slug !== location.slug);

  return (
    <>
      <PageHero
        eyebrow={`${location.state} · Hub`}
        title={`${location.city} chauffeur service.`}
        subtitle={location.desc}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations' },
          { label: location.city },
        ]}
        image={location.image}
        ctaLabel={`Arrange ${location.city} Transfer`}
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base font-light leading-relaxed text-[#524E48] sm:text-lg dark:text-[#CCCCCC]">
                {location.detail.intro}
              </p>

              <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                Areas we cover
              </h2>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {location.detail.neighbourhoods.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 border-b border-black/10 py-3 text-sm text-[#524E48] dark:border-white/10 dark:text-[#CCCCCC]"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {area}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                Featured corridors
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {location.routes.map((route) => (
                  <span
                    key={route}
                    className="rounded-full bg-black/5 px-4 py-2 text-xs font-medium text-[#171717] dark:bg-white/10 dark:text-[#F8F6F2]"
                  >
                    {route}
                  </span>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[28px] border border-black/10 bg-[#FAF8F5] p-8 dark:border-white/10 dark:bg-[#1A1A1A]">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  Primary airport
                </span>
                <p className="mt-3 flex items-center gap-2.5 text-sm font-semibold text-[#171717] dark:text-[#F8F6F2]">
                  <Navigation className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  {location.airport}
                </p>

                <span className="mt-8 block text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
                  FBO & private aviation
                </span>
                <ul className="mt-4 space-y-3">
                  {location.detail.fbos.map((fbo) => (
                    <li
                      key={fbo}
                      className="flex items-center gap-2.5 text-sm font-light text-[#524E48] dark:text-[#CCCCCC]"
                    >
                      <Plane className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      {fbo}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <CallDispatchButton label="Call 24/7 Dispatch" fullWidth />
                  <BookingSoonNote />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service cross-links keep each location page connected to the rest of the site */}
      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow={`Serving ${location.city}`}
            title="Available in this market."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04]"
              >
                <service.icon className="h-5 w-5 text-[#171717] dark:text-[#F8F6F2]" />
                <span className="mt-4 block font-serif text-xl font-medium text-[#171717] dark:text-[#F8F6F2]">
                  {service.category}
                </span>
                <span className="mt-2 block text-xs font-light text-[#66625C] dark:text-[#B8B8B8]">
                  {service.tagline}
                </span>
              </Link>
            ))}
          </div>

          {other && (
            <Link
              href={`/locations/${other.slug}`}
              className="mt-12 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
            >
              <MapPin className="h-4 w-4" />
              Also serving {other.city}, {other.stateAbbr}
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
