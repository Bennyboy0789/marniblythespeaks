"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
  className?: string;
};

/**
 * Click-to-play YouTube facade: shows the thumbnail and only loads the
 * (~1MB) YouTube player after the visitor presses play. Never autoplays on
 * its own (site rule), and uses youtube-nocookie until clicked.
 */
export default function YouTubeEmbed({ id, title, className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl shadow-brand/30 ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-track="reel_play"
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- remote
              YouTube thumbnail; next/image would need a remotePatterns entry
              for one decorative poster */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand-bright to-violet shadow-[0_0_45px_-5px_rgba(124,58,237,0.9)] transition-transform group-hover:scale-110">
            <svg width="28" height="28" viewBox="0 0 24 24" className="ml-1 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="sr-only">Play video: {title}</span>
        </button>
      )}
    </div>
  );
}
