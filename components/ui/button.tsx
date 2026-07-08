import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";

type Variant = "primary" | "navy" | "outline" | "white" | "ghost-light";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-azure-500 text-white shadow-lg shadow-azure-500/25 hover:bg-azure-600 hover:shadow-azure-600/30 hover:-translate-y-0.5",
  navy: "bg-navy-800 text-white hover:bg-navy-900 hover:-translate-y-0.5",
  outline:
    "border border-navy-200 bg-white text-navy-800 hover:border-azure-400 hover:text-azure-600",
  white: "bg-white text-navy-900 shadow-lg shadow-navy-950/10 hover:bg-navy-50 hover:-translate-y-0.5",
  "ghost-light":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

function Arrow() {
  return (
    <ArrowRight
      weight="bold"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden
    />
  );
}

type ButtonLinkProps = BaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** A link styled as a button. Uses next/link for internal routes. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {arrow ? <Arrow /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
    </Link>
  );
}

/** A real <button> for form submits and JS actions. */
export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}
