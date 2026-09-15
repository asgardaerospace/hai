/**
 * Central content model for the HAI website.
 * Editing copy, services, team, or contact details? Do it here.
 */

import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

export const siteConfig = {
  name: "Hemisphere Aerospace Investments",
  shortName: "HAI",
  legalName: "Hemisphere Aerospace Investments, LLC",
  tagline: "Pushing the Boundaries of Aerospace Technology",
  description:
    "Hemisphere Aerospace Investments is a global provider of commercial aircraft and engine trading assets, specializing in Boeing and Airbus narrow- and widebody passenger-to-freighter conversions and the CFM56, CF6, GE90, and Rolls-Royce Trent engine series.",
  foundedYear: 2018,
  /**
   * Canonical production hostname. Verified 2026-09-05: the apex issues a
   * path-preserving 308 to `www`, so `www` is the host that actually serves
   * 200s. Every canonical, sitemap entry, Open Graph URL and schema @id is
   * derived from this one value — do not hardcode the hostname anywhere else.
   */
  url: "https://www.hai-aero.com",
  email: "info@haiaero.com",
  phone: "+12544358209",
  phoneDisplay: "+1 (254) 435-8209",
  address: {
    line1: "522 Austin Ave",
    city: "Waco",
    state: "TX",
    zip: "76701",
    country: "USA",
    full: "522 Austin Ave, Waco, TX 76701, USA",
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Global Experience", href: "/global-experience" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export type IconKey =
  | "airplane-tilt"
  | "crown"
  | "engine"
  | "handshake"
  | "clipboard"
  | "finance";

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  description: string;
  features: string[];
  icon: IconKey;
};

export const services: Service[] = [
  {
    slug: "passenger-to-freighter-conversions",
    title: "Passenger-to-Freighter Conversions",
    short: "Boeing & Airbus narrow- & widebody freighter conversions.",
    summary:
      "Transforming Boeing and Airbus passenger aircraft into freighters for airlines and delivery services expanding their cargo capacity.",
    description:
      "HAI transforms and repurposes Boeing and Airbus narrow- and widebody passenger aircraft into freighters, helping airlines and delivery services expand cargo capability to meet surging e-commerce and air-freight demand. Every program is delivered through FAA- and EASA-certified conversion partners and managed end to end.",
    features: [
      "Boeing narrow- & widebody P2F",
      "Airbus narrow- & widebody P2F",
      "FAA- & EASA-certified conversion partners",
      "Turn-key project management",
    ],
    icon: "airplane-tilt",
  },
  {
    slug: "vvip-business-jet-retrofits",
    title: "VVIP Business-Jet Retrofits",
    short: "Bespoke VVIP completions and interior retrofits.",
    summary:
      "Bespoke VVIP business-jet retrofits and interior completions, tailored to each client's exact expectations.",
    description:
      "HAI delivers bespoke VVIP business-jet retrofits and interior completions, from custom cabin design to avionics and connectivity upgrades, tailored to each client's exact expectations and executed through premier completion centers.",
    features: [
      "Custom cabin design & completion",
      "Corporate & head-of-state configurations",
      "Avionics & connectivity upgrades",
      "Certified retrofit partners",
    ],
    icon: "crown",
  },
  {
    slug: "commercial-jet-engine-mro",
    title: "Commercial Jet-Engine MRO",
    short: "CFM56, CF6, GE90 & Trent repair and overhaul.",
    summary:
      "Commercial jet-engine repair, maintenance, and overhaul delivered through certified MRO alliances.",
    description:
      "HAI provides commercial jet-engine repair, maintenance, and overhaul across the CFM56-7B, CFM56-5B, CF6-50C2, CF6-80C2, GE90, and Rolls-Royce Trent 700/800 series, delivered through strategic alliances with premier FAA- and EASA-certified engine MRO providers, including performance restoration, testing, and green-time solutions.",
    features: [
      "CFM56-7B / -5B series",
      "CF6-50C2 / -80C2 series",
      "GE90 series",
      "Trent 700 / 800 series",
      "Performance restoration & test",
      "Green-time & lease engines",
    ],
    icon: "engine",
  },
  {
    slug: "aircraft-trading-leasing",
    title: "Aircraft Trading & Leasing",
    short: "Commercial aircraft and engine trading and leasing.",
    summary:
      "Sourcing, acquisition, sale, and leasing of commercial aircraft and engines across a global network.",
    description:
      "HAI sources, acquires, sells, and leases commercial aircraft and engines, connecting airlines, lessors, and investors with the assets and capacity they need. From operating leases to sale-leaseback structures, we move assets efficiently across a global network.",
    features: [
      "Aircraft & engine sourcing",
      "Operating & finance leases",
      "Sale-leaseback structures",
      "Global buyer & seller network",
    ],
    icon: "handshake",
  },
  {
    slug: "portfolio-technical-services",
    title: "Portfolio & Technical Services",
    short: "Lifecycle asset, records, and airworthiness management.",
    summary:
      "End-to-end technical asset management that keeps portfolios airworthy, compliant, and investment-ready.",
    description:
      "HAI provides end-to-end portfolio maintenance and technical services: asset management, records, and technical oversight that keep aircraft and engine portfolios airworthy, compliant, and investment-ready across the full lifecycle, including redelivery and transition support.",
    features: [
      "Technical asset management",
      "Records & airworthiness review",
      "Maintenance program oversight",
      "Redelivery & transition support",
    ],
    icon: "clipboard",
  },
  {
    slug: "structured-finance",
    title: "Structured Finance",
    short: "Tailored acquisition, conversion, and portfolio finance.",
    summary:
      "Flexible capital structures tailored to each aircraft and engine transaction.",
    description:
      "HAI structures finance solutions for aircraft and engine acquisitions, conversions, and portfolios, pairing deep aviation expertise with flexible capital structures, debt and lease structuring, and investor partnerships tailored to each transaction.",
    features: [
      "Acquisition & conversion financing",
      "Debt & lease structuring",
      "Investor partnerships",
      "Risk & portfolio analysis",
    ],
    icon: "finance",
  },
];

/** The integrated approach — Financial, Operational, Technical. */
export const pillars = [
  {
    title: "Financial",
    description:
      "Structured finance, leasing, and portfolio strategy that make each transaction viable and investment-ready.",
  },
  {
    title: "Operational",
    description:
      "Turn-key project management across conversions, retrofits, and transitions, delivered on time and on budget.",
  },
  {
    title: "Technical",
    description:
      "Deep airframe and engine expertise delivered through premier FAA- and EASA-certified MRO partners.",
  },
];

export const stats = [
  /**
   * "100+ years of combined experience" is APPROVED AND VERIFIED by management
   * (confirmation 2026-09-05): HAI's current leadership team has more than 100
   * years of combined experience. No further verification of this metric is
   * required — do not re-flag it in future claim reviews.
   *
   * It is rendered server-side by `Counter`, which is contractually required to
   * emit the real value in the HTML rather than a placeholder zero. See the SSR
   * contract note in components/counter.tsx before changing that component.
   */
  { value: "100+", label: "Years of combined leadership experience" },
  { value: "2018", label: "Founded" },
  { value: "Global", label: "Aircraft & engine asset provider" },
  { value: "FAA · EASA", label: "Certified MRO partner network" },
];

/** Numeric metrics for the animated counter band (truthful, derived from above). */
export const metrics = [
  { value: "100+", label: "Years combined leadership experience" },
  { value: "6", label: "Full-lifecycle service lines" },
  { value: "6", label: "Specialized airframe & engine families" },
  { value: "2018", label: "Founded on decades of expertise" },
];

/** Keywords for the trust marquee — HAI's specialized fleet & credentials. */
export const marqueeItems = [
  "Boeing Narrow- & Widebody",
  "Airbus Narrow- & Widebody",
  "CFM56-7B",
  "CFM56-5B",
  "CF6-50C2",
  "CF6-80C2",
  "GE90",
  "Trent 700/800",
  "P2F Conversions",
  "VVIP Completions",
  "Engine MRO",
  "Sale-Leaseback",
  "Structured Finance",
  "FAA Part 145",
  "EASA Certified",
];

/** How HAI delivers — the end-to-end asset lifecycle. */
export const processSteps = [
  {
    number: "01",
    title: "Source & Evaluate",
    description:
      "We identify aircraft and engines across a global network and run full commercial, technical, and records due diligence before any capital is committed.",
  },
  {
    number: "02",
    title: "Structure & Finance",
    description:
      "Each transaction is paired with the right capital structure (acquisition, operating lease, or sale-leaseback), with risk priced by decades of aviation-finance experience.",
  },
  {
    number: "03",
    title: "Convert & Overhaul",
    description:
      "P2F conversions, VVIP completions, and engine overhaul are executed through premier FAA- and EASA-certified partners under turn-key project management.",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description:
      "We manage redelivery, transition, and ongoing technical oversight so every asset stays airworthy, compliant, and investment-ready across its lifecycle.",
  },
];

/** A positioning pull-quote used as a signature statement. */
export const positioning = {
  quote:
    "We don't simply trade aircraft. We engineer the financial, operational, and technical path that turns an asset into a working part of your fleet.",
  attribution: "The Hemisphere approach",
};

/** Regions of operation for the global-reach section. */
export const regions = [
  "North America",
  "Latin America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia-Pacific",
];

export type TeamMember = {
  name: string;
  role: string;
  /** Omit when no approved headshot exists — the card falls back to a monogram. */
  photo?: ImageAsset;
  expertise: string[];
  bio: string[];
};

export const team: TeamMember[] = [
  {
    name: "John B. Sawyer",
    role: "Founder, Chief Executive Officer & Managing Partner",
    photo: images.johnSawyer,
    expertise: [
      "Equipment Financing",
      "Lease & Lending Structures",
      "Risk Analysis",
      "Securitization",
      "Portfolio Management",
    ],
    bio: [
      "John B. Sawyer is the Founder, Chief Executive Officer, and Managing Partner of Hemisphere Aerospace Investments, managing and overseeing all commercial related aspects of the business. His duties include providing strategic direction, oversight, cultivating, introducing, and performing diligence on new initiatives and business opportunities. He interacts directly with the company's investors and customers. John is a proven leader with almost 40 years in the field of Commercial Aerospace, 35 of which have been at Executive and Board of Directors level positions. He consistently provides the ever-critical commercial perspective when it comes to executing HAI's long-term vision, and consistently provides lucrative returns for investors.",
      "John's worldwide network of strategic relationships has greatly benefited investor groups over the years. He is a top-producing, analytical executive with a successful track record originating, negotiating, structuring, managing, and closing large transactions that generate significant net profit. He has expert level knowledge of equipment financing terms, lease/lending structures, risk analysis, documentation procedures, securitization, asset sales, portfolio management, reorganization, and workouts. He is a solution-focused decision-maker, with a strong aviation and technical background. He has the ability to motivate diverse cross-functional teams to complete projects on time, under budget, and meet or exceed all business targets in any dynamic, domestic or international environment.",
      "Prior to co-founding Hemisphere Aerospace Investments, John served as the Chief Trading Officer for four boutique mid-size Aircraft leasing companies — two located in Europe and two in the United States. Prior to that he was the Chief Executive Officer of Hamilton Aerospace, a mid-size MRO located in Tucson, Arizona, specialized in narrow-body heavy overhaul & narrow-body passenger-to-freighter conversions.",
      "John's longtime reputation has been that he pioneered the NTE (Not to Exceed) fixed price repair contracts for Airframe and Engine repairs, helping to streamline industry standards for basic repair costs.",
      "John has completed over 275+ Aircraft Transactions spanning three decades, and has been involved in several of the largest used aircraft transactions on record, including the largest single recorded sale of used aircraft in aviation history. He was a principal in the 2003 US Airways transaction that included the purchase of 105 airplanes and a substantial inventory of spare parts.",
    ],
  },
  {
    name: "Tyler Sawyer",
    role: "President",
    photo: images.tylerSawyer,
    expertise: [
      "Financial Strategy",
      "Aircraft & Engine Transactions",
      "Investment Opportunities",
      "Aviation Operations",
      "Government & Financial Policy",
    ],
    bio: [
      "Tyler Sawyer serves as President of Hemisphere Aerospace Investments, bringing experience across finance, aviation operations, business development, and financial policy. Working alongside senior leadership, he supports HAI's financial strategy, aircraft and engine transactions, investment opportunities, and continued growth across the commercial aerospace market.",
      "Tyler's experience with Hemisphere began while attending Trinity University, when he worked with the Company throughout his college summers. He spent two summers in Kingman, Arizona, overseeing the overhaul of three decommissioned DHL aircraft, gaining firsthand experience in aircraft maintenance, asset management, project oversight, and the operational and financial considerations involved in returning commercial aviation assets to market.",
      "Prior to returning to aviation, Tyler spent six years working in financial and regulatory policy in Washington, D.C., ultimately serving as Legislative Director for a United States Congressman. During his tenure, he worked with major companies, financial institutions, business leaders, and government entities on investment, economic development, and policy initiatives, developing an extensive network across the public and private sectors.",
      "Tyler graduated from Trinity University in 2020 with a Bachelor of Science in Finance and served as captain of the men's basketball team. His combination of financial expertise, aviation experience, government relationships, and business leadership supports HAI's investment strategy and continued expansion within the commercial aerospace industry.",
    ],
  },
  {
    name: "Cody Blossman",
    role: "Chief Operating Officer",
    expertise: [
      "Operations Leadership",
      "Strategic Execution",
      "Organizational Development",
      "Risk Management",
      "Team Development",
    ],
    bio: [
      "Cody Blossman serves as Chief Operating Officer of Hemisphere Aerospace Investments, providing executive leadership across operations, strategic execution, organizational development, and the continued growth of HAI's global aerospace platform. He works alongside senior leadership to align people, processes, and resources while strengthening the operational capabilities required to support the Company's expanding commercial aerospace activities.",
      "Prior to joining HAI, Cody served as Chief Deputy of the McLennan County Sheriff's Office, where he led large-scale operations, specialized teams, strategic initiatives, and multi-agency programs within one of the region's most complex public-safety organizations. His career also included six years on the Executive Board of the Waco Texas Anti-Gang Center, five years as a Special Deputy U.S. Marshal with the Lone Star Fugitive Federal Task Force, and service as a SWAT Team Commander. These roles developed extensive experience in executive leadership, organizational management, strategic partnerships, risk management, and disciplined execution in demanding environments.",
      "At HAI, Cody applies that experience to strengthening operations across aircraft and engine trading, asset management, technical services, conversions, MRO, leasing, and structured aviation finance. His focus on accountability, team development, and operational execution helps ensure HAI has the organizational infrastructure necessary to support its clients, partners, and continued growth.",
      "A graduate of Texas State University and a native of Waco, Texas, Cody brings a leadership philosophy centered on building exceptional teams, establishing accountability, and executing with purpose.",
    ],
  },
  {
    name: "Alex Hart",
    role: "Chief Financial Officer",
    photo: images.alexHart,
    expertise: [
      "Financial Operations",
      "Accounting",
      "Government Contracting",
      "Regulatory Compliance",
      "Financial Systems & Scaling",
    ],
    bio: [
      "Alex Hart serves as Chief Financial Officer for Hemisphere Aerospace Investments and Hemisphere Aerospace Defense, bringing extensive experience in financial operations, accounting, government contracting, regulatory compliance, and organizational growth. He specializes in building scalable financial systems and teams capable of supporting rapidly growing organizations and complex operating environments.",
      "Within the defense sector, Alex helped scale a finance and accounting organization supporting growth from approximately 30 to more than 200 employees. He directed cash disbursement operations responsible for approximately $1.5 billion in subcontractor payments, supported financial strategy associated with roughly $2.5 billion in government contract funding, and helped onboard more than 200 vendors under established compliance controls. He also led finance professionals specializing in regulatory compliance and government accounting standards and supported the development of financial systems for an international counterpart organization.",
      "Alex's prior experience includes managing financial operations associated with more than $400 million in real estate assets across a nationwide portfolio. He has led accounting teams, developed financial processes and policies during periods of rapid organizational growth, and supported tax planning and business development across a diverse client base.",
      "A graduate of Texas A&M University with a Bachelor of Science in Accounting, Alex brings a disciplined approach to financial strategy, compliance, and operational planning that supports the continued growth of HAI and HAD. Outside of work, he is an avid Texas A&M fan and enjoys fishing and hiking.",
    ],
  },
  {
    name: "Dalton Sawyer",
    role: "Technical Director",
    photo: images.daltonSawyer,
    expertise: [
      "Technical Leadership",
      "Systems Integration",
      "Engineering Coordination",
      "Technical Planning",
      "Technical Standards",
    ],
    bio: [
      "Dalton Sawyer serves as Technical Director for Hemisphere Aerospace Investments and Hemisphere Aerospace Defense, providing technical leadership across commercial and defense programs. He works closely with engineering teams, program leadership, and strategic partners to ensure technical requirements, systems integration, and engineering efforts remain aligned with mission objectives and program goals.",
      "Dalton's responsibilities include technical planning, engineering coordination, systems integration, and the development of technical standards that support complex aerospace initiatives. He helps translate program requirements into practical engineering solutions while coordinating cross-functional teams to ensure projects are executed efficiently, reliably, and in alignment with the strategic objectives of HAI and HAD. Dalton also holds a degree in finance, complementing his technical leadership with a grounding in the commercial and financial considerations that shape HAI's aerospace programs.",
    ],
  },
  {
    name: "Robert Riedell",
    role: "Director of Programs",
    expertise: [
      "Program Execution",
      "Aircraft Modification",
      "Heavy Maintenance & MRO",
      "FAA Part 145 Certification",
      "Engineering Leadership",
    ],
    bio: [
      "Robert Riedell serves as Director of Programs for Hemisphere Aerospace Investments, bringing more than 30 years of aerospace leadership experience spanning commercial and military aviation, aircraft modification, engineering, heavy maintenance, certification, and complex program execution.",
      "Prior to his current role, Robert served as General Manager of Level 5 Aerospace, where he led the establishment and FAA Part 145 certification of a new MRO operation. He previously managed a Boeing 737-800 modification program for HAI from acquisition through heavy maintenance, refurbishment, engineering changes, certification, and return to service. Robert also spent nearly a decade with L3Harris Integrated Aerospace Systems in senior engineering and program leadership roles and completed a 20-year career in the United States Air Force.",
      "Robert holds a Master of Aeronautical Science in Aviation Aerospace Management from Embry-Riddle Aeronautical University, a B.S. in Mechanical Engineering from North Carolina State University, and is a certified Project Management Professional (PMP).",
    ],
  },
];
