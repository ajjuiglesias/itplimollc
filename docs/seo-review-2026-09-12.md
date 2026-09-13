# SEO review — 12 September 2026

Reviewed the actual `ITP-Limo-Keyword-Plan.docx` and the supporting Markdown strategy. This is an implementation review, not verification of its historical search-volume figures.

## Keyword plan corrections

The strategy cites an Apify keyword-research actor. No raw export has been verified during this audit. Treat volumes, CPC and organic difficulty as provisional. Google Ads advertising competition does not establish organic ranking difficulty. Remove interpretations such as “nobody has claimed this”, guaranteed easy rankings, or no-data meaning no demand from future client advice.

The client confirmed an existing Google Business Profile, prom/group transportation interest (without traditional party buses), wedding investment, and expanded coastal coverage. These supersede the document. Do not assume Boston staffing arrangements from the document without client evidence. National near-me demand is not Raleigh demand. The website can contribute to local visibility; GBP is not the only input.

## Existing target structure

- Raleigh, Boston, Pinehurst and Wilmington location pages: distinct market intent.
- RDU–Pinehurst and Raleigh–Wilmington route pages: journey intent.
- Airport, hourly, corporate, group, wedding and wedding-guest-shuttle service pages: service intent.
- Wedding venue region guides: planning and venue transportation intent, without implying venue partnerships.
- Vintage wedding car landing page: Gazelle experience and wedding exit intent.

Charlotte/Greensboro do not require thin pages solely because an estimated volume looks attractive. Keep coverage accurate to actual operations.

## Fixed in this audit

- Explicit `SEO_INDEXING_ENABLED=true` launch switch, requiring a configured HTTPS custom domain and excluding Vercel preview/development environments.
- Default review metadata is noindex. Crawling is allowed so search engines can read it.
- Booking page remains noindex even after launch and is excluded from the sitemap.
- Removed artificial build-time last-modified dates.
- Canonical base normalized to its origin; JSON-LD escapes less-than characters.
- TypeScript check passed.

## Verification completed

The production build generated all 41 routes. A rendered crawl checked 34 HTML pages and found no duplicate titles or descriptions, missing metadata, invalid canonicals, extra or missing H1 elements, malformed JSON-LD, unresolved internal links, or missing local image references. Server checks confirmed successful primary pages, permanent legacy redirects, a real 404 response, and noindex protection on review pages. Indexing-policy tests cover five launch and preview configurations.

Unsupported promises about exact wait times, delay charges, cancellation windows, sanitation, confidentiality protocols and specific onboard amenities were removed from indexable marketing copy. Draft legal terms remain available for client review but are noindex and excluded from the sitemap.

## Still required before final-domain SEO sign-off

Review the original keyword export before treating numerical priorities as validated. The client must approve the legal policies. Mobile performance and real-user Core Web Vitals require testing on the final deployed domain; a successful local production build cannot establish field performance.

## Final-domain launch

Set NEXT_PUBLIC_SITE_URL to the selected canonical HTTPS domain and SEO_INDEXING_ENABLED=true in the production environment only, then rebuild. Keep preview environments noindex. Verify rendered metadata, HTTPS and www/non-www redirects on the actual domain. Inventory old website URLs and implement relevant permanent redirects before replacement. Verify Search Console, submit the sitemap, inspect key pages and monitor indexing/conversions. Preserve domain email DNS records during migration. GBP optimization stays a separate project.

Do not describe the site as 100% SEO complete or promise a Google position. Indexability is testable; indexing and ranking remain Google's decisions.

References: https://developers.google.com/search/docs/crawling-indexing/block-indexing and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
