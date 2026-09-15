import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle,
  Airplane,
  Engine,
  ShieldCheck,
  Certificate,
  Handshake,
  GlobeHemisphereWest,
  Quotes,
} from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { GlobalReach } from "@/components/sections/global-reach";
import { CTABand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";
import { siteConfig, pillars, positioning } from "@/lib/site";
import {
  organizationLd,
  organizationDescription,
  webSiteLd,
  webPageLd,
  faqLd,
  ld,
} from "@/lib/schema";

const introFeatures = [
  "FAA- & EASA-certified MRO partners",
  "Turn-key project management",
  "Global buyer & seller network",
  "Financial, operational & technical depth",
];

const specializations = [
  { name: "Boeing", type: "Narrow- & widebody airframes", icon: "airframe" as const },
  { name: "Airbus", type: "Narrow- & widebody airframes", icon: "airframe" as const },
  { name: "CFM56-7B / -5B", type: "Engine series", icon: "engine" as const },
  { name: "CF6-50C2 / -80C2", type: "Engine series", icon: "engine" as const },
  { name: "GE90", type: "Engine series", icon: "engine" as const },
  { name: "Trent 700 / 800", type: "Engine series", icon: "engine" as const },
];

const trustItems = [
  { icon: ShieldCheck, label: "FAA-certified partners" },
  { icon: Certificate, label: "EASA-certified partners" },
  { icon: Handshake, label: "Strategic MRO alliances" },
  { icon: GlobeHemisphereWest, label: "Global reach" },
];


/* ------------------------------------------------------------------ */
/* SEO — the homepage is the principal entity-definition page          */
/* ------------------------------------------------------------------ */

const PAGE_TITLE = `${siteConfig.name}: Commercial Aircraft & Engine Trading`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: PAGE_TITLE,
    description: siteConfig.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: siteConfig.description,
  },
};

/**
 * Answers to the questions search and AI systems ask about this company.
 * This array is the single source of truth for both the visible FAQ section
 * and the FAQPage structured data, so the two can never drift apart.
 *
 * Every answer here restates only what the site already publishes elsewhere.
 * No new capability, scope, or relationship claim is introduced.
 */
const homeFaqs = [
  {
    q: `What is ${siteConfig.name}?`,
    a: `${siteConfig.name} is a commercial aerospace company founded in ${siteConfig.foundedYear} and based in ${siteConfig.address.city}, ${siteConfig.address.state}. The company trades, converts, leases, finances, and technically manages commercial aircraft and engines for airlines, delivery services, lessors, and investors.`,
  },
  {
    q: `Does ${siteConfig.name} perform conversions and overhauls itself?`,
    a: `No. ${siteConfig.name} sources the assets, structures the capital, and manages the programs. The physical work — passenger-to-freighter conversions, VVIP completions, and engine overhaul — is executed through strategic alliances with premier FAA- and EASA-certified partners, under HAI project management.`,
  },
  {
    q: `Who does ${siteConfig.name} work with?`,
    a: "Airlines and delivery services expanding freight capability, lessors and investors moving aircraft and engine assets, and financial institutions requiring technical oversight of aviation portfolios. Aircraft owners, operators, and counterparties can submit an opportunity through the contact page.",
  },
  {
    q: `How do I submit an aircraft or engine opportunity to ${siteConfig.shortName}?`,
    a: `Contact ${siteConfig.name} at ${siteConfig.email} or through the contact page. Include the aircraft or engine type, asset location, general operational or maintenance status, transaction objective, and preferred timeline when available.`,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(webSiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ld(
            webPageLd({
              path: "/",
              name: PAGE_TITLE,
              // The scope-neutral Organization description, not
              // `siteConfig.description` — the latter names specific airframes
              // and engine series that are pending management verification and
              // must not be asserted in structured data until confirmed.
              description: organizationDescription,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(faqLd(homeFaqs)) }}
      />

      <Hero />
      <TrustMarquee />

      {/* ======================= Intro / Who we are ======================= */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Layered image composition */}
          <div className="order-2 lg:order-1">
            <Reveal variant="left" className="relative pb-12 pr-6 sm:pb-10 sm:pr-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-float-lg">
                <Image
                  src={images.mroFacility.src}
                  alt={images.mroFacility.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"
                  aria-hidden
                />
              </div>

              {/* Inset office image */}
              <div className="absolute -bottom-2 right-0 hidden aspect-[4/3] w-52 overflow-hidden rounded-2xl border-[5px] border-white shadow-float sm:block lg:w-60">
                <Image
                  src={images.officeDusk.src}
                  alt={images.officeDusk.alt}
                  fill
                  sizes="15rem"
                  className="object-cover"
                />
              </div>

              {/* Est. 2018 badge */}
              <div className="absolute left-0 top-6 rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-float ring-1 ring-white/10">
                <div className="font-display text-3xl font-medium leading-none">2018</div>
                <div className="mt-2 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-300">
                  <span className="h-px w-3 bg-gold-400" aria-hidden />
                  Founded
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  One partner across the{" "}
                  <span className="text-navy-500 italic font-display">entire</span> asset
                  lifecycle
                </>
              }
              description="Hemisphere Aerospace Investments is a global provider of commercial aircraft and engine trading assets. We focus on Boeing and Airbus narrow- and widebody passenger-to-freighter segments and the CFM56, CF6, GE90, and Trent engine series."
            />
            <Reveal delay={120}>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
                Our core customers are airlines and delivery services seeking to expand
                their freight capabilities and meet their engine requirements, delivered
                through strategic alliances with premier FAA- and EASA-certified MRO
                providers, and tailored to each client&apos;s exact expectations.
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
          title={
            <>
              Full-lifecycle aircraft &amp; engine{" "}
              <span className="text-azure-600 italic font-display">solutions</span>
            </>
          }
          description="From conversions and completions to engine overhaul, trading, and finance: HAI covers the commercial aviation asset lifecycle end to end."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      {/* ==================== Integrated approach (dark) ==================== */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28 noise">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-azure-500/15 blur-3xl animate-aurora"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Our Approach"
            title={
              <>
                An integrated model:{" "}
                <span className="text-gradient italic font-display">
                  financial, operational, technical
                </span>
              </>
            }
            description="Our integrated approach bridges financial, operational, and technical solutions, giving clients the ability to plan and make fully informed decisions best suited to their objectives."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90} className="h-full">
                <SpotlightCard className="hairline-gradient group h-full rounded-2xl">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/[0.06]">
                    <span className="font-display text-5xl font-medium text-azure-400/90">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-xl text-white">{pillar.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy-100/70">
                      {pillar.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== Process / How we deliver ==================== */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="How We Deliver"
          title="A disciplined path from sourcing to support"
          description="Every mandate follows the same rigorous lifecycle, so clients always know what comes next."
        />
        <ProcessTimeline />
      </Section>

      {/* ==================== Specialization band ==================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="Focused Expertise"
          title="Specialized where it counts"
          description="We concentrate on high-demand Boeing and Airbus narrow- and widebody airframes and the engine families that power global fleets."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((item, index) => {
            const Icon = item.icon === "airframe" ? Airplane : Engine;
            return (
              <Reveal key={item.name} delay={index * 70} className="h-full">
                <SpotlightCard className="group h-full rounded-2xl">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float">
                    <Icon weight="duotone" className="size-9 text-azure-500" aria-hidden />
                    <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-steel-500">
                      {item.type}
                    </div>
                    <div className="mt-1.5 text-xl font-semibold text-navy-900">
                      {item.name}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications strip */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon weight="duotone" className="size-6 text-azure-600" aria-hidden />
                <span className="text-sm font-semibold text-navy-800">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ==================== Global reach + metrics ==================== */}
      <GlobalReach />

      {/* ==================== Positioning pull-quote ==================== */}
      <Section className="bg-white">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Quotes weight="fill" className="mx-auto size-10 text-gold-400" aria-hidden />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-[1.35] text-navy-900 sm:text-3xl lg:text-[2.4rem] lg:leading-[1.3]">
            {positioning.quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-400" aria-hidden />
            <cite className="text-sm font-semibold uppercase not-italic tracking-[0.18em] text-steel-500">
              {positioning.attribution}
            </cite>
            <span className="h-px w-8 bg-gold-400" aria-hidden />
          </div>
        </Reveal>
      </Section>

      {/* ===================== Common questions ===================== */}
      {/* Visible counterpart to the FAQPage structured data above. Each answer
          is written to stand on its own when lifted out of the page, because
          that is the unit AI answer engines extract and cite. */}
      <Section id="faq" className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="Common Questions"
          title={`What ${siteConfig.shortName} does, and how to engage us`}
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-9 sm:grid-cols-2">
          {homeFaqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 70}>
              <h3 className="text-lg font-semibold text-navy-900">{faq.q}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= CTA band ========================= */}
      <CTABand
        title="Elevate your commercial aviation experience"
        description={`Whether you're expanding freight capacity, sourcing engines, or structuring your next transaction, ${siteConfig.shortName} tailors every project to your exact expectations.`}
        image={images.widebodyDusk}
        video={{ mp4: "/videos/cta-loop.mp4", webm: "/videos/cta-loop.webm" }}
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
