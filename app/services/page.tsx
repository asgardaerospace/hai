import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { images, serviceImages } from "@/lib/images";
import { services } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HAI's full-lifecycle services: passenger-to-freighter conversions, VVIP retrofits, commercial jet-engine MRO, aircraft trading & leasing, portfolio & technical services, and structured finance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Full-lifecycle aircraft &amp; engine{" "}
            <span className="text-gradient italic">solutions</span>
          </>
        }
        description="From conversions and completions to engine overhaul, trading, and finance: every project delivered through certified partners and tailored to your objectives."
        image={images.turbofanHangar}
      />

      {/* Index / jump-to */}
      <Section className="pb-0 sm:pb-0 lg:pb-0">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-azure-300 hover:text-azure-600 hover:shadow-sm"
              >
                <ServiceIcon
                  icon={service.icon}
                  className="size-4 text-azure-500 transition-transform duration-300 group-hover:scale-110"
                  weight="bold"
                />
                {service.title}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-slate-500">
            Backed by four decades of global aerospace experience across six continents.{" "}
            <Link
              href="/global-experience"
              className="font-semibold text-azure-600 transition-colors hover:text-azure-700"
            >
              Explore HAI&apos;s global experience
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* Detail sections */}
      {services.map((service, index) => {
        const image = serviceImages[service.slug];
        const reversed = index % 2 === 1;
        return (
          <Section
            key={service.slug}
            id={service.slug}
            className={cn("scroll-mt-24", reversed && "bg-slate-50")}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal
                variant={reversed ? "right" : "left"}
                className={cn("group", reversed && "lg:order-2")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-float-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-xl bg-white/95 text-azure-600 shadow-lg backdrop-blur">
                    <ServiceIcon icon={service.icon} className="size-6" weight="duotone" />
                  </div>
                </div>
              </Reveal>

              <div className={cn(reversed && "lg:order-1")}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure-600">
                  <span className="h-px w-6 bg-azure-500" aria-hidden />
                  Service {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        weight="fill"
                        className="mt-0.5 size-5 shrink-0 text-azure-500"
                        aria-hidden
                      />
                      <span className="text-sm font-medium text-navy-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/contact" variant="outline">
                    Discuss this service
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <CTABand
        title="Ready to move your project forward?"
        description="Tell us what you're planning (a conversion program, an engine requirement, or a transaction) and we'll tailor an approach."
        image={images.widebodyDusk}
        video={{ mp4: "/videos/cta-loop.mp4", webm: "/videos/cta-loop.webm" }}
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
