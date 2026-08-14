"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/** Award-show number reveal: counts up once when scrolled into view. */
export default function CountUp({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    const tick = (t: number) => {
      if (reduced) {
        setN(value);
        return;
      }
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
