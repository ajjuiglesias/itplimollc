import { WeddingFleetFeature } from '@/components/ui/WeddingFleetFeature';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';
import { getWeddingVenueRegion, weddingVenueRegions } from '@/content/weddingVenues';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialList } from '@/components/ui/EditorialList';
import { BookNowButton, OrCallNote } from '@/components/ui/CallDispatchButton';
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ region: string }>;
}
export function generateStaticParams() {
  return weddingVenueRegions.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getWeddingVenueRegion(slug);

  if (!region) return {};

  return pageMetadata({
    title: region.metaTitle,
    description: region.metaDescription,
    path: `/wedding-venues/${region.slug}`,
  });
}

export default async function WeddingVenueRegionPage({ params }: PageProps) {
  const { region: slug } = await params;
  const region = getWeddingVenueRegion(slug);

  if (!region) notFound();

  const others = weddingVenueRegions.filter((item) => item.slug !== region.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Wedding transportation in ${region.area}`,
            path: `/wedding-venues/${region.slug}`,
            description: region.metaDescription,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Wedding Venues', path: '/wedding-venues' },
            { name: region.label, path: `/wedding-venues/${region.slug}` },
          ]),
          faqSchema(region.faqs),
        ]}
      />

      <PageHero
        eyebrow={region.eyebrow}
        title={region.title}
        subtitle={region.subtitle}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Wedding Venues', href: '/wedding-venues' },
          { label: region.label },
        ]}
        image={region.image}
        ctaLabel="Request A Wedding Plan"
      />

      <section className="bg-white py-16 transition-colors duration-500 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#66625C] dark:text-[#A0A0A0]">
                Wedding transportation in {region.label}
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl font-light leading-[1.5] text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                {region.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {region.serviceArea.map((place) => (
                  <span
                    key={place}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs text-[#524E48] dark:border-white/10 dark:text-[#CCCCCC]"
                  >
                    <MapPin className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#FAF8F5] py-16 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Featured Venues"
            title={`Wedding venues across ${region.label}.`}
            subtitle="ITP Limo provides transportation throughout this service area. Venue names are listed for planning context; no affiliation or endorsement is implied."
            align="left"
            className="mb-12"
          />

          <div className="grid gap-x-12 border-t border-black/10 sm:grid-cols-2 dark:border-white/10">
            {region.venues.map((venue, index) => (
              <div
                key={venue}
                className="flex min-h-[72px] items-center gap-4 border-b border-black/10 py-4 dark:border-white/10"
              >
                <span className="font-mono text-[10px] font-bold text-[#888888]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-xl font-medium leading-tight text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                  {venue}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The Transportation Plan"
            title="Built around the real day."
            align="left"
            className="mb-12"
          />
          <EditorialList items={region.planning} />
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#FAF8F5] py-16 sm:py-24 dark:border-white/5 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader size="compact" eyebrow="Questions" title="Before you reserve." align="left" />
              <div className="mt-9 flex flex-col items-start gap-3">
                <BookNowButton label="Request A Wedding Plan" />
                <OrCallNote />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              {region.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-black/10 py-6 first:border-t dark:border-white/10">
                  <h2 className="flex gap-3 font-serif text-xl font-medium text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {faq.question}
                  </h2>
                  <p className="mt-3 pl-7 text-sm font-light leading-relaxed text-[#66625C] sm:text-base dark:text-[#B8B8B8]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WeddingFleetFeature />

      <section className="bg-white py-16 sm:py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Other Venue Guides"
            title="Explore the Triangle."
            align="left"
            className="mb-10"
          />
          <div className="border-t border-black/10 dark:border-white/10">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/wedding-venues/${item.slug}`}
                className="group flex items-center justify-between gap-5 border-b border-black/10 py-6 dark:border-white/10"
              >
                <span className="font-serif text-xl font-medium text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                  {item.label}
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
