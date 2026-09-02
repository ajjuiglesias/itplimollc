import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { services, getService, PARTY_BUS_SECTION } from '@/content/services';
import { pageMetadata, JsonLd, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialBanner } from '@/components/ui/EditorialBanner';
import { EditorialList } from '@/components/ui/EditorialList';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle ?? `${service.category} | Private Chauffeur | ITP Limo`,
    description: service.metaDescription ?? service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      {/*
        These pages carried only the inherited LocalBusiness node. A Service
        node names what is actually being offered, which is what these pages
        are for, and the breadcrumb mirrors the location pages.
      */}
      <JsonLd
        data={[
          serviceSchema({
            name: service.category,
            path: `/services/${service.slug}`,
            description: service.metaDescription ?? service.description,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.category, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        subtitle={service.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.category },
        ]}
        image={service.image}
        imageTone={service.heroTone}
        ctaLabel="Arrange This Service"
      />

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Lead paragraph at display scale, as the homepage does */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#66625C] dark:text-[#A0A0A0]">
                The Brief
              </span>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xl font-light leading-[1.5] text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                {service.detail.intro}
              </p>

            </div>
          </div>

          {/*
            The party bus question, given a real heading so the page can rank
            for it, and answered honestly underneath. The client was explicit
            that nothing may imply they own one.
          */}
          {service.slug === 'group-transportation' && (
            <div className="mt-20 grid grid-cols-1 gap-10 border-t border-black/10 pt-14 lg:grid-cols-12 lg:gap-16 dark:border-white/10">
              <div className="lg:col-span-4">
                <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-[#171717] sm:text-4xl dark:text-[#F8F6F2]">
                  {PARTY_BUS_SECTION.heading}
                </h2>
              </div>
              <div className="flex flex-col gap-5 lg:col-span-7 lg:col-start-6">
                {PARTY_BUS_SECTION.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-base font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          <EditorialBanner
            image={service.image}
            alt={service.title}
            eyebrow={service.category}
            title={service.title}
            body={service.description}
            size="tall"
            className="my-20"
          />

          <SectionHeader
            eyebrow="The Process"
            title="How it works."
            align="left"
            className="mb-12"
          />

          <EditorialList
            items={service.detail.howItWorks.map((item) => ({
              title: item.step,
              body: item.body,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Included as standard"
                title="What comes with it."
                align="left"
              />

              <div className="mt-10 flex flex-col items-start gap-3">
                <BookNowButton label="Arrange This Service" />
                <OrCallNote />
              </div>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7">
              {service.amenities.map((amenity, idx) => (
                <li
                  key={amenity}
                  className="flex items-baseline gap-6 border-b border-black/10 py-5 first:border-t dark:border-white/10"
                >
                  <span className="font-mono text-xs font-bold text-[#888888]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-xl text-[#171717] sm:text-2xl dark:text-[#F8F6F2]">
                    {amenity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Other services"
            title="Explore the rest."
            align="left"
            className="mb-12"
          />

          <div className="border-t border-black/10 dark:border-white/10">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group grid grid-cols-1 items-center gap-4 border-b border-black/10 py-8 sm:grid-cols-12 dark:border-white/10"
              >
                <span className="font-mono text-xs font-bold text-[#888888] sm:col-span-1">
                  {item.number}
                </span>

                <span className="sm:col-span-5">
                  <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-widest text-[#66625C] dark:text-[#A0A0A0]">
                    {item.category}
                  </span>
                  <span className="font-serif text-3xl font-medium tracking-tight text-[#171717] transition-opacity group-hover:opacity-70 sm:text-4xl dark:text-[#F8F6F2]">
                    {item.title}
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
