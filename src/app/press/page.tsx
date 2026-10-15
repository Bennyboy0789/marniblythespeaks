import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CtaPair from "@/components/CtaPair";
import FeaturedBy from "@/components/FeaturedBy";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { SPEAKER_PACKET_FILENAME, SPEAKER_PACKET_URL } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Press & Media",
  description:
    "Marni Blythe in the media: magazine cover story, podcast interviews, expert panels, and press coverage on Human Intelligence, leadership, and culture.",
  path: "/press",
});

// Added Oct 2026 at Marni's request ("where's our press page?").
// Podcast titles are exactly as each show published them; every link was
// verified Oct 2026 (source: FPC media page + drafts/media-podcasts.md).

const DEW_ISSUE =
  "https://issuu.com/dentalentrepreneur/docs/dental_entrepreneur_woman_-_summer_2026";

const podcasts = [
  {
    show: "Growing Your Dental Business Show",
    title:
      "HI in the Age of AI: The Leadership Skill Dentistry Isn't Talking About Yet",
    date: "September 2026",
    href: "https://podcast.show/1474193/hi-in-the-age-of-ai-the-leadership-skill-dentistry-isnt-talking-about-yet/",
  },
  {
    show: "The Dental HR Podcast (Bent Ericksen)",
    title: "Culture Catalyst with Marni Blythe!",
    date: "August 2026",
    href: "https://bentericksen.com/culture-catalyst-with-marni-blythe/",
  },
  {
    show: "The Inspired Hygiene Podcast",
    title:
      "S5 E6: Overcome Resistance & Master Your Mindset in Dentistry with Marni Blythe",
    date: "August 2026",
    href: "https://inspiredhygienepodcast.podbean.com/e/s5-e6-overcome-resistance-master-your-mindset-in-dentistry-with-marni-blythe/",
  },
  {
    show: "The Ailm Practice Education Series",
    title: "S4 E1: The Fractional Fix: From Chaos to Clarity with Marni Blythe",
    date: "June 2026",
    href: "https://podcasts.apple.com/us/podcast/s4-e1-the-fractional-fix-from-chaos-to-clarity-with/id1896845246?i=1000773459830",
  },
  {
    show: "The Story Project with Joanna Scott",
    title:
      "043: Soul Care, Human Intelligence, and Leading From Within with Marni Blythe",
    date: "June 2026",
    href: "https://thestoryproject.libsyn.com/043-soul-care-human-intelligence-and-leading-from-within-with-marni-blythe",
  },
  {
    show: "Just DeW It",
    title:
      "Why Human Intelligence Outshines AI in Dental Leadership, Featuring Marni Blythe",
    date: "May 2026",
    href: "https://www.dewlifecrew.com/podcasts/just-dew-it/episodes/2149207356",
  },
  {
    show: "Dentistry Speaks",
    title: "Episode 59: How to build an intentional culture with Marni Blythe",
    date: "March 2026",
    href: "https://soundcloud.com/user-596432482/how-to-build-an-intentional",
  },
  {
    show: "The Extraction (TeamCare)",
    title:
      "The Extraction Ep 16: Growth Mindset Dentistry and Incentives That Build Culture with Marni Blythe",
    date: "December 2025",
    href: "https://creators.spotify.com/pod/profile/teamcare/episodes/The-Extraction-Ep-16-Growth-Mindset-Dentistry-and-Incentives-That-Build-Culture-with-Marni-Blythe-e3cjb4g",
  },
];

const panels = [
  {
    id: "TbWhKjlo8-Y",
    title:
      "The Extraction Ep 16: Growth Mindset Dentistry and Incentives That Build Culture",
  },
  { id: "niqViPbG1kA", title: "Guest speaker: The Thriving Dentist Expert Panel" },
  {
    id: "lG2BTJJCYEE",
    title:
      "Thriving Dentist Panel: The Dental Staffing Crisis, Solutions for Recruitment and Retention",
  },
];

const PRESS_RELEASE_TITLE =
  "Emotional Intelligence Leadership Speaker Marni Blythe of Full Pocket Coaching Addresses Critical Gap in Healthcare Operations";

const coverage = [
  {
    outlet: "WRAL MarketWatch",
    href: "https://markets.financialcontent.com/wral/article/getnews-2025-10-7-emotional-intelligence-leadership-speaker-marni-blythe-of-full-pocket-coaching-addresses-critical-gap-in-healthcare-operations/",
  },
  {
    outlet: "FWNBC MarketMinute",
    href: "https://fwnbc.marketminute.com/article/getnews-2025-10-7-emotional-intelligence-leadership-speaker-marni-blythe-of-full-pocket-coaching-addresses-critical-gap-in-healthcare-operations",
  },
  {
    outlet: "WBNG MarketMinute",
    href: "https://wbng.marketminute.com/article/getnews-2025-10-7-emotional-intelligence-leadership-speaker-marni-blythe-of-full-pocket-coaching-addresses-critical-gap-in-healthcare-operations",
  },
  {
    outlet: "Business Insurance",
    href: "https://index.businessinsurance.com/businessinsurance/article/getnews-2025-10-7-emotional-intelligence-leadership-speaker-marni-blythe-of-full-pocket-coaching-addresses-critical-gap-in-healthcare-operations",
  },
];

function External({
  href,
  children,
  className,
  track,
}: {
  href: string;
  children: ReactNode;
  className: string;
  track?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track={track}
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}

export default function Press() {
  return (
    <>
      {/* Hero — CSS .rise entrances (above the fold, paints pre-hydration) */}
      <section className="stage-glow text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
          <p className="rise mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
            Press &amp; Media
          </p>
          <h1 className="rise rise-2 text-4xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Marni <span className="gradient-text">in the media</span>
          </h1>
          <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Cover stories, podcast interviews, and expert panels on Human
            Intelligence, leadership, and the cultures people actually want
            to work in.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={SPEAKER_PACKET_URL}
              download={SPEAKER_PACKET_FILENAME}
              data-track="cta_packet_download"
              className="btn-shine rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition hover:brightness-110"
            >
              Download the Speaker Packet
            </a>
            <a
              href="mailto:hello@marniblythespeaks.com?subject=Media%20inquiry"
              data-track="media_inquiry"
              className="rounded-md border-2 border-gold/60 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
            >
              Media Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* In Print */}
      <section className="section-dark">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 md:grid-cols-5 md:py-24">
          <Reveal className="mx-auto w-full max-w-[280px] md:col-span-2">
            <External
              href={DEW_ISSUE}
              track="press_dew_cover"
              className="card-lux block overflow-hidden p-2 transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/press/dew-cover.jpg"
                alt="Marni Blythe on the cover of Dental Entrepreneur Woman, Summer 2026"
                width={1530}
                height={2048}
                sizes="280px"
                className="rounded-lg"
              />
            </External>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              In Print · Summer 2026
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              On the cover, and{" "}
              <span className="gradient-text">she wrote the story</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Marni is the Summer 2026 cover of{" "}
              <em>Dental Entrepreneur Woman</em> and the author of its cover
              story, &ldquo;The Power of the Pivot,&rdquo; on rebuilding
              yourself and your business when the old playbook stops working.
            </p>
            <External
              href={DEW_ISSUE}
              track="press_dew_read"
              className="mt-7 inline-block rounded-md border-2 border-gold/60 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
            >
              Read the Issue
            </External>
          </Reveal>
        </div>
      </section>

      {/* Podcasts */}
      <section className="section-purple">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Podcast <span className="gradient-text">interviews</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {podcasts.map((p, i) => (
              <Reveal key={p.href} delay={(i % 2) * 0.08} className="h-full">
                <External
                  href={p.href}
                  track="press_podcast"
                  className="card-lux group flex h-full flex-col p-7"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {p.show} · {p.date}
                  </span>
                  <span className="mt-3 flex-1 font-serif text-lg italic leading-snug text-white/90">
                    {p.title}
                  </span>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-lavender transition-colors group-hover:text-white">
                    Listen to the episode →
                  </span>
                </External>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Panels & interviews on video */}
      <section className="section-dark">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Panels &amp; <span className="gradient-text">interviews</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
            {panels.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.1}>
                <YouTubeEmbed id={v.id} title={v.title} compact />
                <p className="mt-3 text-sm leading-snug text-white/75">
                  {v.title}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* As featured on + press release coverage */}
      <FeaturedBy tone="dark" />
      <section className="section-dark">
        <Reveal className="mx-auto max-w-3xl px-5 pb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
            Press release · October 2025
          </p>
          <p className="mt-4 font-serif text-xl italic leading-snug text-white/90">
            &ldquo;{PRESS_RELEASE_TITLE}&rdquo;
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {coverage.map((c) => (
              <li key={c.href}>
                <External
                  href={c.href}
                  track="press_release"
                  className="inline-block rounded-md border-2 border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold hover:text-gold"
                >
                  {c.outlet}
                </External>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* The book */}
      <section className="section-purple">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 md:grid-cols-5 md:py-24">
          <Reveal className="mx-auto w-full max-w-[220px] md:col-span-2">
            <Image
              src="/images/book-mockup.webp"
              alt="Culture Catalyst book by Tiffany Wuebben and Marni Blythe"
              width={634}
              height={951}
              sizes="220px"
              className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">
              Author · Amazon Best Seller
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Culture <span className="gradient-text">Catalyst</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Co-authored by Marni Blythe with Tiffany Wuebben, on how
              emotional intelligence, communication, and intentional
              leadership create high-performing cultures.
            </p>
            <External
              href="https://www.amazon.com/Culture-Catalyst-Tiffany-Wuebben/dp/B0DWVB95B1"
              track="book_amazon"
              className="mt-7 inline-block rounded-md border-2 border-gold/60 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
            >
              Get It on Amazon
            </External>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="stage-glow text-white">
        <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            Bring Marni to <span className="gradient-text">your audience</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/75">
            Booking a guest for your show, panel, or publication? Email{" "}
            <a
              href="mailto:hello@marniblythespeaks.com?subject=Media%20inquiry"
              className="font-bold text-gold underline underline-offset-4 hover:text-white"
            >
              hello@marniblythespeaks.com
            </a>
            .
          </p>
          <CtaPair on="dark" className="mt-10 justify-center" />
        </Reveal>
      </section>
    </>
  );
}
