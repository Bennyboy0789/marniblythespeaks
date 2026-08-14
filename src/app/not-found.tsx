import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <section className="stage-glow text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
        <p className="gradient-text font-serif text-8xl font-semibold md:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
          This page left the stage
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-white/75">
          The page you&apos;re looking for doesn&apos;t exist — or it moved on
          to bigger rooms. Here&apos;s where to go instead.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-gradient-to-r from-brand-bright to-violet px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition hover:brightness-110"
          >
            Book Marni
          </Link>
          <Link
            href="/speaking"
            className="rounded-md border-2 border-gold/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-abyss"
          >
            See the Programs
          </Link>
          <Link
            href="/"
            className="rounded-md border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
