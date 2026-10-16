"use client";

import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean };

/**
 * The FPC stage footage Marni asked for (Oct 14 2026: "the old video from the
 * other website, with the movement") until her new video arrives.
 * H.264 MP4 so it plays everywhere, including Safari and iPhone (the old 4K
 * VP9 WebM never played there, so she only ever saw the still). Phones get a
 * ~1.4MB 720p cut, desktop a ~4MB 1080p one; data-saver visitors keep the
 * poster image the parent renders.
 * Plays for reduced-motion visitors too (Marni, Oct 16 2026, only saw the
 * still on her computer): MotionToggle in the layout gives everyone a pause
 * button, and the Ken Burns zoom on top stays off for them via globals.css.
 */
export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const saveData = (
        navigator as Navigator & { connection?: NetworkInformation }
      ).connection?.saveData;
      if (saveData) return;
      const wide = window.matchMedia("(min-width: 768px)").matches;
      setSrc(wide ? "/videos/hero-1080.mp4" : "/videos/hero-720.mp4");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!src) return null;

  return (
    <video
      key={src}
      className="hero-video absolute inset-0 h-full w-full object-cover object-[65%_25%]"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
