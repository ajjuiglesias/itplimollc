# ITP Limo — Keyword & Search Intent Strategy

**Data pulled:** 20 August 2026 · Google Ads volume, CPC, competition, keyword
difficulty (0–100) and intent classification · United States, English
**Source:** Apify `santhej/keyword-research-tool` (Google Ads keyword data)
**Coverage:** 153 keywords measured across four markets plus route and national terms

---

## Read this first: the data overturned three of my earlier conclusions

An earlier version of this document was built from reading live search results
only, because no keyword tool was authorised. That version correctly identified
*who* competes in each market. It was wrong about *what to target*, in three
consequential ways. Corrections are recorded here rather than quietly edited out,
because the wrong version nearly got implemented.

**1. "Black car service" was the wrong target.** The SERP for *black car service
Raleigh* is full of serious executive operators, so I recommended retargeting
every page from "limo" to "black car". Actual volume:

| Keyword | Volume | KD |
|---|---:|---:|
| limo service raleigh nc | **390** | 19 |
| limo service raleigh | **390** | 18 |
| car service raleigh nc | **320** | 3 |
| chauffeur service raleigh | **320** | 0 |
| black car service raleigh nc | 50 | 0 |
| black car service raleigh | **20** | – |
| executive car service raleigh | 10 | – |

"Black car service Raleigh" gets roughly **20 searches a month**. "Limo service
Raleigh" gets 390. The SERP looked competitive precisely *because* serious
operators are fighting over a term almost nobody searches. Dropping "limo" would
have cost the site its highest-volume term.

**2. Boston should probably not be deprioritised.** I recommended maintaining it
and not investing. Boston has five to ten times the search volume of Raleigh:

| Keyword | Volume | KD | CPC |
|---|---:|---:|---:|
| boston airport car service | **2,400** | 24 | $8.51 |
| boston limo service | **1,900** | 32 | $6.98 |
| boston car service | **1,600** | 22 | **$12.84** |
| logan airport transportation | 880 | 32 | $4.88 |
| logan airport car service | 480 | 21 | $8.30 |
| logan airport limo | 320 | **0** | $7.04 |

That is a genuine trade-off rather than a clear call: harder (KD 22–32 against
0–19 in NC), no local presence, and a dispatch number that is now a Raleigh area
code — but far more demand and the highest commercial value on the board.
`logan airport limo` at 320/month with **KD 0** is an anomaly worth taking.

**3. FBO and private aviation have almost no search demand.** I called this a
high-value, low-competition opening. It is low-competition because nobody
searches it: *fbo ground transportation*, *fbo car service*, *private jet
transportation raleigh*, *tarmac transfer service* and *signature aviation ground
transportation* all returned **no measurable volume**. *private jet car service*
manages 10/month.

This does not make the service worthless — it is high revenue per booking and a
strong trust signal on the site. But it is won through relationships and FBO
referrals, **not through search**, and should not be an SEO priority. The
`/private-aviation` page should exist to close visitors who are already there,
not to acquire them.

What the SERP-only pass *did* get right: the route-page opportunity, the
Pinehurst 72-hour booking gap, and the competitor mapping. All confirmed below.

---

## The single best opportunity: Wilmington

| Keyword | Volume | KD | Competition |
|---|---:|---:|---|
| limo service wilmington nc | **590** | **3** | LOW |
| limo service in wilmington nc | 590 | 2 | LOW |
| wilmington nc limo service | 590 | 7 | LOW |
| wilmington nc car service | 110 | 13 | HIGH |
| black car service wilmington nc | 90 | 0 | MEDIUM |
| wilmington airport shuttle | 50 | 14 | MEDIUM |
| wilmington nc airport transportation | 50 | 4 | MEDIUM |

**590 searches a month at KD 3 with LOW competition.** Higher volume than any
Raleigh term and effectively no difficulty. This is the highest-return page on
the site and it went live three days ago.

Note the phrasing: the winning term is **"limo service wilmington nc"** — the
exact title already in place. That page happens to be correctly targeted.

---

## Market by market

### Raleigh & the Triangle

| Keyword | Volume | KD | CPC | Intent |
|---|---:|---:|---:|---|
| limo service raleigh / raleigh nc | 390 | 18–19 | $5.62 | commercial |
| rdu airport shuttle | **390** | **7** | $5.03 | navigational |
| car service raleigh (all variants) | 320 | 3–10 | $5.79 | commercial |
| chauffeur service raleigh | 320 | **0** | $7.21 | commercial |
| rdu airport transportation | 210 | 7 | $5.01 | navigational |
| car service raleigh-durham airport | 90 | **0** | $5.91 | **transactional** |
| car service durham nc | 90 | 0 | $4.84 | commercial |
| raleigh limo | 90 | 8 | $5.45 | navigational |
| rdu car service | 70 | 10 | $9.69 | navigational |
| black car service raleigh nc | 50 | 0 | $4.33 | navigational |
| airport transportation raleigh | 50 | 18 | $5.59 | navigational |
| limo service durham nc | 50 | 4 | $4.34 | commercial |
| wedding transportation raleigh | 40 | 0 | $6.79 | commercial |
| car service chapel hill nc | 30 | 0 | $10.54 | commercial |
| car service cary nc | 30 | 0 | $5.09 | commercial |

**Targets: "limo service raleigh" + "car service raleigh" + "chauffeur service
raleigh" together.** They are three separate clusters totalling ~1,030/month, and
two of the three sit at KD 0–3. The current title already leads with "Raleigh
Limo Service", which is right — it just needs "car service" and "chauffeur
service" worked into the H1 and body rather than replaced.

`car service raleigh-durham airport` is worth singling out: 90/month, **KD 0**,
and classified **transactional** — the visitor wants to book now.

Ignore `party bus raleigh` (720/month, KD 0). High volume, wrong business.

### Pinehurst — the city is tiny, the route is not

| Keyword | Volume | KD |
|---|---:|---:|
| **rdu to pinehurst** | **210** | **0** |
| pinehurst airport shuttle | 50 | 0 |
| rdu to pinehurst shuttle | 30 | 0 |
| car service pinehurst nc | 10 | 16 |
| limo service pinehurst nc | 10 | – |
| pinehurst golf transportation | no data | – |
| pinehurst resort transportation | no data | – |
| moore county airport transportation | no data | – |

Pinehurst as a *destination* barely registers — 10 to 50 searches a month. But
**`rdu to pinehurst` pulls 210 a month at KD 0 with a $8.41 CPC**, which is the
highest CPC of any NC term measured and a strong signal of commercial value.

**The Pinehurst page should be built around the journey, not the town.** Its
current title, "Pinehurst Limo Service | Golf & Resort Transfers", targets terms
worth 10/month. It should lead on the RDU→Pinehurst transfer.

This also explains the earlier finding that the resort's own shuttle requires
72 hours notice: people are searching for how to make that journey, and the
incumbent answer is inflexible.

### Wilmington

Covered above — the strongest position on the site. Also confirmed:
`rdu to wilmington` at **210/month, KD 0**, and
`car service from wilmington to raleigh` at 10/month, so the route runs in both
directions.

### Boston

Covered in the corrections above. Highest volume and highest CPC of any market;
also the hardest, and the one with no operational presence.

### Charlotte & Greensboro — currently no pages, and that may be wrong

| Keyword | Volume | KD | CPC |
|---|---:|---:|---:|
| **charlotte car service** | **720** | **8** | $7.88 |
| charlotte black car service | 390 | **0** | $5.73 |
| charlotte airport car service | 210 | **0** | $11.48 |
| greensboro car service | 140 | **0** | $9.13 |

**Charlotte has nearly double Raleigh's volume at half the difficulty.** I
previously recommended against a Charlotte page on the grounds that the client
serves it only "if the work is there" — and that reasoning still holds
commercially. But the SEO case is now the strongest of any market: 720/month at
KD 8, plus 390 and 210 sitting at KD 0.

**This is a business decision for the client, not an SEO one.** If they want
Charlotte work, the search demand is there and it is cheap to win. Worth putting
to them directly with these numbers.

### National "near me" terms — won by Google Business Profile, not pages

| Keyword | Volume | KD | CPC |
|---|---:|---:|---:|
| chauffeur service near me | **49,500** | 23 | $4.54 |
| limo near me | 8,100 | 33 | $5.57 |
| black car service near me | 2,900 | 15 | $6.81 |
| airport car service near me | 1,900 | 16 | $5.71 |

These are enormous, and no amount of on-page copy wins them. They are served
from the **Google Business Profile** — categories, service areas, reviews, photos
and NAP consistency. This is the single largest pool of demand touching the
business and it sits almost entirely outside the website.

**Recommendation: the GBP deserves as much attention as the site.** Confirm it is
claimed, correctly categorised, has the new 919 number and `itplimo.com`, lists
all four markets as service areas, and is actively gathering reviews.

---

## Priority order, by data

| # | Action | Why |
|---|---|---|
| 1 | **Set `NEXT_PUBLIC_SITE_URL`** | Nothing below can rank while canonicals point at `*.vercel.app` |
| 2 | **Google Business Profile** | 49,500/mo on "chauffeur service near me" alone; not a website problem |
| 3 | **Wilmington page** | 590/mo at KD 3 — best ratio on the site, already correctly titled |
| 4 | **Raleigh: add "car service" + "chauffeur service"** | Two clusters at 320/mo, KD 0–3, currently untargeted |
| 5 | **Route pages: RDU→Pinehurst, RDU→Wilmington** | 210/mo each at KD 0; Pinehurst CPC $8.41 |
| 6 | **Rebuild Pinehurst around the route** | City terms are 10/mo; the journey is 210/mo |
| 7 | **Decide on Charlotte** | 720/mo at KD 8 — client business call, not an SEO one |
| 8 | **Reconsider Boston** | 2,400/mo and $12.84 CPC vs no local presence — a real trade-off |
| 9 | Private aviation page | Keep, but for closing, not acquisition — no measurable demand |

---

## Title recommendations, revised against the data

| Page | Current | Verdict |
|---|---|---|
| Raleigh | `Raleigh Limo Service \| RDU Airport & Executive Car \| ITP Limo` | **Keep "Limo Service"** — 390/mo. Work "car service" and "chauffeur service" into H1 and body. |
| Wilmington | `Wilmington NC Limo Service \| ILM Airport & Beaches \| ITP Limo` | **Already optimal.** Exact match for a 590/mo, KD 3 term. |
| Pinehurst | `Pinehurst Limo Service \| Golf & Resort Transfers \| ITP Limo` | **Change.** Targets a 10/mo term. Lead on RDU→Pinehurst. |
| Boston | `Boston Limo Service \| Logan Airport Transfers \| ITP Limo` | **Keep.** 1,900/mo, and Logan terms add 1,680 more. |

My earlier recommendation to strip "limo" from every title is **withdrawn**.

---

## Data quality notes

- 41 of 153 terms returned `no_data` — below Google's reporting threshold. That
  means "too small to measure", not "zero". Most were B2B phrasings
  (*corporate transportation rtp*, *research triangle park transportation*) and
  FBO terms.
- Volume figures are Google Ads averages and cluster heavily: every phrasing of
  "car service raleigh" reports the same 320, because Google treats them as one
  query. Do not add them together.
- Keyword difficulty is the provider's 0–100 model, not Ahrefs' or SEMrush's.
  Directionally useful; not comparable across tools.
- Keyword-idea expansion pulls in adjacent noise — *full service car wash
  raleigh* (170/mo) surfaced under "car service raleigh". Excluded.
- Competitor brand terms observed: *white horse car service raleigh nc*,
  *azalea limo service wilmington nc*. Both are competitors with enough presence
  to be searched by name.

---

## Still open

- **Ahrefs and SEMrush remain unauthenticated.** The data above is Google Ads
  volume, which is the same underlying source those tools use for volume, but
  their backlink and difficulty models are their own. If a second opinion on
  difficulty matters, they need authorising from claude.ai connector settings.
- No backlink or domain-authority data was available from this source, so
  "how hard to actually outrank the incumbent" is still partly unanswered.
- Seasonality: 12-month trend data is available from this tool but was not
  pulled. Worth doing for Pinehurst, where golf demand is likely seasonal.
