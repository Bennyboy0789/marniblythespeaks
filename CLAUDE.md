# Marni Blythe Speaks — Website Build Brief

You are building a speaking-focused website for **Marni Blythe**, a leadership and culture keynote speaker. She's spinning off her speaking from her main coaching business (fullpocketcoaching.com) onto its own site. The goal is to get booked for speaking engagements — keynotes, conference talks, corporate retreats, and all-staff meetings.

## DESIGN DECISIONS (LOCKED)
- **Aesthetic (rev 2, modeled on meridithelliottpowell.com per Marni's reference):** ALL-DARK site — every section sits on near-black/purple gradients (`section-dark`, `section-purple`, `stage-glow` utility classes in globals.css); one light textured relief section (`texture-light`) for testimonials, like MEP. Headings are bold UPPERCASE DM Sans with the key phrase in `gradient-text` (lavender→violet→gold); Playfair Display is now the *accent* voice — italic gold pull-quotes and decorative numerals. Buttons are MEP-style: rectangular (rounded-md), gradient purple (`from-brand-bright to-violet`), uppercase letter-spaced labels. Photos blend into dark sections via gradient overlays rather than sitting in rounded cards. Black client logos get `invert` on dark; gold media logos sit on dark directly.
- **Heading font:** DM Sans bold uppercase (MEP-style shout); Playfair Display (400–700 + italic) for accent phrases and quotes.
- **Body font:** DM Sans (Google Fonts, 400/500/700) — clean, friendly, readable at 16–18px.
- **Palette (Tailwind v4 theme tokens):** `brand` #6B3FA0, `brand-bright` #7C3AED (CTAs), `violet` #A855F7 (gradient partner), `lavender` #A78BFA (eyebrows/icons), `navy` #1D3557, `gold` #E9C46A (accents, media logos), `cream` #F2EFE9 (light relief section), `ink` #333333, `stage` #120C1D, `abyss` #0D0916 (page background).
- **Component patterns:** hero = background video (from FPC) under gradient overlay with centered giant gradient headline; paired CTAs everywhere ("Download Speaker Packet" outline + "Book Marni" gradient); sticky near-black nav; near-black 4-column footer (links / topics / contact / social icons); industry landing pages generated from `src/lib/industries.ts`; programs from `src/lib/programs.ts`.
- **Routes:** `/` home, `/about`, `/speaking`, `/speaking/[industry]` (education, insurance, financial-services, tech, corporate, healthcare), `/contact`. Speaker packet served from `/speaker-packet.pdf` (placeholder until real PDF supplied).
- **Images:** real photos and logos pulled from fullpocketcoaching.com live in `public/images/` (Marni portraits, conference shot, candids), `public/images/media/` (gold "Featured By" logos — use on dark/navy backgrounds), `public/images/logos/` (black client-brand logos — use on light backgrounds). The healthcare team photo was intentionally excluded per the de-emphasize-healthcare direction.
- **Luxury layer (rev 3):** animated shimmer on `gradient-text`; metallic gold-foil `gold-text`; `card-lux` glass cards with gold→purple gradient borders + hover glow; `hairline-gold` dividers; `outline-text` hollow type; CSS `marquee` (word ticker under the home hero, brand-logo marquee) — all animation wrapped in `prefers-reduced-motion: no-preference`; hero has a slow ken-burns push-in on the video, drifting glow orbs, giant clamp() headline, and a scroll cue. Glowing gradient CTAs. Keep this vocabulary when adding sections; don't add spinning/bouncing gimmicks beyond it.
- **Headliner layer (rev 4 — "Tony Robbins energy"):** gradient announcement bar above the nav ("Now booking 2026–2027 keynotes" — wording must stay consistent with the contact FAQ's real 3–6 month window); sweeping `.beam` stage-light conic gradients in the home hero; `.btn-shine` white shine sweep on primary CTAs (hover); full-bleed billboard quote section on home ("isn't artificial — it's human" — giant Playfair italic + gradient emphasis + attribution); giant `outline-text` "MARNI" headliner-poster backdrop behind the About cutout; `CountUp.tsx` animates the stats band on scroll. All new animation lives inside the `prefers-reduced-motion` guard and obeys the MotionToggle pause.
- **Page transitions:** `next-view-transitions` powers a 0.3s cross-fade + subtle lift between pages (`::view-transition-*` rules in globals.css; disabled for reduced-motion and when MotionToggle is paused). IMPORTANT: internal links must import `{ Link } from "next-view-transitions"` — NOT `next/link` — or that navigation loses its transition. Falls back to instant navigation in browsers without the View Transitions API.
- **Motion:** the `motion` package (Framer Motion successor) powers entrances via `src/components/Reveal.tsx` — a scroll-triggered fade+rise (`whileInView`, fires once, honors `prefers-reduced-motion` by falling back to fade-only). Pattern: wrap section headings/blocks in `<Reveal>`, stagger grid cards with `delay={i * 0.08–0.12}`, hero elements with increasing delays (0 / 0.12 / 0.28 / 0.44). Keep animations subtle — no loops, no parallax, nothing that moves without the user scrolling.
- **Research-driven conversion layer (Aug 2026):** hero uses dual CTA "Book Marni" + "Watch Marni" (scrolls to `#reel`) per the Estis pattern; "Not another AI talk" anti-hype positioning on the keynote (planners report AI-talk fatigue); "How HI gets tailored" 3-step on /speaking and a customization line on industry pages (planners probe customization depth); /contact has a 4-step "what happens when you book" walkthrough + planner FAQ (Vinh Giang de-risking pattern); phone 646.413.4872 (from Marni's existing materials — CONFIRM before launch, along with the FAQ's AV/travel policy phrasing); virtual/hybrid formats stated everywhere. Outstanding content-only items from the research (see published research artifact): 3 named organizer testimonials, real speaker-packet one-sheet, real stats-band numbers, demo-reel spec (best moment in first 5s, 90s–2min).
- **CRO layer (Aug 2026, post-audit):** form posts to `/api/inquiry` (Resend-backed once `RESEND_API_KEY` is set — see `.env.local.example`; sends inquiry + auto-ack, falls back to mailto when unconfigured); Calendly buttons replaced with email requests until Marni supplies a real scheduling URL (code comments mark restore points); testimonials section gated off via `SHOW_TESTIMONIALS=false` in `src/app/page.tsx` until real organizer quotes land; all "Download Speaker Packet" CTAs became "Request Speaker Packet" → /contact while the PDF is a placeholder (restore points commented); hero video loads desktop-only via `HeroVideo.tsx` (mobile gets the poster image — mobile transfer dropped ~6MB→531KB; ask the video agency for a ~1MB 720p loop + H.264 MP4); Vercel Analytics + `TrackClicks.tsx` fire events on `data-track` attributes (cta_book_marni, cta_packet_request, inquiry_submit, discovery_call_request, packet_request, youtube_channel); OG/Twitter metadata with generated `/og-image.png`; `sitemap.ts` + `robots.ts`; organization field optional on the form; speaking-page video placeholder tiles replaced by a YouTube channel panel; IG feed renders nothing (no placeholder tiles) until connected.
- **SEO layer (Aug 2026, post-audit — see seo-report/):** every page sets canonical + page-specific OG/Twitter via `src/lib/seo.ts` `pageMetadata()` (NEVER add a page without it — Next inherits the root OG object verbatim otherwise); industry pages use hand-written `seoTitle`/`seoDescription` from `industries.ts` ("[Industry] Keynote Speaker" pattern) plus keyword lead sentences in intros and breadcrumb UI+schema; JSON-LD ships site-wide (Organization+WebSite in layout, Person on /about, Service graph on /speaking, FAQPage on /contact from the `faqs` const — single source for UI + schema, BreadcrumbList on industry pages; VideoObject deferred until a real uploadDate exists); the canonical ~150-word HI definition lives in `HiDefinition.tsx`, repeated verbatim on /, /about, /speaking — never paraphrase it per page; /speaking H1 is the gold kicker line (keynote title is an h2) to avoid duplicating the Home H1; `public/llms.txt` + explicit AI-bot allows in robots.ts; above-the-fold hero entrances use CSS `.rise` classes (globals.css), NOT the JS `<Reveal>` (paints pre-hydration; Reveal stays for below-fold); security headers + `poweredByHeader:false` in next.config.ts (HSTS commented until HTTPS confirmed); square brand icons `public/icon-{192,512}.png` + `src/app/apple-icon.png` + manifest.ts; /privacy scaffold (counsel review before launch); sitemap uses hardcoded per-page lastModified dates — bump when copy actually changes.
- **UI/UX layer (Aug 2026, post-audit):** branded 404 (`not-found.tsx`, "This page left the stage" + CTAs); global gold `:focus-visible` ring + "Skip to content" link (first focusable, targets `#main`); `MotionToggle.tsx` floating pause button (WCAG 2.2.2 — sets `[data-motion-paused]` on `<html>` pausing all CSS animation + videos); mobile menu locks body scroll and closes on Escape with focus return (Nav.tsx); FAQ summaries have rotating chevrons; contact form uses inline validation (styled messages + aria-invalid/aria-describedby, `noValidate`, focuses first invalid field) instead of browser bubbles; external links carry sr-only "(opens in new tab)"; footer copyright is `text-white/60` (contrast) — axe-core scans 0 violations site-wide; keep it that way when adding UI.
- **Instagram feed (mid-page per Marni's explicit ask):** the IG section sits directly under the demo reel on home. `InstagramFeed.tsx` renders the 6 latest posts from a Behold.so JSON feed via `NEXT_PUBLIC_IG_FEED_URL` (see `.env.local.example`); until connected it shows a curated 6-tile grid of real Marni photos (no faked IG chrome/metrics) with every tile linking to the profile — the live feed replaces the curated grid automatically.
- **Testimonials:** ONE real attributed quote is live (Christina Helwig, CEO, Advocare — supplied by Marni from her LinkedIn draft; confirm permission before launch). Rendered as a single featured quote on home + a compact block on /speaking; switch to a 3-up grid when two more named organizer quotes land in `testimonials.ts`. Never invent quotes.
- **Breadth hedge (keep):** ~40% of planner briefs are pure leadership/culture with no AI angle (PCMA), so the home page carries a "Beyond the signature keynote — four more talks" teaser (driven by `programs.ts`, hooks = first sentence of each description) and the hero subhead names "leadership summits, culture resets, and every room navigating AI." HI stays the umbrella; never remove the non-AI doorways.
- **The book:** *Culture Catalyst* (co-authored with Tiffany Wuebben, Amazon best seller, ISBN 9798218585471) has a dedicated home-page section — 3D mockup (`public/images/book-mockup.webp`, from FPC's assets), honest co-author credit, CTAs to the real Amazon listing (amazon.com/Culture-Catalyst-Tiffany-Wuebben/dp/B0DWVB95B1) and /contact, plus Book JSON-LD. Official book site: culturecatalystbook.com. Always credit the co-author.
- **Press & hero assets (Aug 2026, from Marni):** `public/images/marni-stage.png` — ballroom stage shot in the white suit — is THE hero image (home hero poster, /speaking keynote image, OG image backdrop); `public/images/press/dew-cover.jpg` — Marni on the cover of *Dental Entrepreneur Woman* Summer 2026, author of cover story "The Power of the Pivot" — featured as the linked "In Print" block on /about (kept OFF the homepage per the de-emphasize-healthcare direction; links to the issuu edition).
- **Marni's own source copy (from her Aug 2026 LinkedIn-draft email — treat as the voice reference):** the canonical HI definition now uses HER two-part framing (presence/compassion/empathy + discernment about what to hand to AI); bio facts confirmed: 25 years (Fortune 500 marketing, her own agency, a fitness & wellness center), founder of Full Pocket Coaching (fractional COO/integrator/CMO), *Culture Catalyst* is an Amazon best seller, personal warmth line (CrossFit yogi, three daughters, two Maltese, Aruba) is on /about; phone 646.413.4872 confirmed by her materials. Signature lines in use: "Give me a room and thirty minutes…", "reads a room fast and gets the quiet ones talking", "worlds look nothing alike on paper, but the human part is identical".

## WHO MARNI IS
Marni Blythe is a professional keynote speaker and the voice behind **Human Intelligence (HI) in the Age of AI**. She just spent time in a room with 800 of the world's top speakers — and her differentiator is clear: while everyone else is talking about "leadership and culture," she's built a signature umbrella brand around Human Intelligence. Emotional intelligence, leadership, communication, culture — all live under HI. It's the thing that makes prospects lean forward.

She's been running Full Pocket Coaching for close to 10 years, but speaking is where she's going. Her fractional COO/CMO work still exists, but the brand is shifting hard toward the stage. This site is that shift.

Her signature reframe: instead of "How do I fix this?" she teaches leaders to ask "What needs to change so this stops happening?"

Key detail: She is explicitly **removing the healthcare focus** from her brand. She's broadening to all industries — education, insurance, financial services, tech, corporate. The old site leans healthcare-heavy (testimonials from doctors, practice owners). The new site should NOT be healthcare-specific.

Her framework is L.I.V.E.S.: Lead with Servant Heart, Integrity Always, Vulnerability Builds Trust, Empathy Compassion, Strive to Grow or we Die.

**Social handles:** @marniblythespeaks (Instagram), Marni Blythe Speaks (YouTube)

## BRAND PERSONALITY
This is where it gets interesting. Marni has a dual energy:

1. **Edgy, confident, NYC.** She literally said "I'm a big fucking deal" during the call — and meant it. The site needs to project that energy. Flashy. Razzle dazzle. She referenced Meredith Elliott Powell's website — black, sleek, high-end speaker vibe. She wants to look like she belongs on a mainstage.

2. **Warm and approachable.** She's also someone who leads with heart, builds real relationships, and makes people feel safe. The warmth can't get lost in the flash.

The balance: **big-stage energy with genuine warmth.** Think NYC loft, not corporate ballroom. Black backgrounds, bold typography, dramatic photos — but the copy stays human and direct.

The tone should feel like: "I know what I'm worth. I also actually care about your people."

## BRAND COLORS
This site is a spin-off — it should feel related to Full Pocket Coaching but distinct enough to stand on its own. Keep the gold accents from her main brand but lead with purple as the differentiator. Navy provides the grounding anchor.

- **Primary Purple:** `#6B3FA0` or `#7C3AED` — hero backgrounds, primary CTAs, the "speaking brand" color
- **Deep Navy:** `#1D3557` — headings, strong elements, footer background — anchors to her main brand
- **Accent Gold:** `#E9C46A` — highlights, badges, subtle decorative elements — carries over from Full Pocket Coaching
- **White/Cream:** `#FFFFFF` / `#F8F7F4` — clean space, card backgrounds
- **Charcoal:** `#333333` — body text
- **Light Gray:** `#F8F9FA` — alternating section backgrounds

**Usage:** Purple is the hero color — it says "this is the speaking brand." Navy keeps it connected to Full Pocket Coaching. Gold is used sparingly for polish — small accents, not full sections. If in doubt, lean purple + navy.

## TYPOGRAPHY
Do NOT use Inter, Roboto, Open Sans, or Lato.
- **Headings:** A warm, confident serif — Lora or Playfair Display (Google Fonts). 400, 500, 600, 700 weights.
- **Body:** A clean, readable sans — DM Sans, Satoshi, or Source Sans 3 (Google Fonts). 16-18px.
- State font choices in CLAUDE.md before coding.

Use strong size contrast. Hero heading 48-64px. Section headings 30-38px.

## VISUAL STYLE
- **Big-stage energy.** Black backgrounds as the hero canvas. Dramatic, confident. Meredith Elliott Powell's site was explicitly referenced as inspiration — black, sleek, speaker-first.
- **NYC edge, not corporate.** Think bold, modern, a little flashy. "Razzle dazzle" — Marni's words.
- **But warm.** The edgy aesthetic shouldn't feel cold or unapproachable. Warmth comes through in the photos (real smiles, real moments) and the copy tone.
- Photos of Marni should show her owning a stage — mid-speech, mic in hand, audience visible. Also behind-the-scenes warmth: connecting with attendees, laughing, being human.
- No stock photography. Period.
- Image placeholders labeled: `[PHOTO: Marni on stage — keynote]`, `[PHOTO: Marni with attendees]`, `[PHOTO: audience engaged]`
- Purple as the primary accent. Gold used sparingly for polish — just enough to connect to the Full Pocket Coaching brand.
- Video should be featured prominently — she has a demo reel coming in ~5 weeks, plus tons of YouTube content. Instagram feed integration mid-page (she loved Meredith Elliott Powell's IG placement).
- No carousels, auto-playing anything, popups.
- Mobile-first — event planners browse on phones.

## REFERENCE SITES
- **Meredith Elliott Powell** (meredithelliottpowell.com) — Marni explicitly referenced this. Black, sleek, speaker-forward. IG feed mid-page. Good model.
- **Sam Richter** — she looked at his structure (speaking topics, videos, "reasons to book") but thought his design was basic.

## CONTENT ASSETS COMING
- Demo reel: in production (~5 weeks out)
- New video agency producing 12-16 videos/month
- YouTube channel full of speaking clips and testimonials (Marni Blythe Speaks)
- Instagram: @marniblythespeaks with speaking content and shorts
- Speaking-specific testimonials needed (current ones are consulting-heavy)

## TECH STACK
- Next.js 16 (App Router) — already scaffolded at `/opt/data/marniblythespeaks`
- TypeScript
- Tailwind CSS (already configured)
- Deployed on Vercel: `marni.stagmkt.dev` (staging) + `marniblythespeaks.com` (production)
- Static where possible

## PAGES

### 1. Home (`/`)
**Hero Section:**
- Headline: "Human Intelligence in the Age of AI" — this is her signature keynote and the umbrella brand. Lead with it.
- Subheadline: "Keynotes and programs that equip leaders to read the room, build trust, and get people thinking instead of just executing. The skill that actually moves organizations forward isn't AI — it's HI."
- TWO primary CTAs: "Download Speaker Packet" and "Book Marni"
- Hero background: black/dark with purple gradient or dramatic stage photo of Marni
- [PHOTO: Marni on stage — dramatic lighting, mid-speech]

**Below the hero:**
- **"Introducing Marni" section** — the shift mindset copy. "How do I fix this?" → "What needs to change so this stops happening?" This is her core differentiator.
- **Industry Icons** — clickable icons or buttons for the industries she speaks to: Education, Insurance, Financial Services, Healthcare (de-emphasized), Corporate, Tech. Each leads to an industry-specific landing page.
- **"The HI Ecosystem"** — 3 cards showing what sits under Human Intelligence:
  1. Leadership — building cultures where people think, not just execute
  2. Communication — honest conversations that don't turn defensive
  3. Execution — vision to action, clear ownership, real accountability
- **Video Section** — embedded sizzle reel or featured speaking clip (placeholder until demo reel arrives in ~5 weeks)
- **Instagram Feed** — mid-page integration (she loved this on Meredith Elliott Powell's site)
- **As Seen At / Featured By** — logo strip
- **Testimonials** — focus on speaking-specific ones. Current testimonials are consulting-heavy; prioritize any speaking-related quotes she has.
- **Repeat CTA** — "Download Speaker Packet" + "Book Marni"

### 2. About (`/about`)
- Full bio — Marni's story, background, why she does this work
- Professional headshot: [PHOTO: Marni Blythe headshot]
- The L.I.V.E.S. values — Lead with Servant Heart, Integrity Always, Vulnerability Builds Trust, Empathy Compassion, Strive to Grow or we Die
- "Featured By" logos
- Link to fullpocketcoaching.com for her fractional COO/CMO services ("Looking for fractional executive support? Visit Full Pocket Coaching.")

### 3. Speaking & Programs (`/speaking`)
- **Signature Keynote: "Human Intelligence in the Age of AI"** — this is THE talk. Feature it prominently. It can also be delivered as a workshop.
- **Other Programs** from her speaker packet — leadership, communication, culture, emotional intelligence. Each: title, description, ideal audience, format/duration.
- **Industry Landing Pages** — Marni wants dedicated pages for industries she targets (education, insurance, financial services, etc.). These should be linked from the home page industry icons. Each page frames her speaking specifically for that audience.
- Each program and landing page: "Book This Program" or "Inquire" CTA.
- **Speaking Videos** — embedded clips from her YouTube channel. Feature shorts/reels if possible.
- **"Reasons to Book Marni"** — inspired by Sam Richter's site structure. Brief, punchy, credibility-building.

### 4. Contact / Booking (`/contact`)
- This is the conversion page.
- Headline: "Book Marni for Your Next Event"
- Contact form: Name, Email, Organization, Event Type (dropdown: Conference, Corporate Retreat, All-Staff Meeting, Workshop, Other), Event Date (optional), Message
- Direct email from current site if she has a separate speaking email
- Download Speaker Packet link prominent
- "Schedule a 30-Minute Discovery Call" — Calendly embed or link
- Response time: "We'll get back to you within 24 hours."

### 5. Speaker Packet Download (can be a section or separate page)
- Prominent download button for her speaker packet PDF
- Could be a simple page or a modal

## NAVIGATION
- Logo/wordmark left: "Marni Blythe" in navy/purple
- Links: Home | About | Speaking | Contact
- "Book Marni" CTA button (purple, stands out) — right side
- Sticky on scroll

## FOOTER
- Email contact
- Social links (LinkedIn, YouTube, Instagram — from current site)
- "© Marni Blythe Speaks" + year
- Link to fullpocketcoaching.com for fractional services

## TONE FOR ALL COPY
Write ALL placeholder copy in Marni's voice. No Lorem Ipsum.
- Warm but direct. Practical, not preachy.
- Short sentences. Real language. No buzzword stacking.
- "Organizations don't fail because leaders lack talent. They struggle because leaders lack the tools, mindset, and systems to translate vision into execution."
  Not: "A paradigm-shifting keynote experience that leverages synergistic leadership methodologies."
- Use her actual copy from fullpocketcoaching.com as your source of truth — pull directly from there.

## EXISTING ASSETS (from fullpocketcoaching.com)
- Testimonials from Dr. Brent Delong, Dr. Aliya Gard, Dr. Angela Tran, Dr. Gabriel Fritz, Dr. Clifton, Dr. Mark Scurria, Dr. Chris Sullivan, Dr. Bruce Gray, Dr. Serag
- "Featured By" media logos
- Speaker packet PDF (download link)
- Core copy: the "Shift Mindset" section, L.I.V.E.S. values, service descriptions
- Social: LinkedIn, YouTube, Instagram

## DELIVERY ORDER
1. Create/update CLAUDE.md with font choices, full color palette, component patterns. **Pause for approval.**
2. Build shared layout (nav, footer, global styles — replace the dark placeholder theme with purple/navy/white).
3. Build Home page (`/`).
4. Build About page (`/about`).
5. Build Speaking page (`/speaking`).
6. Build Contact page (`/contact`).
7. Final check: all CTAs consistent, mobile layout solid, all links work, speaker packet download functional.

## WHAT TO REMOVE FROM PLACEHOLDER
- The dark background (#0a0a0a) and gold accent (#c9a96e) — those were guesses. Use purple and navy.
- The "Coming Soon" badge — site is going live.
- The generic professional speaking description — replace with Marni's actual messaging.
- The Geist font — replace with Lora + DM Sans.
