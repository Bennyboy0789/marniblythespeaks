"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Fires a Vercel Analytics event for any click on an element carrying a
 * data-track attribute (value = event name). One listener, zero per-CTA
 * client components.
 */
export default function TrackClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-track]"
      );
      const name = el?.dataset.track;
      if (name) track(name);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
