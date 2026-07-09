"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Counts a numeric value up from zero the first time it scrolls into view.
 * Values may carry a prefix/suffix (e.g. "100+", "$2.4B", "2019"); the numeric
 * core animates while the affixes stay put. Non-numeric values ("Global") are
 * rendered verbatim with no animation. Respects prefers-reduced-motion.
 */
export function Counter({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(() => initialFor(value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const [, prefix, numRaw, suffix] = match;
    const decimals = (numRaw.split(".")[1] || "").length;
    const target = parseFloat(numRaw.replace(/,/g, ""));
    const grouped = numRaw.includes(",");

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      const withGroups = grouped
        ? Number(fixed).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
      return `${prefix}${withGroups}${suffix}`;
    };

    if (reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(format(target));
      return;
    }

    let raf = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const tick = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          // easeOutExpo
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setDisplay(format(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      {display}
    </span>
  );
}

function initialFor(value: string) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) return value;
  const [, prefix, numRaw, suffix] = match;
  const decimals = (numRaw.split(".")[1] || "").length;
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
