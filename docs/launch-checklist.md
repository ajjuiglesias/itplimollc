# Launch checklist — ITP Limo

Domain connection remains the final step. Do not enable indexing on the client review deployment.

## Before replacing the old site

- Confirm final client approval and complete the agreed account handover.
- Confirm booking works on mobile and desktop, including call and text links.
- Obtain approval of the draft cancellation, waiting-time and privacy policies. The repository is not evidence that these terms were supplied by the client.
- Confirm the canonical hostname. The existing website uses https://www.itplimo.com; retain this unless there is a deliberate migration decision.
- Preserve MX, SPF, DKIM and DMARC records during DNS changes.
- Verify legacy redirects: /limo-service-raleigh → /locations/raleigh; /limo-service-boston → /locations/boston; /about-3 → /about; /contact-8 → /contact. These source URLs were verified on the old website on 12 September 2026. Check the old sitemap and Search Console export for additional URLs before cutover; do not redirect unrelated missing URLs to the homepage.

## Final production environment

Set NEXT_PUBLIC_SITE_URL to the canonical HTTPS domain and SEO_INDEXING_ENABLED=true only for production, then rebuild. Preview deployments remain noindex even with these variables. The default is noindex until the launch switch is enabled.

Allow robots.txt crawling so Google can read noindex metadata. /book remains noindex and is absent from the sitemap. After deployment verify actual rendered robots and googlebot metadata, rather than only robots.txt.

- Homepage and marketing pages: index, follow on the canonical domain.
- Booking page: noindex, follow.
- Sitemap: successful XML response, correct canonical host, no /book, no fabricated lastmod dates.
- Canonical and social URLs: correct domain and path on every page.
- HTTP and alternate hostname: one permanent redirect to the canonical HTTPS host.
- Legacy redirects: permanent response and relevant destination returning 200.
- Unknown paths: actual 404 status, not a soft 404.
- Vercel review hostname: use host-specific redirect or deployment protection at launch so it does not serve an indexable duplicate of the custom domain. Build-time metadata cannot distinguish two hostnames serving the same production build.

## Search verification and monitoring

Verify the Search Console domain property; submit /sitemap.xml. Inspect the homepage, Raleigh, Boston, Pinehurst, Wilmington and wedding pages. Check structured data with Google's Rich Results Test; FAQ markup does not mean this business qualifies for FAQ rich results.

Check PageSpeed Insights on mobile and desktop after deployment. Review real-user Core Web Vitals when sufficient field data exists: LCP, INP and CLS. A local build or lab test is not proof of field performance.

Track relevant impressions, clicks, enquiries and bookings. Review indexing and redirect errors after launch. Google Business Profile optimization remains a separate project for the existing profile, not a new listing. Service-area pages must never imply physical offices where none exist.
