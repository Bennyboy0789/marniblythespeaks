"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while the mobile menu is open; close on Escape
  // and return focus to the toggle so keyboard users aren't stranded.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-abyss/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Marni Blythe <span className="gold-text">Speaks</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-shine rounded-md bg-gradient-to-r from-brand-bright to-violet px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_25px_-5px_rgba(124,58,237,0.8)] transition hover:brightness-110 hover:shadow-[0_0_35px_-5px_rgba(124,58,237,1)]"
          >
            Book Marni
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-abyss px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-base font-medium text-white/90"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 block rounded-md bg-gradient-to-r from-brand-bright to-violet px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-white"
            onClick={() => setOpen(false)}
          >
            Book Marni
          </Link>
        </div>
      )}
    </header>
  );
}
