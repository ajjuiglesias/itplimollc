# ITP Limo design audit — 10 September 2026

## Scope and evidence

Reviewed the shared design components and page templates, and inspected the local production preview. Desktop checks covered the homepage, Raleigh, Gazelle, wedding hub, regional wedding guide, wedding service, fleet, contact, about, airport route, private aviation, flight tracking and booking. Mobile measurements covered the homepage, Gazelle, wedding hub, contact, fleet and booking at 390 × 844. Sibling location/service/venue pages share templates; this is not a claim that every route and state received a visual inspection. Legal pages were not visually audited. No existing graphify graph was available; findings come from source inspection and browser evidence.

## Assessment

The site already has a recognizable visual identity: PP Fragment Glare display typography, Plus Jakarta Sans body text, white and warm ivory sections, charcoal feature sections, softly rounded photographic panels, subtle borders, small emerald accents and pill-shaped actions. Preserve that identity and the approved homepage composition.

The newer pages reuse components but do not consistently preserve their proportions or balance of imagery and text. Matching component names is not sufficient to produce matching design.

## Priority 1 — Correct the hierarchy

- SectionHeader applies the same 72px desktop / 96px wide-screen scale to both full-width statements and narrow columns. On Gazelle, “A private moment for two. Transportation for everyone.” measures 389px tall inside a 454px column. The coverage heading measures 311px tall. These dominate relatively short adjacent lists.
- Add explicit display, section and compact heading sizes. Proposed desktop targets: 64–72px for primary full-width statements, 44–56px for section titles, 36–44px for split-column titles. Keep mobile headings around 28–36px depending on role.
- Shorten visible secondary headlines while preserving useful search terms in the page title, H1 and substantive copy. For example, use “For the couple. For the guests.” for the Gazelle coordination section and “Across the Triangle.” for its coverage section.
- Apply this to existing narrow-column headings too, including Raleigh. The issue is not limited to the newly created pages.

## Priority 2 — Give imagery a deliberate role

- The square Gazelle photograph is aggressively cropped as a wide hero background; at mobile width it shows only part of the car. Keep cover where required, but select suitable compositions and provide per-image focal positions and responsive treatments.
- A supplied multi-panel collage is currently treated as one background image inside EditorialBanner, with text and a dark gradient over it. This hides details and introduces white seams that compete with the site layout. Use individual images in an intentional gallery when originals are available, or show the supplied collage as a separate gallery item without overlay copy.
- Wedding venue pages have a hero photograph but little imagery through the body. Introduce a restrained vehicle/service photograph near the transport plan, using the established rounded panel treatment. Do not imply an unrelated photo depicts a named venue.
- Avoid repeating the same image in hero and body without a distinct purpose. Existing service/location templates also do this.

## Priority 3 — Restore page rhythm

- The homepage mixes photographic sections, service accordions, feature cards and a dark fleet section. The wedding pages lean heavily on alternating pale sections, large headings and static lists. This is the principal visual mismatch after typography.
- Gazelle should follow: focused hero → concise introduction and vehicle imagery → occasion highlights → coordinated wedding fleet → compact coverage → FAQ and enquiry.
- Wedding hub should follow: hero → short planning introduction → regional guide links → fleet/transportation feature → focused enquiry.
- Regional venue pages should follow: hero → local introduction → scannable venue directory → illustrated transportation plan → compact FAQ → related guides.
- Keep factual directories as directories. Decorative cards around every venue would add bulk without helping visitors.
- Standardize regular inner-page spacing around 64–96px on desktop and 48–64px on mobile, reserving larger pauses for major visual sections. Current templates mix 80/112, 96/128 and homepage 112/144px section padding.

## Priority 4 — Unify the smaller details

- Define a short radius scale for controls, content cards and image panels. Current implementations mix 16, 24, 28, 32 and 36px, sometimes with several nested surfaces.
- Keep shadows strongest on key photographic features; reduce unnecessary elevation on informational rows. Static content should not look clickable solely because it lifts or gains a large hover shadow.
- Consolidate the numerous near-black background values into a small shared surface palette. Keep emerald accents sparse and consistent.
- Standardize FAQ layout and behaviour across the site; homepage uses expandable questions while new pages use fully expanded lists.
- Shorten button labels where they crowd mobile layouts. Use one clear primary action per decision section.
- Wedding pages should make the enquiry destination clear. Buttons labelled “Check Your Wedding Date” currently lead to the generic booking page, rather than a dedicated date/vehicle enquiry flow.

## Page-family priorities

| Family | Priority | Main improvement |
| --- | --- | --- |
| Gazelle | First | Compact column headings, intentional vehicle gallery, better hero crop, fewer repetitive text sections |
| Wedding hub and five regional guides | First | More visual balance, compact headings, clearer guide navigation and consistent FAQs |
| Locations | Next | Heading proportions, shorter hero descriptions, purposeful imagery and consistent service/fleet rows |
| Service and airport-route pages | Next | Shared spacing, stronger visual pacing on text-heavy route pages |
| Fleet | Next | Reduce nested-card bulk and tune image proportions, particularly the new Gazelle item |
| Contact and booking | Next | Keep the task prominent and reduce the amount of hero/intro before contact or booking controls |
| About, private aviation, flight tracking | Polish | Apply shared typography, spacing and surface rules |
| Homepage | Preserve and polish | Keep approved composition; use it as the visual reference while addressing shared inconsistencies |

## Mobile findings and verification limits

No horizontal page overflow was measured on the six sampled mobile routes. Mobile H1 sizes were approximately 35–36px. The wedding hub hero was 716px tall on an 844px screen, so almost the entire first screen precedes useful page content. Booking's hero measured 560px before its booking section. Smaller type alone will not solve this: copy length, breadcrumb space, padding and action stacking also matter.

Scroll-triggered animations can hide content in an immediate full-page capture; apparent blank areas in such captures must be checked in a settled viewport before being called layout defects. Dark-mode visual QA, keyboard interaction checks and all individual route checks remain for the implementation pass.

## Recommended implementation order

1. Introduce heading variants and consistent inner-page spacing.
2. Rework Gazelle as the reference for new wedding pages.
3. Apply the same visual rules to the wedding hub and regional guides.
4. Normalize remaining page families without rebuilding the approved homepage.
5. Verify at 390px, tablet width, 1366 × 768 and a wide desktop; check dark mode, focus states, image crops and CTA destinations.

This audit changes no production page layouts or copy. Existing local Gazelle work remains available for revision.
