import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Briefcase, Check, MapPin, Users } from 'lucide-react';
import { locations, getLocation } from '@/content/locations';
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
    title: location.metaTitle,
    description: location.metaDescription,
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
        eyebrow={`${location.city}, ${location.stateAbbr}`}
        title={location.hero.title}
        subtitle={location.hero.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations' },
          { label: location.city },
        ]}
        image={location.image}
        ctaLabel={`Book a ${location.city} Ride`}
      />

      {/* Serving — split image / key locations */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="relative h-[340px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[460px] dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={location.image}
                  alt={`ITP Limo chauffeur service in ${location.city}`}
                  className="h-full w-full object-cover brightness-[0.8] contrast-[1.05]"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-5xl dark:text-[#F8F6F2]">
                {location.serving.title}
              </h2>

              <p className="mt-5 text-base font-light leading-relaxed text-[#524E48] dark:text-[#CCCCCC]">
                {location.serving.intro}
              </p>

              <ul className="mt-8 space-y-0">
                {location.serving.keyLocations.map((place) => (
                  <li
                    key={place}
                    className="flex items-center gap-3 border-b border-black/10 py-3.5 text-sm text-[#171717] dark:border-white/10 dark:text-[#F8F6F2]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {place}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                {location.serving.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What We Offer"
            title={`Our ${location.city} limo services.`}
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {location.services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[24px] border border-black/10 bg-white transition-shadow duration-500 hover:shadow-xl dark:border-white/10 dark:bg-[#141414]"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover brightness-[0.75] transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[#171717] dark:text-[#F8F6F2]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                    {service.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-[#070707] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The Fleet"
            title="Choose your vehicle."
            subtitle="Every vehicle is modern, spotless, and driven by a licensed professional chauffeur."
            onDark
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {location.vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="flex flex-col items-center gap-8 rounded-[28px] border border-white/12 bg-white/[0.03] p-8 sm:flex-row"
              >
                <div className="h-32 w-full shrink-0 overflow-hidden rounded-2xl sm:w-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-serif text-3xl font-medium uppercase tracking-tight text-white">
                    {vehicle.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-center gap-6 text-sm text-white/85 sm:justify-start">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald-400" />
                      {vehicle.passengers} passengers
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-emerald-400" />
                      {vehicle.luggage} bags
                    </span>
                  </div>

                  <div className="mt-6 flex justify-center sm:justify-start">
                    <CallDispatchButton label="Book Your Ride" variant="onDark" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-5xl dark:text-[#F8F6F2]">
                Why choose ITP Limo in {location.city}?
              </h2>

              <ul className="mt-8 space-y-0">
                {location.whyChoose.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 border-b border-black/10 py-4 text-sm text-[#524E48] dark:border-white/10 dark:text-[#CCCCCC]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {reason}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-start gap-3">
                <CallDispatchButton label="Request a Quote" />
                <BookingSoonNote />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-[340px] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl sm:h-[440px] dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/escalade.png"
                  alt={`ITP Limo fleet serving ${location.city}`}
                  className="h-full w-full object-cover brightness-[0.85]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas served — the original ran this as one paragraph of commas; a grid
          is far easier to scan and each town reads as its own term. */}
      {location.areasServed.areas.length > 0 && (
        <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow="Coverage"
              title={`Areas we serve around ${location.city}.`}
              subtitle={location.areasServed.intro}
              align="left"
              className="mb-12"
            />

            <ul className="grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-3 lg:grid-cols-4">
              {location.areasServed.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 border-b border-black/10 py-3.5 text-sm text-[#171717] dark:border-white/10 dark:text-[#F8F6F2]"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {area}
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
              {location.areasServed.closing}
            </p>

            <div className="mt-10 flex flex-col items-start gap-3">
              <CallDispatchButton label="Request a Quote" />
              <BookingSoonNote />
            </div>
          </div>
        </section>
      )}

      {other && (
        <section className="bg-white py-16 dark:bg-[#141414]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Link
              href={`/locations/${other.slug}`}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
            >
              <MapPin className="h-4 w-4" />
              Also serving {other.city}, {other.stateAbbr}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
