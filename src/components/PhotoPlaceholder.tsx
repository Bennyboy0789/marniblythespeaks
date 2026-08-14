type Props = {
  label: string;
  className?: string;
};

/** Labeled frame standing in for real photography until assets arrive. */
export default function PhotoPlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-white/25 bg-gradient-to-br from-brand/30 via-stage to-navy/60 p-6 text-center ${className}`}
    >
      <span className="text-sm font-medium tracking-wide text-white/60">
        [PHOTO: {label}]
      </span>
    </div>
  );
}
