import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Keynote Speaker Marni Blythe",
  description:
    "Book keynote speaker Marni Blythe for your next conference, corporate retreat, all-staff meeting, or workshop. We respond within 24 hours.",
  path: "/contact",
});

// Single source of truth for the planner FAQ — renders the on-page accordion
// AND the FAQPage JSON-LD (kept identical by construction). Note: Google
// restricts FAQ rich results to gov/health sites; this markup is for AI answer
// engines (AI Overviews, ChatGPT, Perplexity), which still parse it.
const faqs = [
  {
    q: "How far in advance should we book?",
    a: "Most dates book three to six months out — but ask about your date either way. If Marni can make it work, she will.",
  },
  {
    q: "Can Marni present virtually or hybrid?",
    a: "Yes. Every program has an in-person, virtual, and hybrid format, and the virtual version is built for the screen — not a keynote pointed at a webcam.",
  },
  {
    q: "Will the talk be customized to our event?",
    a: "Always. Every booking includes a discovery call, and the keynote is rebuilt in your industry's language with your audience's real scenarios.",
  },
  {
    q: "What about AV and logistics?",
    a: "Kept simple: a wireless microphone and a screen for slides cover most events, and full technical details come with your booking confirmation. No riders full of surprises.",
  },
  {
    q: "What does it cost?",
    a: "Fees vary by format, date, and event type. Send an inquiry and you'll get clear numbers within 24 hours — including exactly what's covered.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="stage-glow text-white">
        <Reveal className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Book Marni for{" "}
            <span className="gradient-text">Your Next Event</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Tell us about your audience and what you want them walking away
            with. We&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>
      </section>

      <section className="section-dark">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-5 md:py-24">
          <Reveal className="card-lux p-8 md:col-span-3">
            <ContactForm />
          </Reveal>

          <aside className="space-y-8 md:col-span-2">
            <Reveal delay={0.1} className="rounded-xl border border-white/10 bg-gradient-to-br from-brand/30 to-navy/40 p-8">
              <h2 className="font-bold uppercase tracking-wide text-gold">
                Prefer to talk it through?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Grab 30 minutes with Marni to talk through your event, your
                audience, and whether HI is the right fit.
              </p>
              {/* CRO: the Calendly URL 404'd — routing to email until Marni
                  supplies the real scheduling link, then restore an <a> to it */}
              <a
                href="mailto:hello@marniblythespeaks.com?subject=Discovery%20call%20request"
                data-track="discovery_call_request"
                className="mt-5 inline-block rounded-md border-2 border-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-navy"
              >
                Request a Discovery Call
              </a>
            </Reveal>

            <Reveal delay={0.18} className="card-lux p-8">
              <h2 className="font-bold uppercase tracking-wide text-white">
                Speaker Packet
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Topics, formats, bio, and everything your event team needs —
                in one committee-ready PDF, sent straight to your inbox.
              </p>
              {/* CRO: direct download disabled while the packet PDF is a
                  placeholder — requesting by email protects credibility AND
                  captures the lead. Restore href="/speaker-packet.pdf" when
                  the real one-sheet ships. */}
              <a
                href="mailto:hello@marniblythespeaks.com?subject=Speaker%20packet%20request"
                data-track="packet_request"
                className="mt-5 inline-block rounded-md bg-gradient-to-r from-brand-bright to-violet px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:brightness-110"
              >
                Request the Speaker Packet
              </a>
            </Reveal>

            <Reveal delay={0.26} className="card-lux p-8">
              <h2 className="font-bold uppercase tracking-wide text-white">
                Reach out directly
              </h2>
              <a
                href="mailto:hello@marniblythespeaks.com"
                className="mt-3 block font-bold text-gold underline underline-offset-4 hover:text-white"
              >
                hello@marniblythespeaks.com
              </a>
              {/* Phone from Marni's existing speaking materials — confirm
                  she wants it published here before launch */}
              <a
                href="tel:+16464134872"
                className="mt-2 block font-bold text-gold underline underline-offset-4 hover:text-white"
              >
                646.413.4872
              </a>
              <p className="mt-3 text-sm text-white/50">
                We respond within 24 hours.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Research: visualized booking process de-risks the inquiry (Vinh Giang
          pattern) — planners want to know what happens after they reach out */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              What happens when{" "}
              <span className="gradient-text">you book Marni</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "You inquire",
                body: "Send the form, email, or grab a discovery call slot. You'll hear back within 24 hours — usually faster.",
              },
              {
                title: "Discovery call",
                body: "Marni meets with you (and your leadership, if you want) to understand your audience and what success looks like.",
              },
              {
                title: "Your talk, tailored",
                body: "The keynote gets rebuilt around your industry, your event theme, and the outcomes you're after. You'll know exactly what's coming.",
              },
              {
                title: "Show time — and after",
                body: "Marni arrives early, works the room, and stays after. Your audience leaves with tools for Monday morning, not just a good feeling.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="h-full">
                <div className="card-lux h-full p-7 text-center">
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

      {/* Logistics FAQ — anticipates the planner checklist (AV, travel,
          formats, fees). CONFIRM policy details with Marni before launch. */}
      <section className="section-dark">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Event planner <span className="gradient-text">FAQ</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="card-lux group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                    <h3 className="font-bold uppercase tracking-wide text-white">
                      <span className="gold-text mr-3 font-serif text-lg">✦</span>
                      {f.q}
                    </h3>
                    <svg
                      aria-hidden
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-white/70">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
