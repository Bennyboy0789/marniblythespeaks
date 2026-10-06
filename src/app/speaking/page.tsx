import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import CtaPair from "@/components/CtaPair";
import HiDefinition from "@/components/HiDefinition";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { industries } from "@/lib/industries";
import { SPEAKER_REEL_ID } from "@/lib/media";
import {
  allTalks,
  type Program,
  programs,
  reasonsToBook,
  signatureKeynote,
} from "@/lib/programs";
import { pageMetadata } from "@/lib/seo";
import { speakingTestimonial } from "@/lib/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Keynote Speaker & Leadership Programs",
  description:
    "Keynote speaker Marni Blythe's signature talk, Human Intelligence in an AI World, plus programs on predictable growth, culture, and high-stakes conversations.",
  path: "/speaking",
});

const BASE = "https://marniblythespeaks.com";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": allTalks.map((p) => ({
    "@type": "Service",
    "@id": `${BASE}/speaking#${p.id}`,
    name: p.title,
    serviceType: p.signature ? "Keynote Speech" : "Keynote & Workshop",
    url: `${BASE}/speaking#${p.id}`,
    description: p.description.join(" "),
    provider: { "@id": `${BASE}/#organization` },
    areaServed: "Worldwide",
    audience: { "@type": "Audience", audienceType: p.audience },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Formats",
      value: p.formats,
    },
  })),
};

/** Marni's buyer questions, answered for every talk (brief, section 9). */
function BuyerAnswers({ p }: { p: Program }) {
  return (
    <dl className="mt-6 space-y-4 text-sm">
      {[
        ["What business problem does this solve?", p.problem],
        ["Who is this designed for?", p.audience],
        ["What will the audience leave able to do differently?", p.outcomes],
        ["Formats", p.formats],
      ].map(([q, a]) => (
        <div key={q}>
          <dt className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {q}
          </dt>
          <dd className="mt-1 leading-relaxed text-white/80">{a}</dd>
        </div>
      ))}
    </dl>
  );
}

function Objectives({ p }: { p: Program }) {
  return (
    <details className="group mt-6 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-lavender">
        Learning objectives
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden
          className="fill-current transition-transform group-open:rotate-180"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </summary>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/75">
        {p.objectives.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </details>
  );
}

export default function Speaking() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Signature keynote hero. H1 carries page intent (de-duplicated from
          the Home H1 per audit); the keynote title is the visual h2. */}
      <section id={signatureKeynote.id} className="stage-glow scroll-mt-20 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h1 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Keynote Speaking &amp; Programs · Signature Keynote
          </h1>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                <span className="gradient-text">Human Intelligence</span> in an
                AI World
              </h2>
              <p className="mt-4 font-serif text-xl italic leading-snug text-gold md:text-2xl">
                {signatureKeynote.subtitle}
              </p>
              <div className="mt-5 space-y-4 leading-relaxed text-white/80">
                {signatureKeynote.description.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-gold/60 pl-5 font-serif text-lg italic leading-snug text-white">
                {signatureKeynote.hook}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl shadow-brand/30">
                <Image
                  src="/images/marni-stage.png"
                  alt="Marni Blythe delivering a keynote to a packed ballroom"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <BuyerAnswers p={signatureKeynote} />
              <Objectives p={signatureKeynote} />
              <Link
                href="/contact"
                data-track="cta_book_marni"
                className="btn-shine mt-8 inline-block rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-bright/25 transition hover:brightness-110"
              >
                Bring This Keynote to Your Event
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Organizer testimonial */}
      <section className="section-dark border-t border-white/5">
        <Reveal className="mx-auto max-w-3xl px-5 py-14 text-center md:py-16">
          <blockquote className="font-serif text-xl italic leading-relaxed text-white/85">
            &ldquo;{speakingTestimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {speakingTestimonial.attribution} ·{" "}
            <span className="text-white/60">{speakingTestimonial.role}</span>
          </p>
          <Link
            href="/reviews"
            className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.15em] text-lavender transition-colors hover:text-white"
          >
            Read all reviews &rarr;
          </Link>
        </Reveal>
      </section>

      {/* Other programs */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              The <span className="gradient-text">Programs</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-white/70">
              Every keynote can stand alone and is customized to the audience,
              organization, and outcomes you want to create. Keynotes energize
              and reframe; workshops turn the ideas into practice. Every
              program is available in-person, virtual, or hybrid.
            </p>
          </Reveal>
          <div className="mt-12 space-y-8">
            {programs.map((p) => (
              <Reveal key={p.id}>
                <article
                  id={p.id}
                  className="card-lux grid scroll-mt-24 gap-8 p-8 md:p-10 lg:grid-cols-2"
                >
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="mt-2 font-serif text-lg italic leading-snug text-gold">
                        {p.subtitle}
                      </p>
                    )}
                    <div className="mt-5 space-y-4 leading-relaxed text-white/75">
                      {p.description.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <BuyerAnswers p={p} />
                    <Objectives p={p} />
                    <Link
                      href="/contact"
                      className="mt-6 inline-block rounded-md border-2 border-brand-bright px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-bright"
                    >
                      Inquire About This Program
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Canonical HI definition (verbatim across /, /about, /speaking) */}
      <HiDefinition />

      {/* How HI gets tailored — research: planners probe customization depth
          before booking; showing the process converts "book me" into a
          consultative offer */}
      <section className="section-dark border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              No Generic Talks
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              How HI gets tailored{" "}
              <span className="gradient-text">to your room</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Discovery call",
                body: "Before anything else, Marni talks with your leadership about your audience, your pressures, and what you need people saying on the way out.",
              },
              {
                title: "Your language, your examples",
                body: "The talk gets rebuilt around your industry's reality: the scenarios, the vocabulary, the wins your people will actually recognize.",
              },
              {
                title: "Built to outlast the applause",
                body: "Every audience leaves with tools they use Monday morning, and workshop extensions are available when you want hands-on practice, not just inspiration.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12} className="h-full">
                <div className="card-lux h-full p-8 text-center">
                  <span className="gold-text font-serif text-4xl font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-bold uppercase tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal>
          <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-white/70">
            These worlds look nothing alike on paper, but the human part is
            identical: people do their best work when they feel led, trusted,
            and connected. See how HI lands in yours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/speaking/${ind.slug}`}
                className="rounded-md border-2 border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold hover:text-gold"
              >
                {ind.name}
              </Link>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Watch Marni <span className="gradient-text">Speak</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
            <YouTubeEmbed
              id={SPEAKER_REEL_ID}
              title="Marni Blythe speaker reel: Human Intelligence and leadership"
            />
          </Reveal>
          <p className="mt-8 text-center">
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

      {/* Reasons to book */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Reasons to <span className="gradient-text">Bring Marni In</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsToBook.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="card-lux h-full p-7">
                <span className="gradient-text font-serif text-3xl font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-bold uppercase tracking-wide text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {r.body}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stage-glow text-white">
        <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            Let&apos;s find the right talk{" "}
            <span className="gradient-text">for your room</span>
          </h2>
          <CtaPair on="dark" className="mt-10 justify-center" />
        </Reveal>
      </section>
    </>
  );
}
