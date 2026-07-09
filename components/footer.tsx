import Link from "next/link";
import { MapPin, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { siteConfig, navLinks, services } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-azure-500/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo tone="onDark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-100/70">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-navy-100/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-azure-400" weight="duotone" aria-hidden />
                <span className="text-navy-100/70">
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <EnvelopeSimple className="mt-0.5 size-5 shrink-0 text-azure-400" weight="duotone" aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-1 text-navy-100/70 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-navy-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All Rights Reserved.
          </p>
          <p>
            Global provider of commercial aircraft &amp; engine trading assets.
          </p>
        </div>
      </Container>
    </footer>
  );
}
