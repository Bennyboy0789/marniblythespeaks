import Image from "next/image";
import Reveal from "@/components/Reveal";

// Trimmed logo files (no padding) with their real dimensions — the size class
// is chosen by aspect ratio so square marks and wide wordmarks sit at the
// same optical weight in the row.
const logos = [
  { src: "/images/media/NBC-Logo-5gold.png", alt: "NBC", w: 288, h: 268 },
  { src: "/images/media/abc-broadcast-logo-gold.png", alt: "ABC", w: 266, h: 268 },
  { src: "/images/media/WRAL-Logo-gold.png", alt: "WRAL", w: 271, h: 108 },
  { src: "/images/media/BostonHerald2-logo-gold.png", alt: "Boston Herald", w: 280, h: 48 },
  { src: "/images/media/NewsNet-logo-gold.png", alt: "NewsNet", w: 288, h: 142 },
  { src: "/images/media/ValleyPress-logo-gold.png", alt: "Valley Press", w: 280, h: 58 },
];

function sizeClass(w: number, h: number) {
  const aspect = w / h;
  if (aspect < 1.3) return "max-h-12"; // square marks (NBC, ABC)
  if (aspect < 3) return "max-h-9"; // mid wordmarks (WRAL, NewsNet)
  return "max-h-6"; // wide banners (Boston Herald, Valley Press)
}

export default function FeaturedBy({
  tone = "purple",
}: {
  tone?: "purple" | "dark";
}) {
  return (
    <section
      className={tone === "purple" ? "section-purple" : "section-dark border-t border-white/5"}
    >
      <Reveal className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-center justify-center gap-5">
          <span aria-hidden className="hairline-gold w-16 sm:w-24" />
          <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Featured By
          </p>
          <span aria-hidden className="hairline-gold w-16 sm:w-24" />
        </div>
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10">
          {logos.map((l) => (
            <li
              key={l.alt}
              className="flex h-14 w-36 items-center justify-center"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                className={`w-auto max-w-full object-contain opacity-85 transition-opacity hover:opacity-100 ${sizeClass(l.w, l.h)}`}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
