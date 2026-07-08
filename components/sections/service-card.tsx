import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 70} className="h-full">
      <Link
        href={`/services#${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-azure-200 hover:shadow-[0_24px_60px_-24px_rgba(14,44,84,0.28)]"
      >
        {/* Ghost number */}
        <span className="pointer-events-none absolute right-5 top-4 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-azure-50">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-navy-50 text-azure-600 ring-1 ring-inset ring-navy-100 transition-colors duration-300 group-hover:bg-azure-500 group-hover:text-white group-hover:ring-azure-500">
          <ServiceIcon icon={service.icon} className="size-7" weight="duotone" />
        </div>

        <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {service.short}
        </p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600">
          Learn more
          <ArrowRight
            weight="bold"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </Link>
    </Reveal>
  );
}
