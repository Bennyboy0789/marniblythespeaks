import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import CountUp from "@/components/CountUp";
import CtaPair from "@/components/CtaPair";
import FeaturedBy from "@/components/FeaturedBy";
import HeroVideo from "@/components/HeroVideo";
import HiDefinition from "@/components/HiDefinition";
import InstagramFeed from "@/components/InstagramFeed";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import { industries } from "@/lib/industries";
import { SPEAKER_REEL_ID } from "@/lib/media";
import { allTalks } from "@/lib/programs";
import {
  homeTestimonials,
  operatorTestimonials,
  reelTestimonial,
  testimonials,
} from "@/lib/testimonials";

// Page order follows Marni's Oct 2026 homepage brief, written for the planner
// weighing a ~$12K booking: who she's for, proof early, reel after programs.
// Site-wide rule from Marni: NO EM DASHES in copy.

const brandLogos = [
  { src: "/images/logos/Adidas.png", alt: "Adidas" },
  { src: "/images/logos/ATT.png", alt: "AT&T" },
  { src: "/images/logos/Citi.png", alt: "Citi" },
  { src: "/images/logos/Anheuser-busch.png", alt: "Anheuser-Busch" },
  { src: "/images/logos/Campbells.png", alt: "Campbell's" },
  { src: "/images/logos/SaksFifthAvenue.png", alt: "Saks Fifth Avenue" },
  { src: "/images/logos/OpenTable.png", alt: "OpenTable" },
  { src: "/images/logos/Nokia.png", alt: "Nokia" },
  { src: "/images/logos/FX.png", alt: "FX" },
  { src: "/images/logos/Swatch.png", alt: "Swatch" },
  { src: "/images/logos/wicked.png", alt: "Wicked" },
  { src: "/images/logos/WakeTech.png", alt: "Wake Tech" },
  // TODO: add healthcare logos (Chapel Hill Oral Surgery, Gaston Oral &
  // Maxillofacial Surgery, Bright Direction Dental, Imagen Dental Partners,
  // Seattle Study Club) once Marni supplies files + logo permission.
];

const ecosystem = [
  {
    title: "Leadership",
    body: "Building cultures where people think, not just execute. Leaders who ask better questions get teams who solve better problems.",
  },
  {
    title: "Communication",
    body: "Honest conversations that don't turn defensive. The truth, said well, is the fastest path to trust.",
  },
  {
    title: "Execution",
    body: "Vision to action. Clear ownership, real accountability, and the systems that keep strategy alive past the kickoff meeting.",
  },
];

const industryIcons: Record<string, string> = {
  healthcare: "M12 21s-8-5.33-8-11a5 5 0 019-3 5 5 0 019 3c0 5.67-8 11-8 11h-2z",
  corporate: "M4 21V7l8-4 8 4v14h-6v-5h-4v5H4zm5-9h2V9H9v3zm4 0h2V9h-2v3z",
  education: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
  "real-estate": "M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z",
};

const stats: { value: ReactNode; label: string }[] = [
  {
    value: <CountUp value={25} suffix="+" />,
    label: "Years leading, building, and rebuilding",
  },
  {
    value: "Multiple Industries",
    label: "Healthcare, corporate, education, associations, and professional services",
  },
  { value: "1 Big Idea", label: "Human Intelligence" },
  { value: "Best-Selling Author", label: "Culture Catalyst" },
];

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Culture Catalyst",
  alternateName:
    "Culture Catalyst: Your Competitive Edge for Unleashing Unprecedented Company Growth & Fostering High-Performing, Engaged Teams",
  author: [
    { "@type": "Person", name: "Tiffany Wuebben" },
    { "@id": "https://marniblythespeaks.com/about#marni-blythe" },
  ],
  isbn: "9798218585471",
  bookFormat: "https://schema.org/Paperback",
  url: "https://www.amazon.com/Culture-Catalyst-Tiffany-Wuebben/dp/B0DWVB95B1",
  sameAs: "https://culturecatalystbook.com",
  image: "https://marniblythespeaks.com/images/book-mockup.webp",
};

export default function Home() {
  const featured = industries.filter((i) => i.featured);
  const secondary = industries.filter((i) => !i.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-stage text-white">
        {/* Poster image always renders (mobile LCP); the 5.5MB video loads
            desktop-only via HeroVideo */}
        <Image
          src="/images/marni-stage.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
          aria-hidden
        />
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-stage/60 to-abyss/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-abyss/85 via-abyss/30 to-transparent" />
        {/* sweeping stage-light beams */}
        <div aria-hidden className="beam left-[8%]" />
        <div aria-hidden className="beam beam-2 right-[8%]" />
        {/* drifting spotlight orbs */}
        <div
          aria-hidden
          className="float-pulse absolute left-1/4 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-bright/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="float-pulse absolute bottom-0 right-[10%] h-[340px] w-[340px] rounded-full bg-gold/15 blur-[110px] [animation-delay:3s]"
        />
        {/* Vertical name rail (desktop), poster-editorial detail */}
        <div
          aria-hidden
          className="rise absolute left-7 top-1/2 hidden -translate-y-1/2 items-center gap-4 lg:flex lg:flex-col"
        >
          <span className="block h-20 w-px bg-gradient-to-b from-transparent to-gold/60" />
          <p className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold uppercase tracking-[0.45em] text-gold">
            Keynote Speaker · Marni Blythe
          </p>
          <span className="block h-20 w-px bg-gradient-to-t from-transparent to-gold/60" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:min-h-[86vh] md:pb-20">
          {/* Mobile eyebrow (the rail replaces this on desktop) */}
          <div className="rise lg:hidden">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Keynote Speaker · Marni Blythe
            </p>
          </div>

          {/* HI stays visible as the methodology brand line; the H1 says who
              Marni is for and what changes (Marni's brief, section 1) */}
          <p className="rise rise-2 font-bold uppercase leading-none tracking-tight">
            <span className="gold-text mr-[0.15em] text-[clamp(1.6rem,3.6vw,3rem)]">Human</span>{" "}
            <span className="gradient-text text-[clamp(1.6rem,3.6vw,3rem)]">
              Intelligence
            </span>
          </p>
          <h1 className="rise rise-2 mt-5 max-w-5xl font-bold uppercase leading-[1.02] tracking-tight">
            <span className="block text-[clamp(1rem,1.9vw,1.4rem)] tracking-[0.25em] text-white/90">
              Healthcare and Corporate Leaders:
            </span>
            <span className="mt-3 block text-[clamp(2.1rem,5.2vw,4.6rem)]">
              Communicate Better, Build Stronger Cultures, and{" "}
              <span className="gradient-text">Grow Predictably</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
            <div className="rise rise-3 max-w-md border-l-2 border-gold/60 pl-5">
              <p className="text-base leading-relaxed text-white/85">
                Programs and keynotes for organizations committed to
                high-performing leadership, thriving cultures, and the human
                intelligence required to lead in a rapidly changing world.
              </p>
            </div>
            <div className="rise rise-4 flex shrink-0 flex-col items-stretch gap-4 sm:items-end">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  data-track="cta_book_marni"
                  className="btn-shine rounded-md bg-gradient-to-r from-brand-bright via-violet to-brand-bright bg-[length:200%_auto] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_0_50px_-5px_rgba(124,58,237,0.9)]"
                >
                  Bring Marni to Your Event
                </Link>
                <a
                  href="#reel"
                  className="flex items-center justify-center gap-2.5 rounded-md border-2 border-gold/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-gold transition-all hover:bg-gold hover:text-abyss hover:shadow-[0_0_35px_-5px_rgba(233,196,106,0.6)]"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" className="fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Marni Speak
                </a>
              </div>
              <Link
                href="/contact"
                data-track="cta_packet_request"
                className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/70 underline underline-offset-8 transition-colors hover:text-gold sm:text-right"
              >
                Or request the speaker packet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LUXURY WORD TICKER ============ */}
      <div className="marquee border-y border-gold/20 bg-abyss py-6" aria-hidden>
        <div className="marquee-track items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[
                "Human Intelligence",
                "Leadership",
                "Communication",
                "Culture",
                "Execution",
              ].map((w, i) => (
                <span key={w} className="flex items-center">
                  <span
                    className={`whitespace-nowrap px-8 text-3xl font-bold uppercase tracking-tight md:text-4xl ${
                      i % 2 === 0 ? "gradient-text" : "gold-text"
                    }`}
                  >
                    {w}
                  </span>
                  <span className="gold-text text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ 2. FEATURED BY ============ */}
      <FeaturedBy tone="purple" />

      {/* ============ 3. WHAT IS HI (canonical definition) ============ */}
      <HiDefinition />

      {/* ============ 4. INTRODUCING MARNI ============ */}
      <section className="section-dark overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-lavender">
              Introducing Marni
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl">
              Give her a room{" "}
              <span className="font-light">and as little as thirty minutes</span>
            </h2>
            <p className="mt-4 font-serif text-2xl italic leading-snug text-gold md:text-3xl">
              &ldquo;I&apos;ll introduce people to a part of themselves they
              didn&apos;t know was there yet.&rdquo;
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Give her a workshop, and your team builds something they&apos;re
              still using a year later. Her core shift, from &ldquo;How do I
              fix this?&rdquo; to &ldquo;What needs to change so this stops
              happening?&rdquo;, is the difference between managing problems
              and eliminating them.
            </p>
            <div className="mt-10 border-t border-gold/30 pt-8">
              <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-white">
                Speaker. <span className="gold-text">Executive.</span>{" "}
                <span className="gradient-text">Operator.</span>
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                Marni brings more than keynote theory to the stage. She has
                spent decades leading businesses, developing leaders, building
                teams, navigating organizational change, and serving inside
                companies as a fractional executive.
              </p>
              <p className="mt-4 leading-relaxed text-white/80">
                Her leadership principles have been tested where they matter
                most: inside real organizations with real people, real
                pressure, and real business outcomes.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-bold uppercase tracking-[0.15em] text-gold underline underline-offset-8 transition-colors hover:text-white"
            >
              Meet Marni →
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="relative -mx-5 md:mx-0">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/marni-portrait-2.jpg"
                alt="Marni Blythe laughing, seated in a navy suit"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
              {/* blend the photo into the dark section, MEP-style */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0916] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0916]/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="section-purple relative overflow-hidden">
        <div aria-hidden className="hairline-gold absolute inset-x-0 top-0" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 text-center sm:grid-cols-2 md:py-20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="flex flex-col items-center">
              <p className="gold-text flex min-h-[4.5rem] items-center text-balance font-serif text-4xl font-semibold leading-tight md:min-h-[6rem] md:text-[2.6rem]">
                {s.value}
              </p>
              <p className="mt-3 max-w-[16rem] text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
        <div aria-hidden className="hairline-gold absolute inset-x-0 bottom-0" />
      </section>

      {/* ============ 5. TESTIMONIAL PROOF (light relief section) ============
          Marni's brief: three different orgs, CEO titles prominent. */}
      <section className="texture-light">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Senior leaders hire Marni. She delivers.
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              Trusted by leaders who need{" "}
              <span className="text-brand">more than inspiration</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 0.1}>
                <TestimonialCard t={t} on="light" short emphasizeRole />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-block rounded-md border-2 border-navy/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:border-brand hover:text-brand"
            >
              Read all {testimonials.length} reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 6. WHO MARNI SPEAKS TO ============
          Healthcare + Corporate get full lanes with their own message (the
          H1 names them); the other verticals sit beneath. */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Who Marni <span className="gradient-text">Speaks To</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              The technology changes by industry. The humans don&apos;t.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.1} className="h-full">
                <Link
                  href={`/speaking/${ind.slug}`}
                  className="card-lux group flex h-full flex-col p-8 md:p-10"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="fill-lavender transition-colors group-hover:fill-gold"
                    aria-hidden
                  >
                    <path d={industryIcons[ind.slug]} />
                  </svg>
                  <h3 className="mt-5 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
                    {ind.name}
                  </h3>
                  <p className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-white/80">
                    {ind.teaser}
                  </p>
                  <span className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors group-hover:text-white">
                    {ind.name} keynotes →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {secondary.map((ind, i) => (
              <Reveal key={ind.slug} delay={0.2 + i * 0.06} className="h-full">
                <Link
                  href={`/speaking/${ind.slug}`}
                  className="card-lux group flex h-full items-center gap-4 px-6 py-5"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    className="shrink-0 fill-lavender transition-colors group-hover:fill-gold"
                    aria-hidden
                  >
                    <path d={industryIcons[ind.slug]} />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider text-white">
                    {ind.name}
                  </span>
                  <span aria-hidden className="ml-auto text-gold">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. THE HI ECOSYSTEM ============ */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The HI Ecosystem
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Everything lives under{" "}
              <span className="gradient-text">Human Intelligence</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Leadership isn&apos;t a title. It&apos;s how you show up, and
              everyone is leading something, starting with themselves. When a
              whole team strengthens its Human Intelligence, the culture
              shifts from every seat at once, not just the top.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ecosystem.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.12} className="h-full">
                <div className="card-lux h-full p-8">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-gold">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/80">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. PROGRAMS ============ */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Programs
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Keynotes and <span className="gradient-text">workshops</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Every keynote can stand alone and is customized to the audience,
              organization, and outcomes you want to create.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {allTalks.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href={`/speaking#${p.id}`}
                  className="card-lux group flex h-full flex-col p-7"
                >
                  {p.signature && (
                    <span className="mb-3 self-start rounded-sm bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                      Signature keynote
                    </span>
                  )}
                  <h3 className="font-bold uppercase tracking-wide text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 font-serif text-lg italic leading-snug text-white/75">
                    {p.hook}
                  </p>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors group-hover:text-white">
                    Who it&apos;s for and what changes →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. SEE MARNI IN ACTION ============
          Reel + Gary's quote side by side: the video proves "she can hold my
          room", the quote says "yes, she can". */}
      <section id="reel" className="stage-glow scroll-mt-20 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
              See Marni <span className="gradient-text">in Action</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/75">
              Big-stage energy, real warmth.
            </p>
          </Reveal>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-5">
            <Reveal delay={0.1} y={40} className="lg:col-span-3">
              <YouTubeEmbed
                id={SPEAKER_REEL_ID}
                title="Marni Blythe speaker reel: Human Intelligence and leadership"
              />
            </Reveal>
            <Reveal delay={0.2} className="lg:col-span-2">
              <TestimonialCard t={reelTestimonial} short emphasizeRole />
            </Reveal>
          </div>
          <p className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@MarniBlytheSpeaks"
              target="_blank"
              rel="noopener noreferrer"
              data-track="youtube_channel"
              className="inline-block text-sm font-bold uppercase tracking-[0.15em] text-gold underline underline-offset-8 hover:text-white"
            >
              More clips on YouTube →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </section>

      {/* ============ 10. THE BOOK ============ */}
      <section className="section-dark relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-5 md:py-28">
          <Reveal className="relative mx-auto w-full max-w-[300px] md:col-span-2">
            <div
              aria-hidden
              className="float-pulse absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[90px]"
            />
            <Image
              src="/images/book-mockup.webp"
              alt="Culture Catalyst book by Tiffany Wuebben and Marni Blythe"
              width={634}
              height={951}
              sizes="300px"
              className="relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-rotate-2 hover:scale-[1.03]"
            />
            {/* Badge from Marni's own marketing kit (FPC assets) */}
            <Image
              src="/images/amazon-bestseller-badge.png"
              alt="Amazon #1 Bestseller"
              width={512}
              height={512}
              sizes="112px"
              className="absolute -right-6 -top-7 z-10 w-24 rotate-12 drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)] md:-right-9 md:w-28"
            />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Book · Amazon Best Seller
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Culture <span className="gradient-text">Catalyst</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Co-authored by Marni Blythe with Tiffany Wuebben, Amazon Best
              Seller <em>Culture Catalyst</em> explores how emotional
              intelligence, communication, and intentional leadership create
              high-performing cultures where people and organizations can
              grow.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.amazon.com/Culture-Catalyst-Tiffany-Wuebben/dp/B0DWVB95B1"
                target="_blank"
                rel="noopener noreferrer"
                data-track="book_amazon"
                className="btn-shine rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition hover:brightness-110"
              >
                Get It on Amazon
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <Link
                href="/contact"
                data-track="book_keynote"
                className="rounded-md border-2 border-gold/60 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
              >
                Bring It to Your Stage
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 11. BRANDS & TEAMS ============ */}
      <section className="section-purple">
        <Reveal className="py-14">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/50">
            Brands &amp; Teams Marni Has Worked With
          </p>
          <div className="marquee mt-8">
            <div className="marquee-track marquee-slow items-center">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  className="flex shrink-0 items-center"
                  aria-hidden={dup === 1}
                >
                  {brandLogos.map((l) => (
                    <Image
                      key={l.alt + dup}
                      src={l.src}
                      alt={dup === 0 ? l.alt : ""}
                      width={160}
                      height={90}
                      className="mx-8 h-11 w-auto object-contain opacity-70 brightness-0 invert"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ 12. EXECUTIVE / OPERATOR CREDIBILITY ============
          Operator proof, not a case study: no A/R numbers here (those belong
          on the healthcare page, About, or the speaker packet). */}
      <section className="section-dark">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Operator Credibility
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl">
              She has led inside the{" "}
              <span className="gradient-text">organizations she speaks to</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Marni doesn&apos;t only study leadership from the outside.
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              She has served as a fractional executive inside growing
              organizations, including surgical practices, working alongside
              doctors, owners, and leadership teams through operational
              challenges, culture change, leadership development,
              accountability, and growth.
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              That experience gives her a perspective audiences recognize
              immediately: she knows what leadership feels like when the stakes
              are real.
            </p>
          </Reveal>
          <div className="grid gap-6">
            {operatorTestimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={0.1 + i * 0.1}>
                <TestimonialCard t={t} short emphasizeRole />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 13. INSTAGRAM (kept visually secondary) ============ */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
              @marniblythespeaks
            </h2>
            <p className="mt-3 leading-relaxed text-white/70">
              Speaking clips, backstage moments, and Human Intelligence in the
              wild.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <InstagramFeed />
          </Reveal>
          <p className="mt-8 text-center">
            <a
              href="https://www.instagram.com/marniblythespeaks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-[0.15em] text-gold underline underline-offset-8 hover:text-white"
            >
              Follow on Instagram →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </section>

      {/* ============ 14. FINAL CTA ============ */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
              Give your audience something they will{" "}
              <span className="gradient-text">still be using on Monday</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Bring Marni to your next leadership meeting, conference, retreat,
              annual meeting, or organizational event.
            </p>
            <p className="mt-4 font-serif text-xl italic leading-relaxed text-white/80 md:text-2xl">
              Your audience will leave thinking differently about how they
              lead, communicate, and work together, with practical tools they
              can immediately put into action.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <CtaPair on="dark" className="mt-10 justify-center" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
