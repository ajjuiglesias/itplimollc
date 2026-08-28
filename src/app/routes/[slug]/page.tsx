import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { routes, getRoute } from '@/content/routes';
import { getLocation } from '@/content/locations';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialList } from '@/components/ui/EditorialList';
import { OrCallNote, BookNowButton } from '@/components/ui/CallDispatchButton';
import {
  pageMetadata,
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) return {};

  return pageMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/routes/${route.slug}`,
  });
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) notFound();

  const others = routes.filter((item) => item.slug !== route.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Private car service from ${route.from} to ${route.to}`,
            path: `/routes/${route.slug}`,
            description: route.metaDescription,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/locations' },
            { name: `${route.from} to ${route.to}`, path: `/routes/${route.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${route.from} → ${route.to}`}
        title={route.hero.title}
        subtitle={route.hero.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/locations' },
          { label: `${route.from} to ${route.to}` },
        ]}
        image={route.image}
        ctaLabel="Book This Transfer"
      />

      {/* Spec strip — the four things somebody planning this journey asks first */}
      <section className="border-b border-black/5 bg-white py-14 dark:border-white/5 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {route.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#66625C] dark:text-[#A0A0A0]">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-[#171717] sm:text-3xl dark:text-[#F8F6F2]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-24 transition-colors duration-500 sm:py-32 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Why take it privately"
            title={`The case for driving ${route.to}.`}
            align="left"
            className="mb-12"
          />

          <EditorialList
            items={route.reasons.map((reason) => ({
              title: reason.title,
              body: reason.body,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#FAF8F5] py-24 sm:py-32 dark:border-white/5 dark:bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Planning it"
            title="What to know before you book."
            align="left"
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
            {route.detail.map((block, idx) => (
              <div key={block.title}>
                <span className="font-mono text-xs font-bold text-[#888888]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium leading-snug tracking-tight text-[#171717] sm:text-3xl dark:text-[#F8F6F2]">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[#66625C] dark:text-[#B8B8B8]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-3">
            <BookNowButton label="Book This Transfer" />
            <OrCallNote />
          </div>
        </div>
      </section>

      {/* Internal links back into the market cluster this route connects */}
      <section className="bg-white py-20 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#66625C] dark:text-[#A0A0A0]">
            Both ends of this route
          </span>

          <div className="mt-6 border-t border-black/10 dark:border-white/10">
            {route.relatedLocations.map((citySlug) => {
              const location = getLocation(citySlug);
              if (!location) return null;
              return (
                <Link
                  key={citySlug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-center justify-between border-b border-black/10 py-6 dark:border-white/10"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-serif text-2xl text-[#171717] transition-opacity group-hover:opacity-70 sm:text-3xl dark:text-[#F8F6F2]">
                      {location.city} chauffeur service
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#888888] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              );
            })}

            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/routes/${item.slug}`}
                className="group flex items-center justify-between border-b border-black/10 py-6 dark:border-white/10"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-serif text-2xl text-[#171717] transition-opacity group-hover:opacity-70 sm:text-3xl dark:text-[#F8F6F2]">
                    {item.from} to {item.to}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#888888] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
