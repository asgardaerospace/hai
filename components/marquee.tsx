"use client";

import { cn } from "@/lib/cn";

/**
 * Seamless infinite marquee. Duplicates its children so the -50% translate loops
 * with no visible seam. Pauses on hover; static under prefers-reduced-motion.
 */
export function Marquee({
  children,
  className,
  speed = "normal",
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "normal" | "slow";
  reverse?: boolean;
}) {
  return (
    <div className={cn("group/marquee mask-edges-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center [animation-play-state:running] group-hover/marquee:[animation-play-state:paused]",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
        )}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
