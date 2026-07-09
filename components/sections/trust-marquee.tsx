import { Marquee } from "@/components/marquee";
import { marqueeItems } from "@/lib/site";

export function TrustMarquee() {
  return (
    <section className="relative border-y border-slate-200/70 bg-white py-7">
      <div className="mx-auto mb-5 max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-steel-500">
          Specialized fleet &amp; certified standards
        </p>
      </div>
      <Marquee>
        {marqueeItems.map((item) => (
          <span key={item} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-display text-xl font-medium text-navy-800/90 sm:text-2xl">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-gold-500/70" aria-hidden />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
