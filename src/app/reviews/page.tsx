import type { Metadata } from "next";
import CtaPair from "@/components/CtaPair";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { pageMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Reviews of Keynote Speaker Marni Blythe",
  description:
    "What CEOs, event organizers, and audiences say after booking keynote speaker Marni Blythe, in their own words.",
  path: "/reviews",
});

// No Review/AggregateRating JSON-LD on purpose: Google treats first-party
// reviews of your own business as self-serving and ignores (or penalizes) them.
const organizers = testimonials.filter((t) => t.kind === "organizer");
const audience = testimonials.filter((t) => t.kind === "audience");
const workedWith = testimonials.filter((t) => t.kind === "worked-with");

export default function Reviews() {
  return (
    <>
      {/* Hero — CSS .rise entrances (above the fold, paints pre-hydration) */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <p className="rise mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Reviews
          </p>
          <h1 className="rise rise-2 text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            What happens when{" "}
            <span className="gradient-text">Marni takes the room</span>
          </h1>
          <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {testimonials.length} reviews from CEOs, event organizers, and the
            people in the seats, in their own words.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col items-center gap-6">
            <CtaPair on="dark" className="justify-center" />
            <a
              href="https://www.youtube.com/@MarniBlytheSpeaks"
              target="_blank"
              rel="noopener noreferrer"
              data-track="youtube_channel"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-lavender transition-colors hover:text-white"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" className="fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch video testimonials on YouTube
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Organizers — the buyer's voice leads */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              From the people who <span className="gradient-text">booked her</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {organizers.map((t, i) => (
              <Reveal key={t.attribution} delay={(i % 2) * 0.1}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience — light relief, masonry columns */}
      <section className="texture-light">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">
              From the <span className="text-brand">seats</span>
            </h2>
          </Reveal>
          <div className="mt-12 gap-6 md:columns-2 lg:columns-3">
            {audience.map((t) => (
              <Reveal key={t.attribution} className="mb-6 break-inside-avoid">
                <TestimonialCard t={t} on="light" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Colleagues & clients */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              From leaders who&apos;ve{" "}
              <span className="gradient-text">worked with her</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workedWith.map((t, i) => (
              <Reveal key={t.attribution} delay={(i % 2) * 0.1}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
              Your room is <span className="gradient-text">next</span>
            </h2>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-white/85 md:text-2xl">
              Tell us about your audience. We&apos;ll get back to you within 24
              hours.
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
