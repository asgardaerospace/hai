import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/sections/cta-band";
import { images } from "@/lib/images";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the leadership of Hemisphere Aerospace Investments — proven leaders across commercial aircraft trading, MRO, and aviation finance.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Proven leaders in aviation trading &amp;{" "}
            <span className="text-gradient">finance</span>
          </>
        }
        description="HAI is led by seasoned professionals with deep experience across trading, MRO, portfolio management, and structured finance."
        image={images.haiOffice}
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
              <article className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
                    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                    <div
                      className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-azure-500/25 blur-2xl"
                      aria-hidden
                    />
                    <span className="relative text-6xl font-bold tracking-tight text-white/95">
                      {member.initials}
                    </span>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold text-navy-900">
                      {member.name}
                    </h2>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Work with a team that delivers"
        description="Have a conversion program, engine requirement, or transaction in mind? We'd like to hear about it."
        image={images.narrowbodyTarmac}
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
