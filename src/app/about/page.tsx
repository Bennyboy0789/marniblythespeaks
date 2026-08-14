import type { Metadata } from "next";
import Image from "next/image";
import CtaPair from "@/components/CtaPair";
import FeaturedBy from "@/components/FeaturedBy";
import HiDefinition from "@/components/HiDefinition";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Marni Blythe — Keynote Speaker",
  description:
    "Meet keynote speaker Marni Blythe — operator, Culture Catalyst co-author, and the voice behind Human Intelligence in the Age of AI.",
  path: "/about",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://marniblythespeaks.com/about#marni-blythe",
  name: "Marni Blythe",
  url: "https://marniblythespeaks.com/about",
  image: "https://marniblythespeaks.com/images/marni-portrait-1.jpg",
  jobTitle: "Keynote Speaker",
  description:
    "Marni Blythe is a keynote speaker and the voice behind Human Intelligence in the Age of AI — the umbrella for everything she teaches about leadership, communication, and culture. She spent 25 years leading and rebuilding organizations — Fortune 500 marketing, her own agency, and years as a fractional COO/CMO through her firm Full Pocket Coaching — and co-authored the Amazon best-selling book Culture Catalyst.",
  worksFor: { "@id": "https://marniblythespeaks.com/#organization" },
  knowsAbout: [
    "Human Intelligence",
    "Leadership development",
    "Emotional intelligence",
    "Organizational culture",
    "Executive communication",
    "Change management",
  ],
  sameAs: [
    "https://www.linkedin.com/in/marniblythe",
    "https://www.youtube.com/@MarniBlytheSpeaks",
    "https://www.instagram.com/marniblythespeaks",
    "https://fullpocketcoaching.com",
  ],
};

const lives = [
  {
    letter: "L",
    value: "Lead with Servant Heart",
    body: "Leadership is a responsibility to people, not a reward for tenure. Serve first, and the results follow.",
  },
  {
    letter: "I",
    value: "Integrity Always",
    body: "Say the true thing. Do the promised thing. Especially when no one's watching.",
  },
  {
    letter: "V",
    value: "Vulnerability Builds Trust",
    body: "Nobody trusts a leader who's never wrong. Owning your gaps is what gives your team permission to grow theirs.",
  },
  {
    letter: "E",
    value: "Empathy & Compassion",
    body: "Read the room. Every person on your team is carrying something you can't see. Lead like it.",
  },
  {
    letter: "S",
    value: "Strive to Grow — or We Die",
    body: "Comfort is the enemy of every great team. Growth isn't optional; it's the whole point.",
  },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <section className="stage-glow overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 md:grid-cols-5 md:pt-24">
          <Reveal className="pb-16 md:col-span-3 md:pb-24">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              About Marni
            </p>
            <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Big-stage energy.{" "}
              <span className="gradient-text">Operator&apos;s brain.</span>{" "}
              Servant&apos;s heart.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Marni Blythe is a keynote speaker and the voice behind Human
              Intelligence in the Age of AI — the umbrella for everything she
              teaches about leadership, communication, and culture.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative mt-4 self-end md:col-span-2 md:mt-0">
            {/* headliner-poster name behind the cutout */}
            <span
              aria-hidden
              className="outline-text absolute bottom-[18%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(5rem,10vw,9rem)] font-bold uppercase leading-none tracking-tight opacity-40"
            >
              Marni
            </span>
            {/* purple glow behind the cutout */}
            <div
              aria-hidden
              className="float-pulse absolute bottom-0 left-1/2 aspect-square w-[110%] max-w-none -translate-x-1/2 rounded-full bg-brand-bright/25 blur-[110px]"
            />
            {/* gold-edged arch rising from the section floor */}
            <div
              aria-hidden
              className="absolute bottom-0 left-1/2 aspect-[1/1.15] w-[88%] -translate-x-1/2 rounded-t-full border-x border-t border-gold/70 bg-gradient-to-b from-brand/35 via-navy/20 to-transparent shadow-[0_0_45px_rgba(233,196,106,0.3),inset_0_0_60px_rgba(124,58,237,0.25)]"
            />
            <Image
              src="/images/marni-cutout.png"
              alt="Marni Blythe, arms crossed and smiling"
              width={744}
              height={1198}
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="relative z-10 mx-auto w-full max-w-sm drop-shadow-[0_30px_70px_rgba(124,58,237,0.5)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="section-dark">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              The <span className="gradient-text">Story</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5 leading-relaxed text-white/80">
            <p>
              None of what Marni teaches comes from a textbook. She spent 25
              years leading, building, losing, and rebuilding: she led
              marketing for Fortune 500 brands, launched her own agency, and
              co-founded a fitness and wellness center. So when she talks
              about pressure, culture, and connection, she&apos;s speaking
              from the inside.
            </p>
            <p>
              As founder of Full Pocket Coaching, she&apos;s spent years inside
              organizations as a fractional COO, integrator, and CMO,
              untangling the same knot again and again: talented leaders,
              stalled teams, and a gap between vision and execution that no
              strategy deck could close. The pattern was never a talent
              problem. It was a human one. Leaders were asking &ldquo;How do I
              fix this?&rdquo; when the question that changes everything is{" "}
              <span className="font-serif text-xl italic text-gold">
                &ldquo;What needs to change so this stops happening?&rdquo;
              </span>
            </p>
            <p>
              Then AI arrived, and every organization started asking what
              machines could do. Marni started asking the better question: what
              can only your people do? She named it Human Intelligence — HI —
              and it became the through-line for every stage she steps on. She
              co-authored the Amazon best seller <em>Culture Catalyst</em>{" "}
              because the message needed to travel further than one stage at a
              time.
            </p>
            <p>
              Today Marni speaks to organizations across education, insurance,
              financial services, tech, and corporate America. Those worlds
              look nothing alike on paper, but the human part is identical:
              people do their best work when they feel led, trusted, and
              connected — so the work travels anywhere people are building
              something together.
            </p>
            <p>
              Off the clock, she&apos;s a bio-hacking CrossFit yogi, married
              with three daughters and two Maltese, always chasing the next
              trip to Aruba. On the clock, she believes the leader your team
              needs is already in there — in every person on the payroll,
              waiting for someone to bring it forward.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/marni-event-2.jpg"
                alt="Marni with attendees at a conference"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.12} className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/marni-event-3.jpg"
                alt="Marni with an event group"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Canonical HI definition (verbatim across /, /about, /speaking) */}
      <HiDefinition />

      {/* L.I.V.E.S. */}
      <section className="section-purple">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <Reveal className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              The Values
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-white md:text-4xl">
              L.I.V.E.S.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
              The framework behind everything Marni teaches — and how she runs
              her own work.
            </p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {lives.map((v, i) => (
              <Reveal key={v.letter} delay={i * 0.08}>
              <div className="card-lux flex gap-6 p-6">
                <span className="gradient-text font-serif text-4xl font-semibold leading-none">
                  {v.letter}
                </span>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-white">
                    {v.value}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {v.body}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In Print — first linked, verifiable press credential (audit item).
          Lives on About (not home) per the de-emphasize-healthcare direction. */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 md:grid-cols-5 md:py-24">
          <Reveal className="mx-auto w-full max-w-[260px] md:col-span-2">
            <a
              href="https://issuu.com/dentalentrepreneur/docs/dental_entrepreneur_woman_-_summer_2026"
              target="_blank"
              rel="noopener noreferrer"
              data-track="press_dew_cover"
              className="card-lux block overflow-hidden p-2 transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/press/dew-cover.jpg"
                alt="Marni Blythe on the cover of Dental Entrepreneur Woman, Summer 2026"
                width={1530}
                height={2048}
                sizes="260px"
                className="rounded-lg"
              />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              In Print
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              On the cover — and{" "}
              <span className="gradient-text">she wrote the story</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Marni is the Summer 2026 cover of{" "}
              <em>Dental Entrepreneur Woman</em> — and the author of its cover
              story, &ldquo;The Power of the Pivot,&rdquo; on rebuilding
              yourself and your business when the old playbook stops working.
            </p>
            <a
              href="https://issuu.com/dentalentrepreneur/docs/dental_entrepreneur_woman_-_summer_2026"
              target="_blank"
              rel="noopener noreferrer"
              data-track="press_dew_read"
              className="mt-7 inline-block rounded-md border-2 border-gold/60 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
            >
              Read the Issue
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Featured By */}
      <FeaturedBy tone="dark" />

      {/* Full Pocket cross-link + CTA */}
      <section className="stage-glow text-white">
        <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Let&apos;s put <span className="gradient-text">HI</span> on your
            stage
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/75">
            Looking for fractional executive support instead?{" "}
            <a
              href="https://fullpocketcoaching.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold underline underline-offset-4 hover:text-white"
            >
              Visit Full Pocket Coaching
            </a>
            .
          </p>
          <CtaPair on="dark" className="mt-10 justify-center" />
        </Reveal>
      </section>
    </>
  );
}
