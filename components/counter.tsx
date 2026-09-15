"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * `useLayoutEffect` on the client, `useEffect` on the server (where it is a
 * no-op and React would otherwise warn).
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Counts a numeric value up from zero the first time it scrolls into view.
 * Values may carry a prefix/suffix (e.g. "100+", "$2.4B", "2019"); the numeric
 * core animates while the affixes stay put. Non-numeric values ("Global") are
 * rendered verbatim with no animation. Respects prefers-reduced-motion.
 *
 * SSR CONTRACT: the server-rendered HTML always contains the real value, never
 * a placeholder zero. This matters well beyond aesthetics — these figures are
 * the site's headline credibility signals, and most AI crawlers (GPTBot,
 * ClaudeBot, PerplexityBot) read the served HTML without executing JavaScript.
 * Rendering "0+" where the page means "100+" hands them the wrong fact.
 *
 * The reset to zero therefore happens in a layout effect after hydration, so it
 * lands before the browser paints and no flash of the final value is visible.
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
  // Seeded with the true value so it is present in the server-rendered markup.
  const [display, setDisplay] = useState<string>(value);

  // Memoized: `parsed` is an effect dependency, and a fresh object each render
  // would re-run the effects on every setDisplay call.
  const parsed = useMemo(() => parseValue(value), [value]);

  useIsomorphicLayoutEffect(() => {
    if (!parsed) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    // Wind back to zero before first paint, ready for the count-up.
    setDisplay(parsed.format(0));
  }, [parsed]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    // Nothing to do: `display` is already seeded with the true value, and the
    // layout effect above leaves it alone under reduced motion.
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let start = 0;

    // Safety net. The value is wound back to zero before paint so the count-up
    // has somewhere to start from, which makes the real figure dependent on
    // rAF and IntersectionObserver actually firing. Both can be throttled or
    // suppressed — a background tab, an embedded/preview browser, an aggressive
    // power-saving mode. If the animation has not begun by the time this fires,
    // snap to the true value rather than leaving a headline credibility figure
    // reading zero.
    let animating = false;
    const failsafe = window.setTimeout(() => {
      if (!animating) setDisplay(value);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animating = true;
        window.clearTimeout(failsafe);

        const tick = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          // easeOutExpo
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setDisplay(p === 1 ? value : parsed.format(parsed.target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      cancelAnimationFrame(raf);
    };
  }, [value, duration, parsed]);

  return (
    <span ref={ref} className={cn("tabular", className)}>
      {display}
    </span>
  );
}

type Parsed = { target: number; format: (n: number) => string };

/** Split "100+" into its affixes and numeric core. Returns null if non-numeric. */
function parseValue(value: string): Parsed | null {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) return null;

  const [, prefix, numRaw, suffix] = match;
  const decimals = (numRaw.split(".")[1] || "").length;
  const grouped = numRaw.includes(",");
  const target = parseFloat(numRaw.replace(/,/g, ""));

  return {
    target,
    format: (n: number) => {
      const fixed = n.toFixed(decimals);
      const withGroups = grouped
        ? Number(fixed).toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
      return `${prefix}${withGroups}${suffix}`;
    },
  };
}
