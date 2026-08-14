import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionToggle from "@/components/MotionToggle";
import TrackClicks from "@/components/TrackClicks";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_DESCRIPTION =
  "Keynote speaker Marni Blythe equips leaders to read the room, build trust, and get people thinking — the skill that moves organizations forward is HI, not AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marniblythespeaks.com"),
  title: {
    default: "Marni Blythe Speaks — Human Intelligence in the Age of AI",
    template: "%s | Marni Blythe Speaks",
  },
  description: SITE_DESCRIPTION,
  // Home canonical; child pages override via pageMetadata() in src/lib/seo.ts.
  alternates: { canonical: "/" },
  // CRO: bookings are committee decisions — links get forwarded, so they must
  // unfurl with a real preview in Slack/Teams/email. Child pages MUST set
  // their own openGraph via pageMetadata() — Next inherits this object
  // verbatim otherwise.
  openGraph: {
    type: "website",
    siteName: "Marni Blythe Speaks",
    title: "Marni Blythe Speaks — Human Intelligence in the Age of AI",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marni Blythe Speaks — Human Intelligence in the Age of AI",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

// Organization + WebSite entity graph (site-wide). Logo uses the square brand
// mark generated for this purpose (Google requires a square ≥112px logo).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marniblythespeaks.com/#organization",
      name: "Marni Blythe Speaks",
      alternateName: "Marni Blythe",
      url: "https://marniblythespeaks.com",
      logo: "https://marniblythespeaks.com/icon-512.png",
      description:
        "Keynote speaking and leadership programs built around Human Intelligence in the Age of AI — equipping organizations across education, insurance, financial services, technology, and corporate America to build cultures where people think instead of just execute.",
      email: "hello@marniblythespeaks.com",
      telephone: "+1-646-413-4872",
      founder: { "@id": "https://marniblythespeaks.com/about#marni-blythe" },
      sameAs: [
        "https://www.linkedin.com/in/marniblythe",
        "https://www.youtube.com/@MarniBlytheSpeaks",
        "https://www.instagram.com/marniblythespeaks",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@marniblythespeaks.com",
          telephone: "+1-646-413-4872",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://marniblythespeaks.com/#website",
      url: "https://marniblythespeaks.com",
      name: "Marni Blythe Speaks",
      description: SITE_DESCRIPTION,
      publisher: { "@id": "https://marniblythespeaks.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-abyss">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-bright focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:uppercase focus:tracking-wider focus:text-white"
        >
          Skip to content
        </a>
        {/* Headliner announcement bar — scarcity signal consistent with the
            FAQ's real "3–6 months out" booking window */}
        <a
          href="/contact"
          data-track="announcement_bar"
          className="block bg-gradient-to-r from-brand via-brand-bright to-brand px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
        >
          Now booking 2026–2027 keynotes
          <span className="mx-2 text-gold" aria-hidden>
            ✦
          </span>
          <span className="text-white/80">Dates fill 3–6 months out</span>
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MotionToggle />
        <Analytics />
        <TrackClicks />
      </body>
    </html>
  );
}
