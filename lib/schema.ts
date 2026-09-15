/**
 * The single authoritative structured-data source for the website.
 *
 * Before this module existed, `/team` and `/global-experience` each carried
 * their own Organization block with a different `description` and a different
 * `knowsAbout` list — two slightly different machine-readable descriptions of
 * the same company. Everything now derives from here, and every hostname comes
 * from `siteConfig.url` so the canonical host is defined in exactly one place.
 *
 * FIELD POLICY: only fields supported by currently approved public facts are
 * included. Schema.org permitting a field is not a reason to populate it.
 * Fields deliberately omitted, and why, are documented inline below.
 */

import { siteConfig } from "@/lib/site";
import type { TeamMember } from "@/lib/site";

/** Resolve a site-relative path to an absolute URL on the canonical host. */
export function absoluteUrl(path = "/"): string {
  // The root keeps its trailing slash so `@id` anchors read consistently
  // (`…/#organization`, `…/#webpage`) rather than `…com#webpage`.
  return path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;
}

/** Stable @id anchors so every block references the same two entities. */
export const ORG_ID = `${siteConfig.url}/#organization`;
export const SITE_ID = `${siteConfig.url}/#website`;

/**
 * Off-site profiles that describe this company.
 *
 * NOT yet emitted as `sameAs`. As of 2026-09-05 these profiles carry materially
 * outdated information (superseded COO, narrower aircraft/engine scope, an
 * older combined-experience figure). Publishing `sameAs` now would actively
 * point entity-reconciliation systems at contradictory facts.
 *
 * Once the corrections in the off-site entity plan are live, spread this into
 * `organizationLd` as `sameAs` — it is a one-line change and it is the single
 * highest-value structured-data addition available to this site.
 */
export const offSiteProfiles = [
  "https://www.linkedin.com/company/hemisphere-aerospace-investments",
  "https://www.facebook.com/HemisphereAerospace/",
  "https://www.crunchbase.com/organization/hemisphere-aerospace-investments",
  "https://business.wacochamber.com/directory/Details/hemisphere-aerospace-investments-881672",
] as const;

/**
 * The authoritative Organization entity.
 *
 * Omitted deliberately:
 *  - `parentOrganization` / `subOrganization`: the legal and ownership
 *    relationship between Hemisphere Aerospace Investments and Hemisphere
 *    Aerospace Defense is not confirmed. Encoding an assumed relationship as a
 *    machine-readable legal fact is exactly the kind of claim this file avoids.
 *  - `numberOfEmployees`: not publicly disclosed.
 *  - `sameAs`: staged in `offSiteProfiles` above, pending profile corrections.
 *  - Specific airframe and engine designations: excluded from `description` and
 *    `knowsAbout` alike, pending the aircraft/engine scope verification.
 *  - `award`, `hasCredential`: HAI states that its *partners* hold FAA and EASA
 *    certification, not HAI itself. That distinction is correct on the site and
 *    must not be blurred in schema.
 */
/**
 * THE authoritative Organization description — one definition, used everywhere
 * structured data describes the company.
 *
 * Deliberately capability-based. `siteConfig.description`, which drives the
 * visible meta descriptions, names specific airframes and engine series
 * ("Boeing and Airbus narrow- and widebody… CFM56, CF6, GE90… Trent"). Those
 * designations are the subject of an open management verification, so they must
 * not be asserted in machine-readable form until confirmed — schema is quoted
 * back by search and AI systems as fact far more readily than page copy is.
 *
 * Once scope is confirmed, this and `siteConfig.description` should be
 * reconciled to a single approved wording.
 */
export const organizationDescription =
  "Hemisphere Aerospace Investments is a commercial aerospace company that trades, converts, leases, finances, and technically manages commercial aircraft and engines for airlines, delivery services, lessors, and investors. Founded in 2018 and based in Waco, Texas.";

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: organizationDescription,
  foundingDate: String(siteConfig.foundedYear),
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/hai-logo-original.webp"),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ["North America", "South America", "Europe", "Africa", "Asia", "Oceania"],
    availableLanguage: "en",
  },
  // John B. Sawyer as founder is the one leadership fact on which the website
  // and every third-party profile agree, so it is safe to assert here.
  founder: {
    "@type": "Person",
    name: "John B. Sawyer",
    jobTitle: "Founder, Chief Executive Officer & Managing Partner",
  },
  areaServed: [
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Asia",
    "Australia and Oceania",
  ],
  // Capability terms only. Specific airframe and engine designations are
  // deliberately excluded pending the aircraft/engine scope verification.
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
} as const;

/** The WebSite entity. No SearchAction — the site has no internal search. */
export const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
} as const;

/** A WebPage node that references the shared Organization and WebSite. */
export function webPageLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
  };
}

/** BreadcrumbList. Pass the trail excluding Home, which is prepended. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** FAQPage built from the same array that renders the visible FAQ section. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Person nodes for the leadership page, derived from the same `team` array
 * that renders the visible bios. Titles and biographies are reproduced exactly
 * as published — this function never synthesizes credentials or tenure.
 */
export function teamPersonLd(team: readonly TeamMember[]) {
  return team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio[0],
    knowsAbout: member.expertise,
    url: `${absoluteUrl("/team")}#${slugifyName(member.name)}`,
    ...(member.photo ? { image: absoluteUrl(member.photo.src) } : {}),
    worksFor: { "@id": ORG_ID },
  }));
}

/** Stable anchor ids so individual leaders are directly linkable and citable. */
export function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Serialize a JSON-LD node for a <script type="application/ld+json"> tag. */
export function ld(node: unknown): string {
  return JSON.stringify(node);
}
