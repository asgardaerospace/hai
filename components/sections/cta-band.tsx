import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import type { ImageAsset } from "@/lib/images";

type CTAAction = { label: string; href: string };

export function CTABand({
  title,
  description,
  image,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  image: ImageAsset;
  primary: CTAAction;
  secondary?: CTAAction;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/70"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-[1.12] text-white sm:text-4xl lg:text-[2.65rem]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100/80">{description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} size="lg" variant="ghost-light">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
