import Image from "next/image";
import { Container } from "@/components/ui/container";
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
    <section className="relative isolate overflow-hidden bg-navy-900">
      {image ? (
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-900"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-8%] h-96 w-96 rounded-full bg-azure-500/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure-300">
            <span className="h-px w-6 bg-azure-400" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/80">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
