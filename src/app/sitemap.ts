import type { MetadataRoute } from 'next';
import { locations } from '@/content/locations';
import { fleet } from '@/content/fleet';
import { services } from '@/content/services';
import { abs } from '@/lib/seo';

/*
 * Built from the content modules rather than a hand-kept list, so a route can
 * never be added without appearing here.
 *
 * `announcedMarkets` is intentionally absent: those markets have no page, so
 * listing them would submit URLs that 404. They enter the sitemap on the same
 * commit that promotes them into `locations`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
  ) => ({ url: abs(path), lastModified: new Date(), changeFrequency, priority });

  return [
    entry('/', 1),
    entry('/locations', 0.9),
    ...locations.map((l) => entry(`/locations/${l.slug}`, 0.9)),
    entry('/services', 0.8),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.7)),
    entry('/fleet', 0.8),
    ...fleet.map((v) => entry(`/fleet/${v.slug}`, 0.7)),
    entry('/private-aviation', 0.7),
    entry('/flight-tracking', 0.5),
    entry('/about', 0.5),
    entry('/contact', 0.6),
    entry('/book', 0.6),
    entry('/privacy', 0.2, 'yearly'),
    entry('/terms', 0.2, 'yearly'),
  ];
}
