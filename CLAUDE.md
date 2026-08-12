# Marni Blythe Speaks — Website Build Brief

You are building a speaking-focused website for **Marni Blythe**, a leadership and culture keynote speaker. She's spinning off her speaking from her main coaching business (fullpocketcoaching.com) onto its own site. The goal is to get booked for speaking engagements — keynotes, conference talks, corporate retreats, and all-staff meetings.

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
