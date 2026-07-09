"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * A decorative background video that only loads and plays once it scrolls near
 * the viewport, fading in over whatever poster sits beneath it. Keeps pages
 * light (nothing downloads until needed) and fully skips under
 * prefers-reduced-motion. Meant to be layered inside a dimmed media wrapper.
 */
export function AmbientVideo({
  mp4,
  webm,
  className,
}: {
  mp4: string;
  webm?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (active && el) {
      el.load();
      el.play?.().catch(() => {});
    }
  }, [active]);

  return (
    <video
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1200ms] ease-out motion-reduce:hidden",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      onCanPlay={() => setReady(true)}
    >
      {active && webm ? <source src={webm} type="video/webm" /> : null}
      {active ? <source src={mp4} type="video/mp4" /> : null}
    </video>
  );
}
