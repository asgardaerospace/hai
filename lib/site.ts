/**
 * Central content model for the HAI website.
 * Editing copy, services, team, or contact details? Do it here.
 */

export const siteConfig = {
  name: "Hemisphere Aerospace Investments",
  shortName: "HAI",
  legalName: "Hemisphere Aerospace Investments, LLC",
  tagline: "Pushing the Boundaries of Aerospace Technology",
  description:
    "Hemisphere Aerospace Investments is a global provider of commercial aircraft and engine trading assets — specializing in Boeing 737-800 and Airbus A321 passenger-to-freighter conversions and the CFM56-7/5B and CF6-50C2 engine series.",
  foundedYear: 2019,
  url: "https://hai-aero.com",
  email: "info@hai-aero.com",
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
    short: "Narrow-body 737-800 & A321 freighter conversions.",
    summary:
      "Transforming narrow-body passenger aircraft into freighters for airlines and delivery services expanding their cargo capacity.",
    description:
      "HAI transforms and repurposes narrow-body Boeing 737-800 and Airbus A321 passenger aircraft into freighters — helping airlines and delivery services expand cargo capability to meet surging e-commerce and air-freight demand. Every program is delivered through FAA- and EASA-certified conversion partners and managed end to end.",
    features: [
      "Boeing 737-800 P2F programs",
      "Airbus A321 P2F programs",
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
      "HAI delivers bespoke VVIP business-jet retrofits and interior completions — from custom cabin design to avionics and connectivity upgrades — tailored to each client's exact expectations and executed through premier completion centers.",
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
    short: "CFM56-7/5B & CF6-50C2 repair and overhaul.",
    summary:
      "Commercial jet-engine repair, maintenance, and overhaul delivered through certified MRO alliances.",
    description:
      "HAI provides commercial jet-engine repair, maintenance, and overhaul across the CFM56-7B, CFM56-5B, and CF6-50C2 series — delivered through strategic alliances with premier FAA- and EASA-certified engine MRO providers, including performance restoration, testing, and green-time solutions.",
    features: [
      "CFM56-7B / -5B series",
      "CF6-50C2 series",
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
      "HAI sources, acquires, sells, and leases commercial aircraft and engines — connecting airlines, lessors, and investors with the assets and capacity they need. From operating leases to sale-leaseback structures, we move assets efficiently across a global network.",
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
      "HAI provides end-to-end portfolio maintenance and technical services — asset management, records, and technical oversight that keep aircraft and engine portfolios airworthy, compliant, and investment-ready across the full lifecycle, including redelivery and transition support.",
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
      "HAI structures finance solutions for aircraft and engine acquisitions, conversions, and portfolios — pairing deep aviation expertise with flexible capital structures, debt and lease structuring, and investor partnerships tailored to each transaction.",
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
      "Turn-key project management across conversions, retrofits, and transitions — delivered on time and on budget.",
  },
  {
    title: "Technical",
    description:
      "Deep airframe and engine expertise delivered through premier FAA- and EASA-certified MRO partners.",
  },
];

export const stats = [
  { value: "100+", label: "Years of combined leadership experience" },
  { value: "2019", label: "Founded" },
  { value: "Global", label: "Aircraft & engine asset provider" },
  { value: "FAA · EASA", label: "Certified MRO partner network" },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    name: "John B. Sawyer",
    role: "Founder, Principal & Chief Executive Officer",
    initials: "JS",
    bio: [
      "John Sawyer is the Founder, Principal, and Chief Executive Officer of Hemisphere Aerospace Investments, with almost 40 years of commercial aviation trading experience. He manages and oversees all commercial aspects of the company — providing strategic direction, cultivating new initiatives, performing due diligence, and interfacing directly with clients — and brings the ever-critical commercial perspective to executing HAI's strategic vision.",
      "He possesses expert knowledge of equipment financing terms, lease and lending structures, risk analysis, documentation procedures, securitization, asset sales, and portfolio management. A solution-focused decision-maker with a strong aviation background, he motivates diverse cross-functional teams to complete projects on time and under budget in any dynamic domestic or international environment.",
      "Prior to co-founding Hemisphere Aerospace Investments, John served as Chief Trading Officer for four boutique mid-size aircraft leasing companies — two in Europe and two in the United States. Before that, he was Chief Executive Officer of Hamilton Aerospace, a mid-size MRO located in Tucson, Arizona, specializing in narrow-body heavy overhaul and passenger-to-freighter conversions.",
    ],
  },
  {
    name: "Thomas Leath",
    role: "Partner & Chief Business Development Officer",
    initials: "TL",
    bio: [
      "Thomas Leath is a Partner and Chief Business Development Officer of Hemisphere Aerospace Investments. Tom collaborates with senior leadership to identify new investors and financial relationships that support HAI's long-term growth and development.",
      "Tom's diverse career background ranges from film and Caribbean real estate to social-media consulting, government relations, and raising seed capital for multiple ventures. He leverages his extensive network and knowledge to create strategic — and lucrative — partnerships and opportunities for HAI and its clients.",
    ],
  },
];
