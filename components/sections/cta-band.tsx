import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { AmbientVideo } from "@/components/ambient-video";
import type { ImageAsset } from "@/lib/images";

type CTAAction = { label: string; href: string };

export function CTABand({
  title,
  description,
  image,
  video,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  image: ImageAsset;
  video?: { mp4: string; webm?: string };
  primary: CTAAction;
  secondary?: CTAAction;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 noise">
      {/* Dimmed media layer (poster + optional lazy video) */}
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <Image
          src={image.src}
          alt=""
          fill
          sizes="100vw"
          className="kenburns object-cover object-center"
        />
        {video ? <AmbientVideo mp4={video.mp4} webm={video.webm} /> : null}
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-azure-500/15 blur-[110px] animate-aurora"
        aria-hidden
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" aria-hidden />
          <h2 className="font-display text-3xl font-medium leading-[1.1] text-white sm:text-4xl lg:text-[2.9rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-100/80">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <ButtonLink href={primary.href} size="lg">
                {primary.label}
              </ButtonLink>
            </Magnetic>
            {secondary ? (
              <Magnetic>
                <ButtonLink href={secondary.href} size="lg" variant="ghost-light">
                  {secondary.label}
                </ButtonLink>
              </Magnetic>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
