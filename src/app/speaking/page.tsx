import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import CtaPair from "@/components/CtaPair";
import HiDefinition from "@/components/HiDefinition";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/industries";
import { programs, reasonsToBook, signatureKeynote } from "@/lib/programs";
import { pageMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Keynote Speaker & Leadership Programs",
  description:
    "Keynote speaker Marni Blythe's signature talk — Human Intelligence in the Age of AI — plus leadership, communication, and culture programs for every event.",
  path: "/speaking",
});

const BASE = "https://marniblythespeaks.com";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [signatureKeynote, ...programs].map((p, i) => ({
    "@type": "Service",
    "@id": `${BASE}/speaking#service-${i}`,
    name: p.title,
    serviceType: p.signature ? "Keynote Speech" : "Keynote & Workshop",
    url: `${BASE}/speaking`,
    description: p.description,
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

export default function Speaking() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Signature keynote hero. H1 carries page intent (de-duplicated from
          the Home H1 per audit); the keynote title is the visual h2. */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h1 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Keynote Speaking &amp; Programs — Signature Keynote
          </h1>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
                <span className="gradient-text">Human Intelligence</span> in the
                Age of AI
              </h2>
              {/* Research: planners are fatigued by AI-hype keynotes — name the
                  anti-position explicitly */}
              <p className="mt-4 font-serif text-2xl italic text-gold">
                Not another AI talk.
              </p>
              <p className="mt-5 leading-relaxed text-white/80">
                {signatureKeynote.description}
              </p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                    Ideal audience
                  </dt>
                  <dd className="mt-1 text-white/80">
                    {signatureKeynote.audience}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                    Formats
                  </dt>
                  <dd className="mt-1 text-white/80">
                    {signatureKeynote.formats}
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="btn-shine mt-8 inline-block rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-bright/25 transition hover:brightness-110"
              >
                Book This Keynote
              </Link>
            </Reveal>
            <Reveal delay={0.15} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl shadow-brand/30">
              <Image
                src="/images/marni-stage.png"
                alt="Marni Blythe delivering a keynote to a packed ballroom"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Organizer testimonial */}
      <section className="section-dark border-t border-white/5">
        <Reveal className="mx-auto max-w-3xl px-5 py-14 text-center md:py-16">
          <blockquote className="font-serif text-xl italic leading-relaxed text-white/85">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {testimonials[0].attribution} ·{" "}
            <span className="text-white/60">{testimonials[0].role}</span>
          </p>
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
              Keynotes energize and reframe. Workshops turn the ideas into
              practice — real tools your team can act on before the coffee
              gets cold. Every program is available in-person, virtual, or
              hybrid.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.12} className="h-full">
              <div className="card-lux flex h-full flex-col p-8">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-white/75">
                  {p.description}
                </p>
                <p className="mt-5 text-sm text-white/70">
                  <span className="font-bold uppercase tracking-wider text-gold">
                    Ideal for:
                  </span>{" "}
                  {p.audience}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  <span className="font-bold uppercase tracking-wider text-gold">
                    Formats:
                  </span>{" "}
                  {p.formats}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block self-start rounded-md border-2 border-brand-bright px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-bright"
                >
                  Inquire About This Program
                </Link>
              </div>
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
                body: "The talk gets rebuilt around your industry's reality — the scenarios, the vocabulary, the wins your people will actually recognize.",
              },
              {
                title: "Built to outlast the applause",
                body: "Every audience leaves with tools they use Monday morning — and workshop extensions are available when you want hands-on practice, not just inspiration.",
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
          {/* CRO: dashed placeholder tiles removed — swap this panel for a
              3-up grid of embedded clips once the agency videos land */}
          <Reveal delay={0.1}>
            <div className="card-lux mx-auto mt-12 max-w-2xl p-10 text-center">
              <p className="leading-relaxed text-white/80">
                Speaking clips, audience moments, and shorts — new videos land
                on the channel every month.
              </p>
              <a
                href="https://www.youtube.com/@MarniBlytheSpeaks"
                target="_blank"
                rel="noopener noreferrer"
                data-track="youtube_channel"
                className="mt-6 inline-flex items-center gap-2.5 rounded-md border-2 border-gold/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-gold transition-all hover:bg-gold hover:text-abyss"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch on YouTube
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reasons to book */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Reasons to <span className="gradient-text">Book Marni</span>
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
