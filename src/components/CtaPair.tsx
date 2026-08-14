import { Link } from "next-view-transitions";

type Props = {
  /** "dark" for dark section backgrounds, "light" for the cream relief section */
  on?: "dark" | "light";
  className?: string;
};

export default function CtaPair({ on = "dark", className = "" }: Props) {
  const outline =
    on === "dark"
      ? "border-gold/60 text-gold hover:bg-gold hover:text-abyss hover:shadow-[0_0_35px_-5px_rgba(233,196,106,0.6)]"
      : "border-navy/40 text-navy hover:border-brand hover:text-brand";

  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <Link
        href="/contact"
        data-track="cta_book_marni"
        className="btn-shine rounded-md bg-gradient-to-r from-brand-bright via-violet to-brand-bright bg-[length:200%_auto] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_35px_-5px_rgba(124,58,237,0.7)] transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_0_50px_-5px_rgba(124,58,237,0.9)]"
      >
        Book Marni
      </Link>
      {/* CRO: packet PDF is a placeholder — route requests through contact
          until the real one-sheet ships, then restore /speaker-packet.pdf */}
      <Link
        href="/contact"
        data-track="cta_packet_request"
        className={`rounded-md border-2 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] transition-colors ${outline}`}
      >
        Request Speaker Packet
      </Link>
    </div>
  );
}
