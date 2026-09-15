import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";
import { siteConfig, team } from "@/lib/site";
import {
  organizationLd,
  teamPersonLd,
  breadcrumbLd,
  absoluteUrl,
  slugifyName,
  ORG_ID,
  SITE_ID,
  ld,
} from "@/lib/schema";

const PAGE_DESCRIPTION =
  "The leadership of Hemisphere Aerospace Investments: proven executives across commercial aircraft trading, passenger-to-freighter conversions, engine programs, MRO operations, and aviation finance.";

export const metadata: Metadata = {
  title: "Leadership",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `Leadership | ${siteConfig.name}`,
    description: PAGE_DESCRIPTION,
    url: "/team",
    locale: "en_US",
  },
};

/** Monogram fallback for leaders whose approved headshot isn't available yet. */
function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  return `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();
}

/* ------------------------------------------------------------------ */
/* Structured data — derived from lib/schema.ts                        */
/* ------------------------------------------------------------------ */

/**
 * ProfilePage carrying the shared Organization with its employee roster
 * attached. The Person nodes are generated from the same `team` array that
 * renders the visible bios, so schema and page can never disagree.
 */
const profilePageLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/team")}#webpage`,
  url: absoluteUrl("/team"),
  name: `Leadership | ${siteConfig.name}`,
  description: PAGE_DESCRIPTION,
  inLanguage: "en-US",
  isPartOf: { "@id": SITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: {
    ...organizationLd,
    employee: teamPersonLd(team),
  },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld(profilePageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ld(breadcrumbLd([{ name: "Leadership", path: "/team" }])),
        }}
      />

      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Proven leaders in aviation trading &amp;{" "}
            <span className="text-gradient italic">finance</span>
          </>
        }
        description="HAI is led by seasoned professionals with deep experience across trading, MRO, portfolio management, and structured finance."
        image={images.officeDusk}
      />

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Our Team"
          title="The people behind HAI"
          description="Decades of combined expertise, focused on delivering results for every client."
        />

        <div className="mt-14 space-y-8">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 80}>
              {/* Stable anchor so an individual leader is directly linkable and
                  citable — matches the `url` on that Person node in schema. */}
              <article
                id={slugifyName(member.name)}
                className="scroll-mt-28 grid gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-float sm:p-8 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  {/* 5:4 matches the source frame, so the logo wall is never cropped. */}
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-navy-900 ring-1 ring-inset ring-white/10">
                    {member.photo ? (
                      <Image
                        src={member.photo.src}
                        alt={member.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 85vw, 80vw"
                        className="object-cover object-center"
                      />
                    ) : (
                      /* No approved headshot yet — monogram holds the frame. */
                      <div
                        role="img"
                        aria-label={`${member.name} — portrait not available`}
                        className="absolute inset-0 bg-grid"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_38%,rgba(79,151,229,0.20),transparent_72%)]" />
                        <span
                          className="absolute inset-0 flex items-center justify-center font-display text-gradient text-5xl sm:text-6xl"
                          /* Inline so it wins over .font-display's negative tracking. */
                          style={{ letterSpacing: "0.08em", textIndent: "0.08em" }}
                        >
                          {initials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold text-navy-900">{member.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-azure-600">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 lg:border-l lg:border-slate-100 lg:pl-10">
                  <div className="space-y-4 leading-relaxed text-slate-600">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-navy-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Work with a team that delivers"
        description="Have a conversion program, engine requirement, or transaction in mind? We'd like to hear about it."
        image={images.narrowbodyDusk}
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
