import { cn } from "@/lib/cn";

type Tone = "onLight" | "onDark";

const palette: Record<
  Tone,
  {
    primary: string;
    secondary: string;
    word: string;
    accent: string;
    rule: string;
    tagline: string;
  }
> = {
  onLight: {
    primary: "var(--color-navy-800)",
    secondary: "var(--color-steel-500)",
    word: "text-navy-900",
    accent: "text-steel-600",
    rule: "bg-navy-200",
    tagline: "text-navy-500",
  },
  onDark: {
    primary: "#ffffff",
    secondary: "var(--color-steel-400)",
    word: "text-white",
    accent: "text-steel-300",
    rule: "bg-white/30",
    tagline: "text-steel-300",
  },
};

/**
 * HAI wordmark: a vector recreation of the twin-peak monogram + lockup.
 * Themeable for light and dark backgrounds and crisp at any size.
 */
export function Logo({
  tone = "onLight",
  showTagline = true,
  className,
}: {
  tone?: Tone;
  showTagline?: boolean;
  className?: string;
}) {
  const c = palette[tone];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 120 96"
        className="h-9 w-auto shrink-0"
        aria-hidden
        focusable="false"
      >
        <polygon points="56,8 6,88 30,88 56,44" fill={c.primary} />
        <polygon points="64,8 114,88 90,88 64,44" fill={c.secondary} />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-[0.28em] text-[0.95rem] font-bold tracking-tight sm:text-base">
          <span className={c.word}>HEMISPHERE</span>
          <span className={cn("font-medium", c.accent)}>AEROSPACE</span>
        </span>
        {showTagline ? (
          <span className="mt-[0.4rem] flex items-center gap-1.5">
            <span className={cn("h-px w-3.5", c.rule)} aria-hidden />
            <span
              className={cn(
                "text-[0.5rem] font-semibold uppercase tracking-[0.34em]",
                c.tagline,
              )}
            >
              Investments
            </span>
          </span>
        ) : null}
      </span>
    </span>
  );
}
