"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * A card whose surface carries a soft azure glow that tracks the cursor.
 * The glow itself is drawn by the `.spotlight` utility (globals.css); this
 * component only feeds it live --mx/--my coordinates. Purely decorative and
 * pointer-driven, so it degrades to a plain card on touch / no-hover devices.
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      onMouseMove={onMove}
      className={cn("spotlight", className)}
    >
      {children}
    </Tag>
  );
}
