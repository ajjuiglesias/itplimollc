import type { MetadataRoute } from 'next';
import { abs, searchIndexingEnabled } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  // Allow crawling so Google can read noindex on review and booking pages.
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    ...(searchIndexingEnabled ? { sitemap: abs('/sitemap.xml') } : {}),
  };
}
