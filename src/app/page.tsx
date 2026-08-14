import Image from "next/image";
import { Link } from "next-view-transitions";
import CountUp from "@/components/CountUp";
import CtaPair from "@/components/CtaPair";
import FeaturedBy from "@/components/FeaturedBy";
import HeroVideo from "@/components/HeroVideo";
import HiDefinition from "@/components/HiDefinition";
import InstagramFeed from "@/components/InstagramFeed";
import Reveal from "@/components/Reveal";

import { industries } from "@/lib/industries";
import { programs } from "@/lib/programs";
import { testimonials } from "@/lib/testimonials";

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
  education: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
  insurance: "M12 2L4 5v6c0 5.55 3.4 10.74 8 12 4.6-1.26 8-6.45 8-12V5l-8-3z",
  "financial-services": "M4 20h16v2H4v-2zm2-8h3v6H6v-6zm5-6h3v12h-3V6zm5 3h3v9h-3V9z",
  tech: "M9 3v2H7a2 2 0 00-2 2v2H3v2h2v2H3v2h2v2a2 2 0 002 2h2v2h2v-2h2v2h2v-2h2a2 2 0 002-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 00-2-2h-2V3h-2v2h-2V3H9zm-2 4h10v10H7V7z",
  corporate: "M4 21V7l8-4 8 4v14h-6v-5h-4v5H4zm5-9h2V9H9v3zm4 0h2V9h-2v3z",
  healthcare: "M12 21s-8-5.33-8-11a5 5 0 019-3 5 5 0 019 3c0 5.67-8 11-8 11h-2z",
};

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      {/* ============ HERO ============ */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-stage/55 to-abyss/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-abyss/75 via-transparent to-transparent" />
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
        {/* Vertical name rail (desktop) — poster-editorial detail */}
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

          <div className="rise rise-2">
            <h1 className="font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block text-[clamp(3.4rem,11vw,10rem)] text-transparent [-webkit-text-stroke:2px_rgba(233,196,106,0.65)]">
                Human
              </span>
              <span className="gradient-text block text-[clamp(2.6rem,8.5vw,7.5rem)] md:ml-[7vw]">
                Intelligence
              </span>
              <span className="mt-4 block text-[clamp(1rem,2.2vw,1.6rem)] font-bold uppercase tracking-[0.4em] text-white md:ml-[7vw]">
                in the Age of <span className="gold-text">AI</span>
              </span>
            </h1>
          </div>

          <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
            <div className="rise rise-3 max-w-md border-l-2 border-gold/60 pl-5">
              <p className="text-base leading-relaxed text-white/85">
                Keynotes and programs that equip leaders to read the room,
                build trust, and get people thinking instead of just executing
                — for leadership summits, culture resets, and every room
                navigating AI.
              </p>
            </div>
            {/* Research: dual hero CTA "Book + Watch" (Ryan Estis pattern) */}
            <div className="rise rise-4 flex shrink-0 flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="btn-shine rounded-md bg-gradient-to-r from-brand-bright via-violet to-brand-bright bg-[length:200%_auto] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_0_50px_-5px_rgba(124,58,237,0.9)]"
              >
                Book Marni
              </Link>
              <a
                href="#reel"
                className="flex items-center justify-center gap-2.5 rounded-md border-2 border-gold/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-gold transition-all hover:bg-gold hover:text-abyss hover:shadow-[0_0_35px_-5px_rgba(233,196,106,0.6)]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" className="fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Marni
              </a>
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
                      i % 2 === 0 ? "gradient-text" : "outline-text"
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

      {/* ============ FEATURED BY ============ */}
      <FeaturedBy tone="purple" />

      {/* ============ WHAT IS HI (canonical definition) ============ */}
      <HiDefinition />

      {/* ============ INTRODUCING MARNI / THE SHIFT ============ */}
      <section className="section-dark overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-lavender">
              Introducing Marni
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl">
              Give her a room{" "}
              <span className="font-light">and thirty minutes</span>
            </h2>
            <p className="mt-4 font-serif text-2xl italic leading-snug text-gold md:text-3xl">
              &ldquo;I&apos;ll introduce people to a part of themselves they
              didn&apos;t know was there yet.&rdquo;
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Give her a workshop, and your team builds something they&apos;re
              still using a year later. Marni&apos;s core shift — from
              &ldquo;How do I fix this?&rdquo; to &ldquo;What needs to change
              so this stops happening?&rdquo; — is the difference between
              managing problems and eliminating them.
            </p>
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 text-center sm:grid-cols-3 md:py-20">
          {[
            // CRO: keep every number defensible — swap in Marni's real counts
            // (events delivered, audiences reached) when she confirms them
            { v: 25, suffix: "", label: "Years leading, building, and rebuilding" },
            { v: 6, suffix: "", label: "Industry-tailored programs" },
            { v: 1, suffix: "", label: "Big idea your audience will remember" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <p className="gold-text font-serif text-6xl font-semibold md:text-7xl">
                <CountUp value={s.v} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
        <div aria-hidden className="hairline-gold absolute inset-x-0 bottom-0" />
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Who Marni <span className="gradient-text">Speaks To</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              The technology changes by industry. The humans don&apos;t. Find
              how Human Intelligence lands in your world.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.06} className="h-full">
              <Link
                href={`/speaking/${ind.slug}`}
                className="card-lux group flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="fill-lavender transition-colors group-hover:fill-gold"
                >
                  <path d={industryIcons[ind.slug]} />
                </svg>
                <span className="text-sm font-bold uppercase tracking-wider text-white">
                  {ind.shortName}
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE HI ECOSYSTEM ============ */}
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
              Leadership isn&apos;t a title — it&apos;s how you show up, and
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

      {/* ============ THE PROGRAMS (breadth hedge) ============
          ~40% of planner briefs are pure leadership/culture with no AI angle
          (PCMA) — this teaser makes sure they see their talk before bouncing */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Programs
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Beyond the signature keynote —{" "}
              <span className="gradient-text">four more talks</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Leadership, communication, culture, and execution — every
              program bookable on its own, with or without the AI
              conversation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href="/speaking"
                  className="card-lux group flex h-full flex-col p-7"
                >
                  <h3 className="font-bold uppercase tracking-wide text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 font-serif text-lg italic leading-snug text-white/75">
                    {p.description.split(". ")[0]}.
                  </p>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors group-hover:text-white">
                    Explore the program →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIDEO ============ */}
      <section id="reel" className="stage-glow scroll-mt-20 text-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
              See Marni <span className="gradient-text">in Action</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/75">
              Big-stage energy, real warmth. Watch how Human Intelligence lands
              with a live audience.
            </p>
          </Reveal>
          {/* Current speaker demo from fullpocketcoaching.com — swap for the
              new agency-produced reel when it arrives (~5 weeks) */}
          <Reveal delay={0.15} y={40}>
            <video
              controls
              preload="metadata"
              poster="/images/marni-conference.jpg"
              className="mt-10 aspect-video w-full rounded-xl bg-black object-cover shadow-2xl shadow-brand/30"
            >
              <source src="/videos/speaker-demo.webm" type="video/webm" />
            </video>
          </Reveal>
          <a
            href="https://www.youtube.com/@MarniBlytheSpeaks"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm font-bold uppercase tracking-[0.15em] text-gold underline underline-offset-8 hover:text-white"
          >
            More clips on YouTube →
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </section>

      {/* ============ INSTAGRAM ============ */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
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

      {/* ============ BILLBOARD QUOTE ============ */}
      <section className="section-purple relative overflow-hidden">
        <div aria-hidden className="hairline-gold absolute inset-x-0 top-0" />
        <div
          aria-hidden
          className="float-pulse absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright/15 blur-[130px]"
        />
        <Reveal className="relative mx-auto max-w-5xl px-5 py-24 text-center md:py-32">
          <p className="font-serif text-[clamp(1.9rem,4.5vw,3.8rem)] font-medium italic leading-[1.25]">
            <span aria-hidden className="gold-text mr-1 text-[1.4em] leading-none">
              &ldquo;
            </span>
            The skill that moves organizations forward{" "}
            <span className="gradient-text not-italic font-semibold">
              isn&apos;t artificial — it&apos;s human.
            </span>
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-gold">
            — Marni Blythe
          </p>
        </Reveal>
        <div aria-hidden className="hairline-gold absolute inset-x-0 bottom-0" />
      </section>

      {/* ============ THE BOOK ============ */}
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
            <p className="mt-4 font-serif text-xl italic leading-snug text-white/85">
              Your competitive edge for unleashing unprecedented company growth
              and fostering high-performing, engaged teams.
            </p>
            <p className="mt-5 leading-relaxed text-white/75">
              Co-authored with Tiffany Wuebben, <em>Culture Catalyst</em> is
              the playbook behind Marni&apos;s keynotes: how leaders harness
              emotional intelligence and communication to build a culture that
              stands the test of time — because culture isn&apos;t your values
              poster, it&apos;s what your people feel every day.
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

      {/* ============ BRANDS ============ */}
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

      {/* ============ TESTIMONIAL (light relief section) ============
          Single featured organizer quote — switch to a 3-up grid when two
          more named quotes land in src/lib/testimonials.ts */}
      <section className="texture-light">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              What Event Organizers Say
            </p>
            <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
              <span aria-hidden className="gold-text mr-1 text-5xl leading-none">
                &ldquo;
              </span>
              {testimonials[0].quote}
            </blockquote>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-navy">
              {testimonials[0].attribution}
              <span className="mt-1 block font-medium normal-case tracking-normal text-ink/60">
                {testimonials[0].role}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
              Your audience doesn&apos;t need{" "}
              <span className="gradient-text">another talk about AI</span>
            </h2>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-white/85 md:text-2xl">
              They need to remember what only humans can do — and how to lead
              with it.
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
