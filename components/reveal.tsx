"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealVariant = "up" | "scale" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Motion flavor. Defaults to a fade-and-rise. */
  variant?: RevealVariant;
  /** Render as a different element (e.g. "li", "span"). */
  as?: "div" | "li" | "span";
};

const variantClass: Record<RevealVariant, string> = {
  up: "",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
  none: "reveal-none",
};

/**
 * Reveals its children with a subtle fade-rise-and-deblur the first time they
 * scroll into view. Respects prefers-reduced-motion (handled in globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  // Narrow the polymorphic tag to one intrinsic element for the type-checker;
  // the actual tag string is preserved at runtime.
  const Tag = as as "div";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", variantClass[variant], visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
