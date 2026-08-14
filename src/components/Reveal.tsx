"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds to wait before animating — use index * 0.08 for staggered grids */
  delay?: number;
  /** Vertical rise distance in px */
  y?: number;
  className?: string;
};

/**
 * Scroll-triggered entrance: fades and rises once when ~20% enters the
 * viewport. Falls back to fade-only when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
