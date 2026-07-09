import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <div className="relative mt-16">
      {/* Connecting line (desktop) */}
      <div
        className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-azure-200 to-transparent lg:block"
        aria-hidden
      />
      <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} as="li" delay={index * 100} className="relative">
            <div className="flex items-center gap-4 lg:block">
              <span className="relative z-10 inline-flex size-16 shrink-0 items-center justify-center rounded-full border border-azure-200 bg-white font-display text-xl font-semibold text-azure-600 shadow-sm">
                {step.number}
                <span
                  className="absolute inset-0 rounded-full ring-1 ring-inset ring-white"
                  aria-hidden
                />
              </span>
              <h3 className="text-lg font-semibold text-navy-900 lg:mt-6">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 lg:pr-4">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
