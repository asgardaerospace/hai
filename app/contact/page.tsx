import type { Metadata } from "next";
import { MapPin, EnvelopeSimple, Clock } from "@phosphor-icons/react/ssr";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Email ${siteConfig.email} or send us a message about conversions, engines, trading, or finance.`,
};

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: (
      <>
        {siteConfig.legalName}
        <br />
        {siteConfig.address.line1}
        <br />
        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
      </>
    ),
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: (
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-azure-600 hover:text-azure-700"
      >
        {siteConfig.email}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Response time",
    value: "We typically respond within one business day.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-gradient">connect</span>
          </>
        }
        description="Whether you're expanding freight capacity, sourcing engines, or structuring your next transaction, we'd like to hear about it."
        image={images.narrowbodyTarmac}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="We'd like to hear from you"
              description="Reach out directly or send a message and a member of the HAI team will respond promptly."
            />
            <div className="mt-8 space-y-4">
              {details.map((item, index) => (
                <Reveal key={item.label} delay={index * 70}>
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100">
                      <item.icon weight="duotone" className="size-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-500">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-navy-800">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={80}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(14,44,84,0.45)] sm:p-8">
              <h2 className="text-xl font-semibold text-navy-900">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill out the form and we&apos;ll be in touch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
