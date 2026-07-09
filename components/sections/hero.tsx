import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Magnetic } from "@/components/magnetic";
import { HeroVideo } from "@/components/hero-video";
import { images } from "@/lib/images";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy-950 noise">
      {/* LCP poster image */}
      <Image
        src={images.heroCinematic.src}
        alt={images.heroCinematic.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Cinematic loop fades in over the poster */}
      <HeroVideo src="/videos/hero-loop.mp4" webmSrc="/videos/hero-loop.webm" />

      {/* Legibility + mood overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-navy-950/60"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-[0.18]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-azure-500/20 blur-[120px] animate-aurora"
        aria-hidden
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 70% 40%, transparent 45%, rgba(6,18,37,0.55) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 pb-20 pt-32 sm:pt-36">
        <div className="max-w-3xl">
          <Reveal variant="none">
            <span className="eyebrow text-azure-300">
              <span className="h-px w-8 bg-gradient-to-r from-azure-400 to-transparent" aria-hidden />
              Global Aircraft &amp; Engine Trading
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-[2.7rem] font-medium leading-[1.02] text-white sm:text-6xl lg:text-[4.3rem]">
              Pushing the boundaries of{" "}
              <span className="text-gradient italic">aerospace technology</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100/80">
              Hemisphere Aerospace Investments is a global provider of commercial
              aircraft and engine trading assets, from passenger-to-freighter
              conversions to engine MRO, trading, leasing, and structured finance.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href="/services" size="lg">
                  Explore Our Services
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href="/contact" size="lg" variant="ghost-light" arrow={false}>
                  Get in Touch
                </ButtonLink>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="relative">
                  <dt className="font-display text-3xl font-medium text-white sm:text-4xl">
                    <Counter value={stat.value} />
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-navy-100/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden justify-center sm:flex"
        aria-hidden
      >
        <span className="flex flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-navy-100/50">
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 top-0 h-4 w-px animate-[scrollcue_2s_ease-in-out_infinite] bg-azure-300" />
          </span>
        </span>
      </div>
    </section>
  );
}
