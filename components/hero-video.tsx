"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Cinematic hero loop that fades in on top of the priority poster image once it
 * can play. The poster <Image> underneath owns the LCP, so the page never waits
 * on the video. Silent, looping, decorative — and fully skipped under
 * prefers-reduced-motion (the still image simply remains).
 */
export function HeroVideo({
  src,
  webmSrc,
  className,
}: {
  src: string;
  webmSrc?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // Some browsers need an explicit play() after mount.
    el.play?.().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ease-out motion-reduce:hidden",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      poster={undefined}
      aria-hidden
      onCanPlay={() => setReady(true)}
    >
      {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  );
}
