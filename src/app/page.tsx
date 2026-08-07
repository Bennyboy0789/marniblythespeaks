export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      {/* Decorative top line */}
      <div className="mb-12 h-px w-16 bg-[#c9a96e]" />

      {/* Headline */}
      <h1 className="mb-4 text-center font-sans text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Marnibly The Speaks
      </h1>

      {/* Tagline */}
      <p className="mb-3 max-w-lg text-center text-lg leading-relaxed text-zinc-400 sm:text-xl">
        Professional Speaking &amp; Presentation Services
      </p>

      {/* Coming Soon Badge */}
      <div className="mb-16 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2">
        <span className="h-2 w-2 rounded-full bg-[#c9a96e] animate-pulse" />
        <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Coming Soon
        </span>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center backdrop-blur">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a96e]">
          Get in Touch
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
          Interested in booking or learning more? Reach out directly and
          we&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="mailto:hello@marniblythespeaks.com"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#c9a96e] hover:bg-zinc-800 hover:text-[#c9a96e]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          hello@marniblythespeaks.com
        </a>
      </div>

      {/* Footer */}
      <p className="mt-16 text-xs text-zinc-700">
        &copy; {new Date().getFullYear()} Marnibly The Speaks. All rights
        reserved.
      </p>
    </div>
  );
}
