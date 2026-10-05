import type { Testimonial } from "@/lib/testimonials";

type Props = {
  t: Testimonial;
  /** "dark" = card-lux glass on dark sections; "light" = the cream relief section */
  on?: "dark" | "light";
  /** render the verbatim excerpt (when one exists) instead of the full quote */
  short?: boolean;
  className?: string;
};

export default function TestimonialCard({
  t,
  on = "dark",
  short = false,
  className = "",
}: Props) {
  const text = short && t.excerpt ? t.excerpt : t.quote;
  const dark = on === "dark";

  return (
    <figure
      className={`flex h-full flex-col p-7 ${
        dark
          ? "card-lux text-white"
          : "rounded-xl border border-navy/10 bg-white/80 text-ink shadow-[0_20px_50px_-30px_rgba(29,53,87,0.45)]"
      } ${className}`}
    >
      <span aria-hidden className="gold-text font-serif text-5xl leading-none">
        &ldquo;
      </span>
      <blockquote
        className={`mt-2 flex-1 space-y-4 font-serif text-lg italic leading-relaxed ${
          dark ? "text-white/85" : "text-ink/90"
        }`}
      >
        {text.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      <figcaption className="mt-6">
        <span
          className={`block text-sm font-bold uppercase tracking-[0.15em] ${
            dark ? "text-gold" : "text-navy"
          }`}
        >
          {t.attribution}
        </span>
        {t.role && (
          <span
            className={`mt-1 block text-sm ${dark ? "text-white/60" : "text-ink/60"}`}
          >
            {t.role}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
