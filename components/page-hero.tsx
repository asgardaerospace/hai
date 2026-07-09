import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import type { ImageAsset } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: ImageAsset;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 noise">
      {image ? (
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-center opacity-50"
        />
      ) : null}
      {/* Legibility gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/70"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-[0.16]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-[-6%] h-96 w-96 rounded-full bg-azure-500/20 blur-[110px] animate-aurora"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 75% 30%, transparent 50%, rgba(6,18,37,0.5) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <div className="max-w-3xl">
          <Reveal variant="none">
            <span className="eyebrow text-azure-300">
              <span className="h-px w-8 bg-gradient-to-r from-azure-400 to-transparent" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={170}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/80">
                {description}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
