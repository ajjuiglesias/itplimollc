import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Briefcase, Check, MapPin, Users } from 'lucide-react';
import { locations, getLocation } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { EditorialList } from '@/components/ui/EditorialList';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';
import { pageMetadata, JsonLd, breadcrumbSchema, locationServiceSchema } from '@/lib/seo';

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

  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) notFound();

  const other = locations.find((item) => item.slug !== location.slug);

  return (
    <>
      <JsonLd
        data={[
          locationServiceSchema({
            city: location.city,
            stateAbbr: location.stateAbbr,
            path: `/locations/${location.slug}`,
            description: location.metaDescription,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/locations' },
            { name: location.city, path: `/locations/${location.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${location.city}, ${location.stateAbbr}`}
        title={location.hero.title}
        subtitle={location.hero.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/locations' },
          { label: location.city },
        ]}
        image={location.image}
        ctaLabel={`Book a ${location.city} Ride`}
      />

      {/* Serving — editorial banner over a hairline list of key locations */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <EditorialBanner
            image={location.image}
            alt={`ITP Limo chauffeur service in ${location.city}`}
            eyebrow={`${location.city} Coverage`}
            title={location.serving.title}
            body={location.serving.intro}
            size="tall"
            className="mb-20"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#171717] sm:text-5xl dark:text-[#F8F6F2]">
                Key locations we serve.
              </h2>
              <p className="mt-5 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                {location.serving.closing}
              </p>
            </div>

            <ul className="lg:col-span-7 lg:col-start-6">
              {location.serving.keyLocations.map((place, idx) => (
                <li
                  key={place}
                  className="flex items-baseline gap-4 border-b border-black/10 py-4 dark:border-white/10 sm:gap-10 sm:py-5"
                >
                  <span className="font-mono text-xs font-bold text-[#888888]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-lg text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                    {place}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services — hairline editorial rows rather than a card grid */}
      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What We Offer"
            title={`Our ${location.city} limo services.`}
            // No hard-coded count: the service mix is deliberately different per
            // market, from six in Pinehurst to nine across the Triangle.
            subtitle={`How we move you around ${location.city} — every one of them held to the same chauffeur standard.`}
            className="mb-16"
          />

          <EditorialList
            items={location.services.map((service) => ({
              title: service.title,
              body: service.desc,
            }))}
          />
        </div>
      </section>

      {/* Fleet — dark section, large display numerals for capacity */}
      <section className="bg-[#070707] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The Fleet"
            title="Choose your vehicle."
            subtitle="Every vehicle is a 2026 model, driven by a licensed professional chauffeur."
            onDark
            className="mb-20"
          />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {location.vehicles.map((vehicle, idx) => (
              <div key={vehicle.name}>
                <div className="relative mb-8 h-56 overflow-hidden rounded-[28px] sm:h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover brightness-[0.88]"
                  />
                </div>

                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono text-xs font-bold text-[#888888]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A0A0A0]">
                    {location.city} Fleet
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-medium uppercase tracking-tight text-white sm:text-3xl xl:text-4xl">
                  {vehicle.name}
                </h3>

                <div className="mt-6 flex items-stretch gap-10">
                  <div>
                    <span className="font-serif text-4xl font-normal text-white sm:text-5xl">
                      {vehicle.passengers}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#A0A0A0]">
                      <Users className="h-3 w-3" />
                      Passengers
                    </span>
                  </div>

                  {vehicle.luggage > 0 && (
                    <>
                      <div className="w-px bg-white/15" />

                      <div>
                        <span className="font-serif text-4xl font-normal text-white sm:text-5xl">
                          {vehicle.luggage}
                        </span>
                        <span className="mt-1 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#A0A0A0]">
                          <Briefcase className="h-3 w-3" />
                          Bags
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <BookNowButton label="Book Your Ride" variant="onDark" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The Difference"
                title={`Why choose ITP in ${location.city}?`}
                align="left"
              />

              <div className="mt-10 flex flex-col items-start gap-3">
                <BookNowButton label="Request a Quote" />
                <OrCallNote />
              </div>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7">
              {location.whyChoose.map((reason, idx) => (
                <li
                  key={reason}
                  className="flex items-baseline gap-6 border-b border-black/10 py-5 dark:border-white/10"
                >
                  <span className="font-mono text-xs font-bold text-[#888888]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-base text-[#171717] sm:text-lg dark:text-[#F8F6F2]">
                    {reason}
                  </span>
                  <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas served — the original ran these as one comma-separated paragraph */}
      {location.areasServed.areas.length > 0 && (
        <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionHeader
              eyebrow="Coverage"
              title={`Areas we serve around ${location.city}.`}
              subtitle={location.areasServed.intro}
              align="left"
              className="mb-14"
            />

            <ul className="grid grid-cols-1 gap-x-10 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {location.areasServed.areas.map((area) => (
                <li
                  key={area}
                  className="border-b border-black/10 py-3.5 font-serif text-lg text-[#171717] dark:border-white/10 sm:py-4 sm:text-2xl dark:text-[#F8F6F2]"
                >
                  {area}
                </li>
              ))}
            </ul>

            <p className="mt-12 max-w-3xl text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
              {location.areasServed.closing}
            </p>

            <div className="mt-10 flex flex-col items-start gap-3">
              <BookNowButton label="Request a Quote" />
              <OrCallNote />
            </div>
          </div>
        </section>
      )}

      {other && (
        <section className="bg-white py-16 dark:bg-[#141414]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Link
              href={`/locations/${other.slug}`}
              className="inline-flex min-h-[44px] items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#171717] dark:text-[#F8F6F2]"
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
