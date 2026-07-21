import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle,
  GlobeHemisphereWest,
  Airplane,
  Engine,
  Wrench,
  ShieldCheck,
} from "@phosphor-icons/react/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { ServiceIcon } from "@/components/service-icon";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import type { IconKey } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* SEO constants                                                       */
/* ------------------------------------------------------------------ */

const PAGE_PATH = "/global-experience";
const PAGE_TITLE = "Global Aerospace Experience | Hemisphere Aerospace Investments";
const PAGE_DESCRIPTION =
  "Explore Hemisphere Aerospace Investments' global experience in commercial aircraft and engine trading, passenger-to-freighter conversions, aviation asset management, MRO, structured transactions, and technical aerospace services.";

export const metadata: Metadata = {
  // `absolute` bypasses the "%s | HAI" template from the root layout so the
  // full brand name appears exactly as specified for this page.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/* ------------------------------------------------------------------ */
/* Content model                                                       */
/* ------------------------------------------------------------------ */

const HERO_SUPPORT =
  "Hemisphere Aerospace Investments brings together commercial, financial, operational, and technical aerospace experience developed across global aircraft and engine markets. HAI and its leadership have participated in aircraft transactions, engine programs, conversions, maintenance programs, asset management, and aviation investments spanning six continents.";

const GLOBAL_INTRO =
  "Hemisphere Aerospace Investments operates through a global network of aviation relationships, technical providers, operators, investors, and transaction counterparties. HAI's experience extends across North America, South America, Europe, Africa, Asia, and Australia and Oceania.";
const GLOBAL_INTRO_2 =
  "The company's work spans aircraft acquisition and disposition, engine transactions, passenger-to-freighter programs, maintenance and technical oversight, aircraft remarketing, asset repositioning, and structured aviation transactions.";

const experienceRegions = [
  {
    name: "North America",
    body: "Aircraft and engine acquisitions, commercial aviation transactions, MRO programs, aircraft modifications, technical oversight, portfolio management, and strategic aerospace projects.",
  },
  {
    name: "South America",
    body: "Commercial aircraft and engine opportunities, aircraft placement, technical programs, and aviation transaction support.",
  },
  {
    name: "Europe",
    body: "Aircraft trading, leasing relationships, aviation investment relationships, engine transactions, portfolio management, and international aerospace partnerships.",
  },
  {
    name: "Africa",
    body: "Aircraft placement, commercial aviation opportunities, fleet requirements, and emerging-market aviation transactions.",
  },
  {
    name: "Asia",
    body: "Aircraft and engine trading relationships, widebody and freighter opportunities, international asset transactions, and aviation counterparties.",
  },
  {
    name: "Australia & Oceania",
    body: "Aircraft acquisition experience, international aircraft transactions, and commercial aviation asset opportunities.",
  },
];

const TRANSACTIONS_INTRO =
  "HAI specializes in identifying, evaluating, structuring, acquiring, transforming, and repositioning commercial aviation assets.";
const TRANSACTIONS_INTRO_2 =
  "The company's approach combines commercial analysis, technical due diligence, maintenance planning, transaction structuring, and asset remarketing.";

const transactionCapabilities: { icon: IconKey; title: string; body: string }[] = [
  {
    icon: "airplane-tilt",
    title: "Aircraft Acquisition & Disposition",
    body: "Commercial aircraft acquisition, aircraft sales, portfolio transactions, remarketing, and asset repositioning.",
  },
  {
    icon: "engine",
    title: "Engine Trading & Investment",
    body: "Commercial engine acquisition, technical evaluation, repair planning, shop visit management, engine trading, and remarketing.",
  },
  {
    icon: "clipboard",
    title: "Aircraft Leasing & Portfolio Management",
    body: "Commercial and technical asset oversight, lease and lending structures, portfolio maintenance, asset management, and transaction support.",
  },
  {
    icon: "finance",
    title: "Structured Aviation Transactions",
    body: "Equipment financing analysis, transaction structuring, risk analysis, documentation, securitization, asset sales, restructuring, and aviation investment opportunities.",
  },
];

const AIRCRAFT_INTRO =
  "HAI and its leadership have worked across major commercial aircraft families and specialized aviation programs.";
const AIRCRAFT_DISCLAIMER =
  "Platform experience reflects transactions, technical oversight, maintenance programs, conversions, asset management, or related aviation activities conducted by HAI or members of its leadership team.";

const aircraftPlatforms = [
  { name: "Boeing 737", maker: "Boeing" },
  { name: "Boeing 747", maker: "Boeing" },
  { name: "Boeing 757", maker: "Boeing" },
  { name: "Boeing 767", maker: "Boeing" },
  { name: "Boeing 777", maker: "Boeing" },
  { name: "Airbus A321", maker: "Airbus" },
  { name: "Airbus A340", maker: "Airbus" },
  { name: "MD-80 Family", maker: "McDonnell Douglas" },
];

const ENGINE_INTRO =
  "Engine trading and technical asset management are core areas of HAI's commercial aerospace experience. HAI evaluates engine opportunities through a combination of market analysis, records review, physical inspection, maintenance status, shop visit liability, operational history, and future remarketing potential.";
const ENGINE_MRO_NOTE =
  "HAI does not perform every repair capability internally. Where maintenance and overhaul are required, HAI works through strategic FAA- and EASA-certified service providers and technical relationships to coordinate the appropriate scope of work for each engine platform.";

const enginePlatforms = [
  { name: "CFM56-5B", maker: "CFM International" },
  { name: "CFM56-7B", maker: "CFM International" },
  { name: "CFM56 Family", maker: "CFM International" },
  { name: "CF6-50", maker: "GE" },
  { name: "CF6-80", maker: "GE" },
  { name: "GE90", maker: "GE" },
  { name: "LEAP-1A", maker: "CFM International" },
  { name: "LEAP-1B", maker: "CFM International" },
  { name: "PW4000", maker: "Pratt & Whitney" },
  { name: "PW2000", maker: "Pratt & Whitney" },
  { name: "V2500", maker: "IAE" },
  { name: "RB211", maker: "Rolls-Royce" },
  { name: "Trent Family", maker: "Rolls-Royce" },
  { name: "Trent 800", maker: "Rolls-Royce" },
  { name: "GP7200", maker: "Engine Alliance" },
  { name: "CF34", maker: "GE" },
];

const P2F_PARAGRAPHS = [
  "Passenger-to-freighter conversion programs are a significant part of the aviation experience represented within HAI's leadership.",
  "John B. Sawyer participated in the launch and execution of the Boeing 737-400 passenger-to-freighter conversion program and was involved in more than 40 profitable P2F conversions.",
  "HAI's broader capabilities include aircraft acquisition, pre-buy evaluation, maintenance planning, conversion coordination, technical oversight, integration, and aircraft remarketing.",
  "This work spans narrow-body freighter aircraft and Boeing freighter programs, cargo aircraft conversion, and the related aircraft modification programs that keep freight and logistics operators flying.",
];

const caseStudies = [
  {
    n: "01",
    title: "Large-Scale Aircraft Portfolio Transactions",
    body: [
      "HAI leadership has extensive experience structuring and executing large commercial aircraft portfolio transactions.",
      "John B. Sawyer was a principal in a major U.S. Air transaction involving more than 100 aircraft and a substantial spare parts inventory.",
      "Across his career, Sawyer has completed more than 275 aircraft transactions and participated in major aircraft and engine acquisitions, portfolio sales, leasing programs, and asset repositioning strategies.",
    ],
  },
  {
    n: "02",
    title: "Commercial Engine Trading and Remarketing",
    body: [
      "HAI has executed commercial engine acquisition, repair, and remarketing strategies involving major engine platforms.",
      "The company's approach evaluates engine market demand, maintenance status, shop visit liability, technical condition, operating history, repair requirements, and future asset value before developing an acquisition and exit strategy.",
    ],
  },
  {
    n: "03",
    title: "Freighter and Logistics Aviation",
    body: [
      "HAI and its leadership have extensive experience with commercial freighter aircraft, passenger-to-freighter conversions, engine programs, and aviation transactions supporting cargo and logistics operators.",
      "This experience includes narrow-body and widebody aircraft, freighter conversion programs, maintenance coordination, technical asset oversight, and aircraft and engine remarketing.",
    ],
  },
];

const technicalCapabilities = [
  "Aircraft Trading and Leasing",
  "Aircraft and Engine Acquisitions",
  "Aircraft Remarketing",
  "Engine Trading",
  "Engine Technical Evaluation",
  "Passenger-to-Freighter Conversions",
  "VVIP Aircraft Retrofits",
  "Aircraft Maintenance Coordination",
  "Engine Repair and Overhaul Programs",
  "Portfolio Maintenance",
  "Technical Asset Management",
  "Aircraft Modifications",
  "Avionics Programs",
  "Structured Aviation Finance",
  "Aviation Investment Analysis",
  "Transaction Due Diligence",
  "Asset Repositioning",
  "Commercial Aviation Strategy",
];

const SERVICE_REL_INTRO =
  "HAI works through strategic relationships with experienced aviation service providers to support complex aircraft and engine programs.";
const SERVICE_REL_ENABLE =
  "These strategic service relationships expand HAI's ability to coordinate engine maintenance and repair, aircraft maintenance, structural modifications, avionics programs, conversion projects, technical services, and specialized aviation requirements. Each provider is an independent organization, and every engagement is matched to the right certified capability for the aircraft, engine platform, and technical scope.";

const serviceRelationships = [
  {
    icon: Engine,
    name: "PEM-AIR Turbine Engine Services",
    body: "A strategic relationship supporting turbine engine maintenance, repair, and technical services.",
  },
  {
    icon: Wrench,
    name: "Level 5 Aerospace",
    body: "A strategic relationship supporting aircraft maintenance, modifications, and specialized aerospace services.",
  },
];

const LEADERSHIP_INTRO =
  "HAI is led by aviation executives with experience spanning aircraft trading, leasing, MRO operations, aircraft modifications, passenger-to-freighter conversions, engine programs, portfolio management, structured finance, and technical asset management.";
const LEADERSHIP_BIO = [
  "John B. Sawyer is the Founder, Chief Executive Officer, and Managing Partner of Hemisphere Aerospace Investments. He brings nearly 40 years of commercial aerospace experience, including 35 years in executive and board-level leadership positions.",
  "Sawyer has completed more than 275 aircraft transactions and has extensive experience originating, negotiating, structuring, managing, and closing major aircraft and engine transactions.",
  "His background includes senior leadership roles across aircraft leasing, MRO organizations, aircraft trading platforms, technical asset management, and aviation investment organizations.",
];

// The FAQ array is the single source of truth for both the visible section and
// the FAQPage JSON-LD, so the structured data always matches the page exactly.
// Founding year is read from siteConfig (2018) to stay consistent with the rest
// of the site.
const faqs = [
  {
    q: "What does Hemisphere Aerospace Investments do?",
    a: "Hemisphere Aerospace Investments is a commercial aerospace company focused on aircraft and engine trading, aviation asset transformation, portfolio management, technical services, aircraft conversions, maintenance programs, and structured aviation transactions.",
  },
  {
    q: "Does Hemisphere Aerospace Investments work internationally?",
    a: "Yes. HAI and its leadership have aviation experience and industry relationships spanning six continents. The company works with aviation operators, investors, technical providers, and transaction counterparties across global commercial aerospace markets.",
  },
  {
    q: "Does HAI buy and sell commercial aircraft?",
    a: "Yes. HAI evaluates commercial aircraft acquisition, sale, trading, leasing, remarketing, and asset repositioning opportunities. Each aircraft opportunity is evaluated based on the asset, technical records, maintenance status, configuration, location, market conditions, and transaction requirements.",
  },
  {
    q: "Does HAI buy and sell aircraft engines?",
    a: "Yes. Commercial engine trading and engine asset opportunities are core areas of HAI's experience. HAI evaluates individual engines and engine portfolios based on technical condition, records, maintenance history, shop visit requirements, market demand, and future asset value.",
  },
  {
    q: "What aircraft types has HAI worked with?",
    a: "HAI and its leadership have experience involving major Boeing and Airbus commercial aircraft families, including Boeing 737, 747, 757, 767, and 777 aircraft, Airbus A321 and A340 aircraft, and MD-80 family aircraft. Experience may include transactions, maintenance programs, conversions, technical oversight, asset management, or related aviation activities.",
  },
  {
    q: "What aircraft engine platforms does HAI have experience with?",
    a: "HAI's engine experience and strategic technical relationships span major commercial engine families including CFM56, CF6, GE90, LEAP, PW4000, PW2000, V2500, RB211, Trent, GP7200, and CF34 platforms.",
  },
  {
    q: "Does HAI perform passenger-to-freighter conversions?",
    a: "HAI's leadership has extensive passenger-to-freighter conversion experience. John B. Sawyer participated in the launch and execution of the Boeing 737-400 passenger-to-freighter conversion program and was involved in more than 40 P2F conversions. HAI supports aircraft acquisition, technical evaluation, maintenance planning, conversion coordination, integration, and aircraft remarketing.",
  },
  {
    q: "Does HAI provide aircraft maintenance and engine repair services?",
    a: "HAI coordinates aircraft maintenance, engine programs, technical services, modifications, and repair requirements through strategic relationships with experienced FAA and EASA-certified aviation service providers. Capabilities depend on the aircraft, engine platform, and required technical scope.",
  },
  {
    q: "Does HAI work with aviation investors and financial partners?",
    a: "Yes. HAI evaluates aviation investment opportunities, structured aircraft and engine transactions, portfolio opportunities, and strategic capital relationships. The company's leadership has extensive experience with equipment financing, lease and lending structures, risk analysis, asset sales, portfolio management, and aviation transaction structuring.",
  },
  {
    q: "Has HAI worked with major aerospace and technology companies?",
    a: "HAI and its leadership have completed projects or transactions involving major aerospace, aviation, logistics, and technology organizations. Publicly referenced experience includes L3Harris Technologies, Raytheon, Jetran, Aergo Capital, and other aviation counterparties.",
  },
  {
    q: "Where is Hemisphere Aerospace Investments headquartered?",
    a: `Hemisphere Aerospace Investments was founded in ${siteConfig.foundedYear} and is based in ${siteConfig.address.city}, ${siteConfig.address.state}. The company operates through a global network of aviation relationships, technical providers, investors, operators, and transaction counterparties.`,
  },
  {
    q: "How can I submit an aircraft or engine opportunity to HAI?",
    a: "Aircraft owners, operators, lessors, investors, and aviation counterparties can contact Hemisphere Aerospace Investments through the company's contact page. Include the aircraft or engine type, asset location, general operational or maintenance status, transaction objective, and preferred timeline when available.",
  },
];

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD) — mirrors the visible content above        */
/* ------------------------------------------------------------------ */

const canonicalUrl = `${siteConfig.url}${PAGE_PATH}`;

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: String(siteConfig.foundedYear),
  description:
    "Hemisphere Aerospace Investments is a global commercial aerospace company focused on aircraft and engine trading, passenger-to-freighter conversions, aviation asset management, MRO coordination, and structured aviation transactions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Asia",
    "Australia and Oceania",
  ],
  knowsAbout: [
    "Commercial aircraft trading",
    "Aircraft engine trading",
    "Passenger-to-freighter conversions",
    "Aircraft leasing",
    "Aviation asset management",
    "Aircraft maintenance coordination",
    "Structured aviation finance",
    "Aviation investment",
  ],
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: canonicalUrl,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function GlobalExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <PageHero
        eyebrow="Global Aerospace Experience"
        title={
          <>
            Four Decades of Aviation Experience.{" "}
            <span className="text-gradient italic">A Global Transaction Network.</span>
          </>
        }
        description={HERO_SUPPORT}
        image={images.widebodyDusk}
      />

      {/* ==================== Global experience / regions ==================== */}
      <Section>
        <SectionHeading
          eyebrow="Global Footprint"
          title="Aerospace Experience Across Six Continents"
          description={GLOBAL_INTRO}
        />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">{GLOBAL_INTRO_2}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceRegions.map((region, index) => (
            <Reveal key={region.name} delay={(index % 3) * 80} className="h-full">
              <SpotlightCard className="group h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100 transition-all duration-500 group-hover:bg-azure-500 group-hover:text-white group-hover:ring-azure-500">
                    <GlobeHemisphereWest weight="duotone" className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{region.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{region.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ==================== Aircraft & engine transactions ==================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Transactions"
          title="Aircraft and Engine Transaction Experience"
          description={TRANSACTIONS_INTRO}
        />
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">{TRANSACTIONS_INTRO_2}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {transactionCapabilities.map((cap, index) => (
            <Reveal key={cap.title} delay={(index % 2) * 90} className="h-full">
              <SpotlightCard className="group h-full rounded-2xl">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100 transition-all duration-500 group-hover:bg-azure-500 group-hover:text-white group-hover:ring-azure-500">
                    <ServiceIcon icon={cap.icon} className="size-6" weight="duotone" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">{cap.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{cap.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ==================== Aircraft platform experience ==================== */}
      <Section>
        <SectionHeading
          eyebrow="Aircraft Platforms"
          title="Commercial Aircraft Platform Experience"
          description={AIRCRAFT_INTRO}
        />
        <Reveal delay={100}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aircraftPlatforms.map((aircraft) => (
              <div
                key={aircraft.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float"
              >
                <Airplane weight="duotone" className="size-7 text-azure-500" aria-hidden />
                <div className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-steel-500">
                  {aircraft.maker}
                </div>
                <div className="mt-1 text-lg font-semibold text-navy-900">{aircraft.name}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-500">
            {AIRCRAFT_DISCLAIMER}
          </p>
        </Reveal>
      </Section>

      {/* ==================== Engine platform experience ==================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Engine Platforms"
          title="Commercial Engine Platform Experience"
          description={ENGINE_INTRO}
        />
        <Reveal delay={100}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {enginePlatforms.map((platform) => (
              <div
                key={platform.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-azure-200 hover:shadow-float"
              >
                <Engine weight="duotone" className="size-7 text-azure-500" aria-hidden />
                <div className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-steel-500">
                  {platform.maker}
                </div>
                <div className="mt-1 text-lg font-semibold text-navy-900">{platform.name}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheck
              weight="duotone"
              className="mt-0.5 size-6 shrink-0 text-azure-600"
              aria-hidden
            />
            <p className="text-sm leading-relaxed text-slate-600">{ENGINE_MRO_NOTE}</p>
          </div>
        </Reveal>
      </Section>

      {/* ==================== Passenger-to-freighter ==================== */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Freighter Conversions"
              title="Passenger-to-Freighter Conversion Experience"
            />
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                {P2F_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
                <span className="font-display text-4xl font-medium leading-none text-navy-900">
                  40+
                </span>
                <span className="text-sm leading-snug text-slate-600">
                  Profitable P2F conversions
                  <br />
                  led by HAI leadership
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={100} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-float-lg">
              <Image
                src={images.freighterNight.src}
                alt={images.freighterNight.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ==================== Representative experience ==================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="Representative Work"
          title="Representative Aircraft and Engine Experience"
          description="A selection of representative transactions and programs illustrating the depth of HAI's commercial aerospace experience."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={(index % 2) * 90} className="h-full">
              <article className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-float">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-medium text-azure-500/90">
                    {study.n}
                  </span>
                  <span className="h-px flex-1 bg-slate-200" aria-hidden />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-steel-500">
                    Representative Experience
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">{study.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                  {study.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ==================== Strategic technical capabilities ==================== */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Capabilities"
          title="Commercial, Technical and Operational Aerospace Expertise"
          description="A full-lifecycle capability set spanning commercial strategy, technical asset management, and structured aviation transactions."
        />
        <Reveal delay={100}>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {technicalCapabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2.5">
                <CheckCircle
                  weight="fill"
                  className="mt-0.5 size-5 shrink-0 text-azure-500"
                  aria-hidden
                />
                <span className="text-sm font-medium text-navy-800">{capability}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ==================== Strategic service relationships (dark) ==================== */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28 noise">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-azure-500/15 blur-3xl animate-aurora"
          aria-hidden
        />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Strategic Relationships"
            title="A Network Built for Execution"
            description={SERVICE_REL_INTRO}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {serviceRelationships.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Reveal key={partner.name} delay={(index % 2) * 90} className="h-full">
                  <SpotlightCard className="hairline-gradient group h-full rounded-2xl">
                    <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <Icon weight="duotone" className="size-7 text-azure-400" aria-hidden />
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-azure-300">
                          Strategic Service Relationship
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">{partner.name}</h3>
                      <p className="mt-3 leading-relaxed text-navy-100/70">{partner.body}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={140}>
            <p className="mt-10 max-w-3xl leading-relaxed text-navy-100/70">{SERVICE_REL_ENABLE}</p>
          </Reveal>
        </Container>
      </section>

      {/* ==================== Leadership ==================== */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Leadership"
          title="Experience Built Across the Aviation Lifecycle"
          description={LEADERSHIP_INTRO}
        />
        <div className="mt-14">
          <Reveal>
            <article className="grid gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
                  <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-azure-500/25 blur-2xl"
                    aria-hidden
                  />
                  <div className="absolute inset-5 rounded-[1.1rem] border border-gold-400/25" aria-hidden />
                  <span className="relative font-display text-7xl font-medium tracking-tight text-white/95">
                    JS
                  </span>
                  <span className="absolute bottom-4 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-300/80">
                    Hemisphere
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-navy-900">John B. Sawyer</h3>
                  <p className="mt-1 text-sm font-semibold text-azure-600">
                    Founder, Chief Executive Officer &amp; Managing Partner
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 lg:border-l lg:border-slate-100 lg:pl-10">
                <div className="space-y-4 leading-relaxed text-slate-600">
                  {LEADERSHIP_BIO.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7">
                  <ButtonLink href="/team" variant="outline">
                    View the leadership team
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* ==================== FAQ ==================== */}
      <Section id="faq" className="bg-slate-50">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently Asked Questions About HAI's Global Aerospace Experience"
        />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={Math.min(index, 6) * 40}>
              <div className="py-6">
                <h3 className="text-lg font-semibold text-navy-900">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Submit an aircraft or engine opportunity"
        description="Aircraft owners, operators, lessors, investors, and aviation counterparties can bring transactions, portfolios, and technical requirements to HAI's global network."
        image={images.widebodyDusk}
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
