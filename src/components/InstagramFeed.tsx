"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Live Instagram feed via Behold (https://behold.so):
// 1. Sign in to Behold with any account, add a feed, and connect
//    @marniblythespeaks when Instagram asks for authorization.
// 2. Choose "JSON feed" and copy the feed URL (https://feed.behold.so/...).
// 3. Set NEXT_PUBLIC_IG_FEED_URL to that URL (Vercel env var or .env.local).
// Until then, this component renders placeholder tiles linking to the profile.
const FEED_URL = process.env.NEXT_PUBLIC_IG_FEED_URL ?? "";
const PROFILE_URL = "https://www.instagram.com/marniblythespeaks";
const POST_COUNT = 6;

// Interim grid shown until the live feed is connected: real photos of Marni
// (no faked IG chrome or metrics), every tile linking to her actual profile.
// The live Behold feed replaces these automatically once the env var is set.
const curated = [
  { src: "/images/marni-stage.png", alt: "Marni on stage before a packed ballroom" },
  { src: "/images/marni-portrait-2.jpg", alt: "Marni laughing in a navy suit" },
  { src: "/images/marni-conference.jpg", alt: "Marni delivering a conference keynote" },
  { src: "/images/marni-event-2.jpg", alt: "Marni with conference attendees" },
  { src: "/images/marni-portrait-3.jpg", alt: "Marni holding Culture Catalyst" },
  { src: "/images/marni-event-3.jpg", alt: "Marni with an event group" },
];

type Post = {
  id: string;
  permalink: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  mediaType?: string;
  prunedCaption?: string;
  caption?: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!FEED_URL) return;
    let cancelled = false;
    fetch(FEED_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`${r.status}`))))
      .then((data) => {
        // Behold returns either an array of posts or { posts: [...] }
        const list: Post[] = Array.isArray(data) ? data : (data.posts ?? []);
        if (!cancelled) setPosts(list.slice(0, POST_COUNT));
      })
      .catch(() => {
        // Silently fall back to placeholders — the profile link still works.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts.length === 0) {
    return (
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {curated.map((c) => (
          <a
            key={c.src}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xl bg-white/5"
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-70"
            />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg width="26" height="26" viewBox="0 0 24 24" className="fill-white drop-shadow">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </span>
            <span className="sr-only"> (opens Instagram in new tab)</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {posts.map((p) => {
        const src =
          p.mediaType === "VIDEO" ? (p.thumbnailUrl ?? p.mediaUrl) : p.mediaUrl;
        const alt =
          p.prunedCaption?.slice(0, 100) ||
          p.caption?.slice(0, 100) ||
          "Instagram post from @marniblythespeaks";
        return (
          <a
            key={p.id}
            href={p.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xl bg-white/5"
          >
            {/* Feed media comes from Instagram's CDN with short-lived URLs, so
                next/image optimization is skipped on purpose. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            {p.mediaType === "VIDEO" && (
              <span className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" className="fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
