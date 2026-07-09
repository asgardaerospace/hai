import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { ServiceIcon } from "@/components/service-icon";
import { SpotlightCard } from "@/components/spotlight-card";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 70} className="h-full">
      <SpotlightCard className="group h-full rounded-2xl">
        <Link
          href={`/services#${service.slug}`}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-azure-200 hover:shadow-float"
        >
          {/* Ghost number */}
          <span className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-semibold text-slate-100 transition-colors duration-500 group-hover:text-azure-50">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100 transition-all duration-500 group-hover:scale-105 group-hover:bg-azure-500 group-hover:text-white group-hover:ring-azure-500 group-hover:shadow-lg group-hover:shadow-azure-500/30">
            <ServiceIcon icon={service.icon} className="size-7" weight="duotone" />
          </div>

          <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
            {service.short}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600">
            Learn more
            <ArrowUpRight
              weight="bold"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>

          {/* Bottom accent line grows on hover */}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azure-500 to-azure-300 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            aria-hidden
          />
        </Link>
      </SpotlightCard>
    </Reveal>
  );
}
