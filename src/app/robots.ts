import type { MetadataRoute } from 'next';
import { abs, siteUrl } from '@/lib/seo';

/*
 * /book is disallowed: it is a thin wrapper around the Moovs booking iframe with
 * no indexable content of its own, and it accepts prefill query parameters that
 * would otherwise generate unbounded near-duplicate URLs.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === 'production' || Boolean(process.env.NEXT_PUBLIC_SITE_URL);

  // Preview deployments must never be indexed - they would compete with the
  // real domain for the same content.
  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/book'] }],
    sitemap: abs('/sitemap.xml'),
    host: siteUrl,
  };
}
