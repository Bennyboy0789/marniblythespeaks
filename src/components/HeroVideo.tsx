"use client";

import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean };

/**
 * CRO: the hero video costs ~5.5MB — on phones and data-saver connections we
 * skip it entirely and let the poster image (rendered by the parent) carry the
 * hero. Desktop gets the full cinematic loop.
 * TODO: ask the video agency for a ~1MB 720p web loop of hero.webm + an H.264
 * MP4 fallback, then drop both in /public/videos and add the mp4 <source>.
 */
export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const wide = window.matchMedia("(min-width: 768px)").matches;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const saveData = (
        navigator as Navigator & { connection?: NetworkInformation }
      ).connection?.saveData;
      if (wide && !reduced && !saveData) setShowVideo(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!showVideo) return null;

  return (
    <video
      className="hero-video absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    >
      <source src="/videos/hero.webm" type="video/webm" />
    </video>
  );
}
