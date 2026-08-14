# Full SEO Audit — marniblythespeaks.com

**Date:** August 13, 2026 · **Target:** pre-launch production build (localhost:3010, production domain https://marniblythespeaks.com)
**Method:** 6 specialist audits (technical, content, schema, sitemap, AI-search/GEO, SXO with live SERP analysis) + Lighthouse runs against the production build. Business type: B2B professional services (keynote speaker). Not applicable: local SEO, e-commerce, backlinks (no public domain yet), Google API field data (no credentials).

---

## SEO Health Score: 56 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 47 | 10.8 |
| On-Page SEO | 20% | 55 | 11.0 |
| Schema / Structured Data | 10% | 5 | 0.5 |
| Performance (CWV, lab) | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 58 | 5.8 |
| Images | 5% | 75 | 3.8 |
| **Total** | | | **56** |

**Read on the score:** the infrastructure (crawlability, sitemap, SSR, performance) is in good shape for a pre-launch build; the score is dragged down by three clusters that are all fixable before launch — a missing proof/trust layer (testimonials, verifiable logos, privacy policy), zero structured data, and an on-page keyword mismatch on the money pages.

---

## Top 5 Critical Issues

1. **No verifiable trust content anywhere on the site.** Testimonials are gated off (correctly — the data is placeholder), but that leaves zero third-party proof: no organizer quotes, no case studies, no linked press. The logo walls (pulled from Marni's own fullpocketcoaching.com, so they are *her* claimed engagements — not fabricated) are unlinked and uncontextualized, which reads as unverifiable to planners, quality raters, and LLMs alike. Every ranking competitor page checked in the SXO audit (3/3) carries testimonials + client logos on its speaking/industry pages.
2. **No privacy policy while the contact form collects PII** (name, email, organization). A trust signal Google's guidelines explicitly weigh and a GDPR/CCPA compliance gap. No terms page either.
3. **Open Graph metadata is identical on 8 of 10 pages.** Child routes override `title`/`description` but inherit the root `openGraph` object verbatim, so every forwarded link — including the industry pages built for committee forwarding — unfurls with generic homepage copy.
4. **Zero structured data site-wide.** No Person, Organization, Service, FAQPage, VideoObject, or BreadcrumbList markup — forfeiting entity/knowledge-panel groundwork and AI-answer grounding. Ready-to-paste JSON-LD for all of these was generated during the audit (see ACTION-PLAN.md).
5. **The money pages don't say "keynote speaker."** The phrase never appears in industry-page copy, titles, or H1s ("Speaking for Insurance" vs. competitors' "Insurance Keynote Speaker"), and the SXO SERP analysis shows industry+"keynote speaker" long-tail is exactly where individual speaker sites win (75% of the "insurance industry keynote speaker" top results are individual speaker industry pages).

## Top 5 Quick Wins

1. **Fix the meta-description truncation bug** — `ind.intro.slice(0, 155)` cuts mid-word on /speaking/insurance ("...producers trust le") and /speaking/financial-services ("...market sw"). One-line fix or hand-written descriptions.
2. **Retitle the six industry pages** to "\[Industry\] Keynote Speaker | Marni Blythe" pattern and work "keynote speaker" into H1s/eyebrows — the cheapest high-leverage on-page change in the audit.
3. **Paste in the generated JSON-LD** (Organization+WebSite in layout, Person on /about, Services on /speaking, breadcrumbs on industry pages) — the blocks are written and validated, pending two asset decisions (square logo, video upload date).
4. **Add per-page OG tags + canonicals** via a small metadata helper — fixes issues #3 and the canonical gap in one pass.
5. **Add `llms.txt` + a "What Is Human Intelligence (HI)?" definition block.** The GEO audit found the site never plainly defines her signature term — a ~150-word definitional passage repeated verbatim on /, /about, and /speaking is the single highest-leverage AI-search change available.

---

## Category Findings

### Technical SEO — 74/100
- **Pass:** crawlability (permissive robots.txt, valid sitemap, no accidental noindex), URL structure (clean paths, single-hop 308 trailing-slash redirects, real 404s), mobile viewport, SSR content availability (all page text present in server HTML — crawlers see everything).
- **High:** OG/Twitter metadata identical on 8/10 pages (root-layout inheritance bug); no canonical tags anywhere; hero paint is hydration-gated — above-the-fold copy is wrapped in scroll-reveal animations (`opacity:0` until JS hydrates + IntersectionObserver fires), producing a 2.6s render delay (64% of LCP) and an unstable LCP element. Fix: CSS-only or mount-triggered animation for above-the-fold hero elements; keep scroll reveals below the fold.
- **Medium:** no security headers configured in source (won't self-resolve on deploy); sitemap `lastModified` is request-time `new Date()` on every URL (meaningless signal — omit or use real dates); no apple-touch-icon/manifest (only favicon.ico); /speaking/healthcare gets identical sitemap priority to growth verticals despite the de-emphasize-healthcare direction — **flag for Marni's decision**, not a silent change.
- **Low:** `X-Powered-By` header exposed (set `poweredByHeader: false`); case-sensitive route 404s (/About); no IndexNow (fine at this scale).

### Content Quality — 47/100 (E-E-A-T ≈ 42/100)
- **Strength:** the copywriting voice is genuinely good — specific, active, on-brief, not AI-slop; readability ~Flesch 60–65; no keyword stuffing; correct judgment shipping *no* testimonials rather than fake ones.
- **Critical:** trust layer absent (see Top 5 #1, #2).
- **High:** meta truncation bug (2 pages); Home and /speaking share an identical H1 ("Human Intelligence in the Age of AI") — /speaking's H1 should carry program-selection intent instead; "speaker" never appears in industry copy; industry pages are thin (~165–185 unique words) and 4 of 5 content blocks are shared template — closer to doorway-page pattern than independently-ranking landing pages (the sitemap audit judged them differentiated *enough* at n=6; both agents agree they need deepening before scaling further).
- **Medium:** homepage meta description 198 chars (truncates); home page has ~270 unique indexable words (light for the primary landing page); no breadcrumbs or links back to the /speaking hub from industry pages; stats band numbers are provisional pending Marni's confirmation.
- **Low:** About bio lacks dated/linkable facts (book year, publisher/ISBN/link for *Culture Catalyst*); phone number still flagged in code for Marni's confirmation.

### On-Page SEO — 55/100
Unique titles and descriptions exist per page (good), heading hierarchy is otherwise clean, internal linking from home is strong. Held down by: keyword-thin titles on the money pages, duplicate H1, the meta bugs above, missing canonicals, per-page OG, and no breadcrumb trail.

### Schema — 5/100
Zero structured data detected (confirmed via source grep and rendered HTML). Complete generated JSON-LD delivered in the audit for: Organization + WebSite (layout), Person (about), 5 × Service (speaking), VideoObject (demo reel — needs real uploadDate; re-issue when the agency reel lands), FAQPage (contact — note: no Google rich-result benefit for commercial sites since Aug 2023; ship it for AI-engine extraction), BreadcrumbList (industry pages, driven by the existing industries array). Two open items: square logo asset for Organization (og-image.png is 1200×630 landscape; Google wants ≥112×112 square) and the video upload date.

### Performance — 80/100 (lab data)
Lighthouse (simulated mobile): home 87, contact 96, CLS 0 everywhere, TBT 70ms. Mobile transfer 531KB after the video was made desktop-only (was ~6MB). Remaining gap: LCP 4.0s, 64% render delay caused by hydration-gated hero animation (see Technical). Re-measure on production post-launch; get a ~1MB 720p hero loop + H.264 fallback from the video agency.

### AI Search Readiness — 58/100
- **High:** the site never plainly defines "Human Intelligence (HI)" — nothing an LLM can quote and attribute for her own signature term. A verbatim-repeated definition block is the #1 GEO fix. Related SERP risk from the SXO audit: humanintelligencemovement.org already ranks for "human intelligence speaker."
- **High:** no llms.txt (drafted in the audit, maps keynote → programs → industries → contact).
- **Medium:** no passage on the site hits the 134–167-word citable-answer sweet spot (copy is punchy fragments); FAQ uses `<details>/<summary>` without semantic headings or FAQPage markup; speaker packet is email-gated only — once real, it should also live at a public crawlable URL or AI engines can never cite it.
- **Solid:** SSR text, permissive robots.txt toward AI crawlers (recommend making the policy explicit per-bot), consistent entity facts for Marni across pages. Verify the LinkedIn handle (/in/marniblythe) is correct before shipping sameAs links.

### SXO / SERP Reality — key strategic finding
Head terms ("leadership speaker," "AI keynote speaker") are structurally owned by bureau directories and listicles — an individual site can't win them on-page; pursue via bureau rosters/PR instead. **The winnable battleground is industry long-tail** ("insurance industry keynote speaker" → 6 of top 8 results are individual speaker industry pages), which is exactly the page type Marni has — but hers are missing the three elements every winning competitor page carries: testimonials, client logos, and embedded (not outbound-linked) video. Page scorecards: /speaking/education 64/100, /contact 70/100 — both dragged by Trust (7/25 and 9/25).

### Images — 75/100
All images have real alt text, next/image optimization and `sizes` are in use, CLS 0. Source photos are oversized (4K originals) but served scaled; fine for launch.

---

## Notes & Corrections to Agent Findings
- The content audit flagged the logo walls as "likely fabricated" — provenance is actually Marni's own fullpocketcoaching.com site (media + client logos were downloaded from her existing brand). The recommendation stands in modified form: confirm with Marni that each represents a defensible engagement, add context/links where possible, and drop any she can't stand behind.
- The healthcare-page question (M5) and the fee/packet strategy are business decisions for Marni, not defects.

## Launch Checklist (production-only items)
1. Verify HTTPS + apex/www canonicalization (pick one host, 308 the other; confirm it matches `metadataBase`).
2. Block staging (marni.stagmkt.dev) from indexing — Vercel deployment protection or `X-Robots-Tag: noindex` on previews.
3. Add security headers (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS after HTTPS confirmed) in next.config.ts.
4. Submit sitemap in Google Search Console + Bing Webmaster Tools on day one; request indexing of all 10 URLs.
5. Validate real social unfurls (Slack/Teams/LinkedIn/iMessage) after the per-page OG fix, against the live domain.
6. Re-run Lighthouse/CrUX against production; watch real-user LCP.
7. Rate-limit/spam-protect `/api/inquiry` (public POST endpoint).
8. Set `INQUIRY_*` + `RESEND_API_KEY` + `NEXT_PUBLIC_IG_FEED_URL` env vars in Vercel.
