import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GlobeHemisphereWest,
  ShieldCheck,
  Target,
  Certificate,
  ArrowRight,
} from "@phosphor-icons/react/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { SpotlightCard } from "@/components/spotlight-card";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2019, Hemisphere Aerospace Investments is a global provider of commercial aircraft and engine trading, portfolio management, and technical services, bridging financial, operational, and technical expertise.",
};

const capabilities = [
  {
    title: "Passenger-to-Freighter Conversions",
    caption: "Narrow-body 737-800 & A321 programs",
    image: images.freighterNight,
    href: "/services#passenger-to-freighter-conversions",
  },
  {
    title: "VVIP Business-Jet Retrofits",
    caption: "Bespoke completions & interiors",
    image: images.vvipCabin,
    href: "/services#vvip-business-jet-retrofits",
  },
  {
    title: "Commercial Jet-Engine MRO",
    caption: "CFM56-7/5B & CF6-50C2 series",
    image: images.turbofanHangar,
    href: "/services#commercial-jet-engine-mro",
  },
];

const values = [
  {
    icon: GlobeHemisphereWest,
    title: "Global reach",
    description:
      "A worldwide network of airlines, delivery services, lessors, investors, and MRO partners.",
  },
  {
    icon: ShieldCheck,
    title: "Certified partners",
    description:
      "Delivery through premier FAA- and EASA-certified airframe and engine MRO providers.",
  },
  {
    icon: Target,
    title: "Tailored solutions",
    description:
      "Every project customized to each client's exact expectations and circumstances.",
  },
  {
    icon: Certificate,
    title: "Proven leadership",
    description:
      "Over a century of combined leadership across aircraft trading, MRO, and finance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HAI"
        title={
          <>
            Bridging financial, operational &amp; technical{" "}
            <span className="text-gradient italic">expertise</span>
          </>
        }
        description="A global provider of commercial aircraft and engine trading assets, transforming and repurposing aircraft to help airlines and delivery services grow."
        image={images.nacelleDetail}
      />

      {/* Our History */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our History"
              title="Founded in 2019, built on decades of expertise"
              description="Hemisphere Aerospace Investments (HAI) is a global provider of commercial aircraft and engine trading, portfolio management, and commercial and technical services."
            />
            <Reveal delay={120}>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
                <p>
                  Our integrated approach bridges financial, operational, and technical
                  solutions. Our focus is to provide clients with solutions that give
                  them the ability to plan and make fully informed decisions best suited
                  to meet their expectations.
                </p>
                <p>
                  We provide our customers with the most cost-effective, reliable, and
                  flexible solutions, tailored to fit their individual circumstances.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={100} className="group">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-float-lg">
              <Image
                src={images.officeDusk.src}
                alt={images.officeDusk.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={160}>
          <dl className="mt-16 grid grid-cols-2 gap-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-8 py-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-4xl font-medium text-navy-900">
                  <Counter value={stat.value} />
                </dt>
                <dd className="mt-2 text-sm leading-snug text-slate-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* Mission */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28 noise">
        <div className="absolute inset-0 bg-blueprint opacity-70" aria-hidden />
        <div
          className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-azure-500/15 blur-3xl animate-aurora"
          aria-hidden
        />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-azure-300">
              <span className="h-px w-6 bg-azure-400" aria-hidden />
              Our Mission
            </span>
            <p className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-[2.3rem] lg:leading-[1.25]">
              To transform and repurpose narrow-body passenger aircraft and provide
              associated engine solutions, continuously focused on the needs of the
              freighter and commercial aircraft &amp; engine markets worldwide.
            </p>
            <p className="mt-6 text-navy-100/70">
              Every project is customized to each client&apos;s exact expectations, and
              we are committed to meeting them.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Signature capabilities */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="What We Deliver"
          title="Signature capabilities"
          description="Three areas where HAI's integrated model creates the most value for clients."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map((cap, index) => (
            <Reveal key={cap.title} delay={index * 80}>
              <Link
                href={cap.href}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-[1.5rem] shadow-float"
              >
                <Image
                  src={cap.image.src}
                  alt={cap.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent"
                  aria-hidden
                />
                <div className="relative p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-azure-300">
                    {cap.caption}
                  </div>
                  <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
                    {cap.title}
                    <ArrowRight
                      weight="bold"
                      className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What sets us apart */}
      <Section className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="Why HAI"
          title="What sets us apart"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70} className="h-full">
              <SpotlightCard className="group h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100 transition-all duration-500 group-hover:bg-azure-500 group-hover:text-white group-hover:ring-azure-500">
                    <value.icon weight="duotone" className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Let's build your next aviation solution"
        description="From freighter conversions to engine solutions and structured finance, HAI tailors every project to your objectives."
        image={images.turbofanHangar}
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Meet the Team", href: "/team" }}
      />
    </>
  );
}
