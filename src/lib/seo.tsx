import type { Metadata } from 'next';

/*
 * Site identity and structured data.
 *
 * Everything here must trace to a client source. There is deliberately no
 * aggregateRating, no review count and no openingHours: the repo was once
 * scaffolded with invented testimonials and star ratings, and emitting those as
 * schema would turn marketing filler into a machine-readable claim to Google.
 * Absent fields cost nothing; false ones risk a manual action.
 */

/**
 * Canonicals, sitemap and JSON-LD @ids all resolve against this.
 *
 * NEXT_PUBLIC_SITE_URL is still unset in Vercel, so production currently
 * resolves to the deployment URL. That must be set to the real domain before
 * launch or every canonical and every @id points at *.vercel.app.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const abs = (path: string) => new URL(path, siteUrl).toString();

/**
 * Page metadata with the social card filled in.
 *
 * Next does NOT derive `og:title` from `title` — a page that sets only `title`
 * silently inherits the parent's `og:title` and `og:url`, so every inner page
 * shared as the homepage until this existed. Verified by reading the rendered
 * meta tags, not assumed.
 *
 * The image is inherited from the root layout on purpose: one card for the
 * whole site is right until there is per-page art worth the bytes.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
    },
    twitter: {
      title: opts.title,
      description: opts.description,
    },
  };
}

/** Stable @id for the business node, referenced by every page's schema. */
export const BUSINESS_ID = `${siteUrl}/#business`;

export const business = {
  name: 'ITP LIMO LLC',
  shortName: 'ITP Limo',
  phone: '+1-919-435-2157',
  email: 'Reservations@itplimo.com',
  /*
   * Locality only. The client asked for "Wake Forest, NC" rather than the full
   * address, and there is no street address to publish for any other market.
   * Omitting streetAddress is correct for a service-area business; inventing
   * one per city would be a Google Business Profile violation and can get the
   * whole profile suspended, including the markets that are real.
   */
  locality: 'Wake Forest',
  region: 'NC',
  country: 'US',
} as const;

/**
 * One entry in `areaServed`. `type` matters: a state is not a City, and
 * mislabelling Virginia as one would be a false statement in machine-readable
 * form even though the page copy would look fine.
 */
export interface ServedArea {
  name: string;
  type: 'City' | 'State';
}

/**
 * The business node. A service-area business: one real locality, with every
 * market it covers expressed as `areaServed` rather than as a separate address.
 * That includes territory served on request — coverage is a weaker claim than a
 * landing page, and areaServed is exactly the right place to make the weaker one.
 */
export function businessSchema(areas: ServedArea[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: business.name,
    alternateName: business.shortName,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: areas.map((a) => ({ '@type': a.type, name: a.name })),
  };
}

/**
 * A single market's page. Modelled as a Service provided by the business rather
 * than as its own LocalBusiness, because there is no separate premises, staff or
 * phone line in that city — only coverage.
 */
export function locationServiceSchema(opts: {
  city: string;
  stateAbbr: string;
  path: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: `Chauffeur and black car service in ${opts.city}, ${opts.stateAbbr}`,
    serviceType: 'Chauffeur service',
    description: opts.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: `${opts.city}, ${opts.stateAbbr}`,
    },
    url: abs(opts.path),
  };
}

/**
 * A service the business offers, independent of any one market. Distinct from
 * `locationServiceSchema`, which is the same business scoped to a city — this
 * one has no areaServed because the service is offered across all of them.
 */
export function serviceSchema(opts: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    provider: { '@id': BUSINESS_ID },
    url: abs(opts.path),
  };
}

/**
 * FAQPage for the homepage accordion. Built from the same array the accordion
 * renders, so the two can never drift — Google treats schema that does not
 * match the visible page as a violation, not a mistake.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      ...(step.path ? { item: abs(step.path) } : {}),
    })),
  };
}

/**
 * Renders a JSON-LD block. Next dedupes nothing here, so each page is
 * responsible for emitting the nodes it actually needs.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema is built from typed literals above, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
