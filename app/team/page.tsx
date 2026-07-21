import type { Metadata } from "next";
import Image from "next/image";
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
    "Meet the leadership of Hemisphere Aerospace Investments, proven leaders across commercial aircraft trading, MRO, and aviation finance.",
};

export default function TeamPage() {
  return (
    <>
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
              <article className="grid gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-float sm:p-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  {/* 5:4 matches the source frame, so the logo wall is never cropped. */}
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-navy-900 ring-1 ring-inset ring-white/10">
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 85vw, 80vw"
                      className="object-cover object-center"
                    />
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
