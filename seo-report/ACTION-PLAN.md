# SEO Action Plan — marniblythespeaks.com

Prioritized from the August 2026 full audit (see FULL-AUDIT-REPORT.md). Items marked **[Marni]** need her input/content; everything else is engineering.

## Critical — before launch

1. **[Marni] Trust layer.** Get 3 named organizer testimonials (2 sentences, name + title + organization) → flip `SHOW_TESTIMONIALS` on and add quotes to /speaking + industry pages + /contact. Confirm every logo in the "Featured By" and "Brands" walls represents a defensible engagement; link press logos to real coverage where possible; drop any she can't stand behind.
2. **Privacy policy page** (`/privacy`) + footer link; mention form-data handling. Add a terms page if her attorney wants one. *(Engineering can scaffold; Marni/counsel approves copy.)*
3. **Per-page Open Graph + canonicals.** Small metadata helper that derives `openGraph`/`twitter` + `alternates.canonical` from each page's title/description. Fixes the 8/10 identical-OG bug and the zero-canonicals gap in one pass.
4. **Meta description fixes.** Replace `ind.intro.slice(0,155)` with hand-written 150–155-char descriptions per industry (include "keynote speaker"); trim the 198-char homepage description.

## High — launch week

5. **Retitle money pages.** Industry titles → "\[Industry\] Keynote Speaker | Marni Blythe"; work "keynote speaker" into H1s/eyebrows/intros naturally. Change /speaking H1 to "Speaking & Programs" (de-duplicates the Home H1; keynote name becomes a section heading).
6. **Ship the generated JSON-LD** (all blocks are in the audit): Organization+WebSite → layout; Person → /about; Service ×5 → /speaking; BreadcrumbList → industry template; FAQPage → /contact (AI-engines play); VideoObject → home #reel *after* [Marni] confirms a real upload date. Needs: **[Marni]** square logo asset (≥512×512) for Organization.
7. **"What Is Human Intelligence (HI)?" definition block** (~150 words, drafted in the GEO audit) — verbatim on /, /about, /speaking. This is how she owns her term in AI answers; note humanintelligencemovement.org already ranks for "human intelligence speaker."
8. **llms.txt** (drafted in the GEO audit) at /llms.txt; make robots.ts AI-bot policy explicit (allow GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot).
9. **Hero animation → CSS-only for above-the-fold** (or mount-triggered, no IntersectionObserver gate). Targets the 2.6s LCP render delay; keep scroll reveals below the fold.
10. **Security headers + housekeeping:** `headers()` in next.config.ts (nosniff, Referrer-Policy, Permissions-Policy; HSTS post-HTTPS), `poweredByHeader: false`, apple-touch-icon + web manifest.

## Medium — first month

11. **Deepen the six industry pages** toward ~500+ unique words each: an industry-specific proof block (named engagements/logos when available), one embedded video clip, an explicit "Marni Blythe speaks to \[industry\] leaders about…" lead sentence, and a breadcrumb (UI + schema) linking back to /speaking.
12. **Embed video instead of outbound-linking it** on /speaking (and top industry pages) once clips exist — every winning competitor page has an inline player. **[Marni]** agency reel: strongest moment in first 5s, 90s–2min; also deliver a ~1MB 720p hero loop + H.264 MP4.
13. **[Marni] Speaker packet**: when the real PDF ships, restore instant download (lightweight optional-email gate) *and* publish a crawlable HTML twin — email-gated-only assets can't be cited by AI engines or indexed.
14. **[Marni] Calendly**: supply the real scheduling URL; restore the buttons (restore points are commented in code).
15. **FAQ semantics:** `<h3>` inside the `<details>` summaries; expand the signature-keynote description to the 134–167-word citable range; add one 140–160-word self-contained passage per industry page.
16. **Sitemap lastmod**: replace request-time `new Date()` with real per-page dates or omit. Optionally drop `priority`.
17. **[Marni] Healthcare page decision:** keep at full prominence, or lower sitemap priority + remove from home icon rotation (brand says de-emphasize; the page currently gets equal treatment).
18. **About-page citables:** book year + publisher/link for *Culture Catalyst*; confirm the LinkedIn handle (/in/marniblythe); real stats-band numbers.

## Low / post-launch

19. GSC + Bing verification, sitemap submission, request indexing (day one).
20. Head terms ("leadership speaker," "AI keynote speaker") via bureau rosters, podcasts, PR — not on-page SEO. Track the "human intelligence speaker" SERP for the Movement-collision.
21. Re-run Lighthouse + this audit against production; add DataForSEO-backed AI-visibility measurement once live.
22. Wikipedia/press citations as long-term knowledge-panel groundwork; IndexNow only if a blog/publishing cadence starts.
