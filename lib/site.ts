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
  url: "https://hai-aero.com",
  email: "info@hai-aero.com",
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
  photo: ImageAsset;
  expertise: string[];
  bio: string[];
};

export const team: TeamMember[] = [
  {
    name: "John B. Sawyer",
    role: "Founder, Principal & Chief Executive Officer",
    photo: images.johnSawyer,
    expertise: [
      "Equipment Financing",
      "Lease & Lending Structures",
      "Risk Analysis",
      "Securitization",
      "Portfolio Management",
    ],
    bio: [
      "John Sawyer is the Founder, Principal, and Chief Executive Officer of Hemisphere Aerospace Investments, with almost 40 years of commercial aviation trading experience. He manages and oversees all commercial aspects of the company (providing strategic direction, cultivating new initiatives, performing due diligence, and interfacing directly with clients) and brings the ever-critical commercial perspective to executing HAI's strategic vision.",
      "He possesses expert knowledge of equipment financing terms, lease and lending structures, risk analysis, documentation procedures, securitization, asset sales, and portfolio management. A solution-focused decision-maker with a strong aviation background, he motivates diverse cross-functional teams to complete projects on time and under budget in any dynamic domestic or international environment.",
      "Prior to co-founding Hemisphere Aerospace Investments, John served as Chief Trading Officer for four boutique mid-size aircraft leasing companies, two in Europe and two in the United States. Before that, he was Chief Executive Officer of Hamilton Aerospace, a mid-size MRO located in Tucson, Arizona, specializing in narrow-body heavy overhaul and passenger-to-freighter conversions.",
    ],
  },
  {
    name: "Thomas Leath",
    role: "Chief Business Development Officer",
    photo: images.thomasLeath,
    expertise: [
      "Business Development",
      "Investor Relations",
      "Capital Raising",
      "Strategic Partnerships",
    ],
    bio: [
      "Thomas Leath serves as Chief Business Development Officer of Hemisphere Aerospace Investments. Since joining HAI in 2019, he has led the Company's business development efforts, working alongside senior leadership to identify investors, establish strategic partnerships, and cultivate the financial relationships that support HAI's long-term growth. He is responsible for sourcing capital, expanding HAI's commercial network, and representing the Company across investor, industry, and government relationships.",
      "Tom brings more than three decades of entrepreneurial and business development experience spanning aerospace, strategic communications, media, real estate, and private investment. Throughout his career, he has successfully built companies, developed strategic partnerships, and helped raise seed capital for emerging ventures. His experience combines business strategy, relationship development, integrated marketing, and government affairs, enabling him to connect organizations with the capital, resources, and partnerships needed to accelerate growth.",
      "At HAI, Tom plays a central role in expanding the Company's commercial aerospace platform, supporting aircraft and engine transactions, aviation investment opportunities, passenger-to-freighter conversion programs, and strategic alliances with airlines, operators, maintenance organizations, financial institutions, and industry partners. His extensive professional network and collaborative approach have helped position HAI for continued growth across global commercial aerospace markets.",
      "A graduate of Baylor University with a Bachelor of Science in Political Science, Tom is a proud Texan who believes lasting business relationships are built on integrity, trust, and collaboration. He remains actively engaged in the Waco community and is committed to creating long-term value for HAI's clients, partners, and investors.",
    ],
  },
];
