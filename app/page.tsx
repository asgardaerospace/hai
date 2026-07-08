import Image from "next/image";
import {
  CheckCircle,
  Airplane,
  Engine,
  ShieldCheck,
  Certificate,
  Handshake,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTABand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";
import { siteConfig, pillars, stats } from "@/lib/site";

const introFeatures = [
  "FAA- & EASA-certified MRO partners",
  "Turn-key project management",
  "Global buyer & seller network",
  "Financial, operational & technical depth",
];

const specializations = [
  { name: "Boeing 737-800", type: "Narrow-body airframe", icon: "airframe" as const },
  { name: "Airbus A321", type: "Narrow-body airframe", icon: "airframe" as const },
  { name: "CFM56-7B / -5B", type: "Engine series", icon: "engine" as const },
  { name: "CF6-50C2", type: "Engine series", icon: "engine" as const },
];

const trustItems = [
  { icon: ShieldCheck, label: "FAA-certified partners" },
  { icon: Certificate, label: "EASA-certified partners" },
  { icon: Handshake, label: "Strategic MRO alliances" },
  { icon: GlobeHemisphereWest, label: "Global reach" },
];

export default function HomePage() {
  return (
    <>
      {/* ============================ Hero ============================ */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy-950">
        <Image
          src={images.heroEngineDusk.src}
          alt={images.heroEngineDusk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-950/85 to-navy-900/55"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />

        <Container className="relative pb-16 pt-32 sm:pt-36">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure-300">
                <span className="h-px w-6 bg-azure-400" aria-hidden />
                Global Aircraft &amp; Engine Trading
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.75rem]">
                Pushing the Boundaries of{" "}
                <span className="text-gradient">Aerospace Technology</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/85">
                Hemisphere Aerospace Investments is a global provider of commercial
                aircraft and engine trading assets — from passenger-to-freighter
                conversions to engine MRO, trading, leasing, and structured finance.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/services" size="lg">
                  Explore Our Services
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="ghost-light" arrow={false}>
                  Get in Touch
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-bold text-white">{stat.value}</dt>
                  <dd className="mt-1.5 text-sm leading-snug text-navy-100/70">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ======================= Intro / Trust ======================= */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Collage */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative pb-10 pr-6 sm:pb-12 sm:pr-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(14,44,84,0.5)]">
                <Image
                  src={images.engineShopRow.src}
                  alt={images.engineShopRow.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-0 hidden aspect-[4/3] w-48 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:block lg:w-56">
                <Image
                  src={images.haiOffice.src}
                  alt={images.haiOffice.alt}
                  fill
                  sizes="14rem"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-6 rounded-xl bg-azure-500 px-5 py-4 text-white shadow-lg shadow-azure-500/30">
                <div className="text-3xl font-bold leading-none">2019</div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-wide text-azure-50">
                  Founded · Global reach
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="Trust Hemisphere Aerospace Investments"
              description="Hemisphere Aerospace Investments is a global provider of commercial aircraft and engine trading assets. We focus on the narrow-body Boeing 737-800 and Airbus A321 passenger-to-freighter conversion segments and the CFM56-7/5B and CF6-50C2 engine series."
            />
            <Reveal delay={120}>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
                Our core customers are airlines and delivery services seeking to expand
                their freight capabilities and meet their engine requirements. We deliver
                through strategic alliances with premier FAA- and EASA-certified MRO
                providers, and tailor each project to the client&apos;s exact expectations.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {introFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      weight="fill"
                      className="mt-0.5 size-5 shrink-0 text-azure-500"
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-navy-800">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <ButtonLink href="/about" variant="outline">
                  More About HAI
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ====================== Services overview ===================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="What We Do"
          title="Full-lifecycle aircraft & engine solutions"
          description="From conversions and completions to engine overhaul, trading, and finance — HAI covers the commercial aviation asset lifecycle end to end."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      {/* ==================== Integrated approach ==================== */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-azure-500/15 blur-3xl"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Our Approach"
            title={
              <>
                An integrated model —{" "}
                <span className="text-gradient">financial, operational, technical</span>
              </>
            }
            description="Our integrated approach bridges financial, operational, and technical solutions — giving clients the ability to plan and make fully informed decisions best suited to their objectives."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition-colors duration-300 hover:border-azure-400/40 hover:bg-white/[0.06]">
                  <span className="text-sm font-bold text-azure-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl text-white">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy-100/70">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== Specialization band ==================== */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Focused Expertise"
          title="Specialized where it counts"
          description="We concentrate on the highest-demand narrow-body airframes and the engine families that power global fleets."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specializations.map((item, index) => {
            const Icon = item.icon === "airframe" ? Airplane : Engine;
            return (
              <Reveal key={item.name} delay={index * 70}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-azure-200 hover:shadow-lg">
                  <Icon weight="duotone" className="size-9 text-azure-500" aria-hidden />
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-steel-500">
                    {item.type}
                  </div>
                  <div className="mt-1.5 text-xl font-semibold text-navy-900">
                    {item.name}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications strip */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon weight="duotone" className="size-6 text-azure-600" aria-hidden />
                <span className="text-sm font-semibold text-navy-800">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ========================= CTA band ========================= */}
      <CTABand
        title="Elevate your commercial aviation experience"
        description={`Whether you're expanding freight capacity, sourcing engines, or structuring your next transaction, ${siteConfig.shortName} tailors every project to your exact expectations.`}
        image={images.enginesOutdoorWide}
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
