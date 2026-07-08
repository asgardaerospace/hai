import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Render the section without the inner max-width container (for full-bleed layouts). */
  bare?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  bare = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", className)}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
