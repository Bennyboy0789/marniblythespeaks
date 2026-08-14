# Marni Blythe Speaks

The speaking-business website for keynote speaker **Marni Blythe** — home of
**Human Intelligence (HI) in the Age of AI**. Spun off from
[fullpocketcoaching.com](https://fullpocketcoaching.com) to convert event
planners into bookings.

- **Production:** https://marniblythespeaks.com
- **Staging:** https://marni.stagmkt.dev

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · motion (Framer
Motion successor) · Vercel Analytics · deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static except /api/inquiry)
npm run lint
```

## Configuration (`.env.local`, see `.env.local.example`)

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Activates the booking form backend (`/api/inquiry`) + auto-acknowledgment email. Until set, the form falls back to a pre-filled mailto draft. |
| `INQUIRY_TO` / `INQUIRY_FROM` | Inquiry delivery inbox / verified sender. |
| `NEXT_PUBLIC_IG_FEED_URL` | Behold.so JSON feed for the home-page Instagram grid. Until set, the grid renders nothing (no placeholders). |

Set the same variables in Vercel project settings for deploys.

## Where things live

- `CLAUDE.md` — the working brief: brand rules, design system, every
  decision + restore point, and the list of launch blockers. **Read it before
  changing anything.**
- `src/lib/` — content data (programs, industries incl. per-page SEO fields,
  testimonials) and the `pageMetadata()` helper every page must use.
- `src/components/` — shared UI (Nav, Footer, FeaturedBy, HiDefinition,
  CtaPair, Reveal/CSS `.rise` animations, MotionToggle, HeroVideo…).
- `seo-report/` — full SEO audit + prioritized action plan (includes the
  launch checklist and all Marni-dependent open items).

## Pre-launch blockers (content, not code)

Two more named organizer testimonials · real speaker-packet PDF (replace
placeholder + restore direct-download CTAs) · Marni's Calendly URL · Resend
key · Behold feed · agency demo reel (spec: strongest moment in first 5s,
90s–2min) · confirm Christina Helwig quote permission + phone number
publication. Full list: `seo-report/ACTION-PLAN.md`.
