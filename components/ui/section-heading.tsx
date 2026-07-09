import { cn } from "@/lib/cn";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-azure-300" : "text-azure-600",
          )}
        >
          <span
            className={cn("h-px w-6", tone === "dark" ? "bg-azure-400" : "bg-azure-500")}
            aria-hidden
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "mt-4 font-display text-[2rem] font-medium leading-[1.12] sm:text-4xl lg:text-[2.7rem]",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-navy-100/80" : "text-slate-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
