import { Link } from "next-view-transitions";
import { programs, signatureKeynote } from "@/lib/programs";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marniblythe",
    icon: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MarniBlytheSpeaks",
    icon: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marniblythespeaks",
    icon: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Marni" },
  { href: "/speaking", label: "Speaking & Programs" },
  { href: "/contact", label: "Book Marni" },
  { href: "/contact", label: "Request the Speaker Packet" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Useful Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Speaking Topics
          </p>
          <ul className="mt-4 space-y-2.5">
            {[signatureKeynote, ...programs].map((p) => (
              <li key={p.title}>
                <Link
                  href="/speaking"
                  className="text-sm text-white/75 transition-colors hover:text-gold"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Contact
          </p>
          <a
            href="mailto:hello@marniblythespeaks.com"
            className="mt-4 block text-sm text-white/75 transition-colors hover:text-gold"
          >
            hello@marniblythespeaks.com
          </a>
          <a
            href="tel:+16464134872"
            className="mt-2 block text-sm text-white/75 transition-colors hover:text-gold"
          >
            646.413.4872
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Looking for fractional COO/CMO support?{" "}
            <a
              href="https://fullpocketcoaching.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 underline underline-offset-4 hover:text-gold"
            >
              Full Pocket Coaching
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Social
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in new tab)`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-bright"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="fill-white">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-6 font-serif text-lg font-semibold">
            Marni Blythe <span className="text-gold">Speaks</span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs tracking-wide text-white/60">
        Copyright {new Date().getFullYear()} Marni Blythe Speaks. All rights
        reserved.
      </div>
    </footer>
  );
}
