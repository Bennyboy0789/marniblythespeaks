"use client";

import { useEffect, useState } from "react";

/**
 * WCAG 2.2.2: auto-playing motion lasting >5s (hero video, marquees, shimmer)
 * needs a user-facing pause. Toggles [data-motion-paused] on <html> (pausing
 * every CSS animation via globals.css) and pauses/resumes autoplay videos.
 */
export default function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-motion-paused", paused);
    document.querySelectorAll("video").forEach((v) => {
      if (paused) v.pause();
      else if (v.autoplay) v.play().catch(() => {});
    });
  }, [paused]);

  return (
    <button
      type="button"
      onClick={() => setPaused((p) => !p)}
      aria-pressed={paused}
      aria-label={
        paused ? "Resume background motion" : "Pause background motion"
      }
      title={paused ? "Resume background motion" : "Pause background motion"}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-abyss/80 text-gold backdrop-blur transition-colors hover:border-gold"
    >
      {paused ? (
        <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
          <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
        </svg>
      )}
    </button>
  );
}
