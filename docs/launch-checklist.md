# Launch checklist — ITP Limo

The domain is connected last, after testing. These are the things that only
become correct at that point, and every one of them is silent if missed — the
site will look fine and quietly do the wrong thing.

## Must happen when the domain is connected

### 1. Set `NEXT_PUBLIC_SITE_URL` in Vercel

```
NEXT_PUBLIC_SITE_URL=https://www.itplimo.com
```

Decide `www` vs bare **before** launch and never change it after indexing.

Until this is set, `src/lib/seo.tsx` falls back to the Vercel deployment URL, and
these all point at `*.vercel.app`:

- every `<link rel="canonical">`
- every URL in `/sitemap.xml`
- the `host` and `Sitemap:` lines in `/robots.txt`
- every JSON-LD `@id`, including the shared `#business` node every page references

None of it errors. It just points at the wrong site.

### 2. Confirm indexing actually turned on

`src/app/robots.ts` blocks all crawling unless `VERCEL_ENV === 'production'` or
`NEXT_PUBLIC_SITE_URL` is set. That is deliberate for testing, but it means a
production deploy without the env var **serves `Disallow: /` to Google**.

After deploying, fetch it and confirm:

```
https://www.itplimo.com/robots.txt     -> Allow: /, Disallow: /book, Sitemap: …
https://www.itplimo.com/sitemap.xml    -> 20+ URLs, all on the real domain
```

### 3. Verify the canonical resolves

View source on any page and check `<link rel="canonical">` shows the real
domain. If it says `vercel.app`, step 1 did not take effect — redeploy, since
`NEXT_PUBLIC_*` is inlined at build time, not read at runtime.

### 4. Submit to Google Search Console

- Verify the property (DNS is easiest and survives redeploys)
- Submit `/sitemap.xml`
- Check Coverage after ~a week for anything unexpectedly excluded

### 5. Point the Google Business Profile at the new site

The profile exists (ITP Limo of Raleigh). Its website field must match the
canonical exactly, `www` and all — an inconsistent URL between the profile and
the site is one of the things that holds local rankings back.

## Worth checking at the same time

- **Old site redirects.** `itplimo.com` currently serves the previous site with
  its own URLs (e.g. `/limo-service-raleigh`). Any of those with traffic or
  links should 301 to the closest new page rather than 404.
- **Share card.** Run the new URL through a link preview (paste it into WhatsApp
  or Slack) and confirm the card shows the vehicle image, not a blank.
- **The 404.** Visit any nonsense path and confirm it returns the branded page
  and a real 404 status.

## Deliberately not done yet

- **Google Business Profile optimisation** — agreed as the next engagement.
- **Venue-specific wedding pages** — the client asked for these; no venue term
  tested had measurable search volume, so they are a vendor-partnership asset
  rather than a ranking play. Worth building before the 18 October bridal expo,
  but on that understanding.
- **Charlotte page** — awaiting the client's decision on whether they want the
  work. Search demand is there (720/mo at difficulty 8).
