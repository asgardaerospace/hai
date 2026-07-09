import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { regions, metrics } from "@/lib/site";

export function GlobalReach() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28 noise">
      <div className="absolute inset-0 bg-blueprint opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-azure-500/15 blur-[120px] animate-aurora"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Global Reach"
              title={
                <>
                  A worldwide network,{" "}
                  <span className="text-gradient italic font-display">moving assets</span>{" "}
                  where they&apos;re needed
                </>
              }
              description="From sourcing and acquisition to conversion, overhaul, and delivery, HAI connects airlines, lessors, and investors across every major aviation market."
            />
            <Reveal delay={140}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-navy-100/80 backdrop-blur-sm transition-colors hover:border-azure-400/40 hover:text-white"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={120} className="relative">
            <GlobeGraphic />
          </Reveal>
        </div>

        {/* Metrics band */}
        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/12 pt-12 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-display text-4xl font-medium text-white sm:text-5xl">
                  <Counter value={metric.value} />
                </dt>
                <dd className="mt-2 text-sm leading-snug text-navy-100/60">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

/** A stylized, self-contained globe-and-network graphic. Pure SVG + SMIL. */
function GlobeGraphic() {
  const nodes = [
    { cx: 120, cy: 112 },
    { cx: 286, cy: 96 },
    { cx: 330, cy: 208 },
    { cx: 250, cy: 300 },
    { cx: 96, cy: 250 },
    { cx: 200, cy: 52 },
  ];
  const arcs = [
    "M120,112 Q235,40 330,208",
    "M96,250 Q210,150 286,96",
    "M250,300 Q330,180 200,52",
    "M120,112 Q120,250 250,300",
  ];

  return (
    <div className="mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Global network of aviation markets">
        <defs>
          <radialGradient id="globeFill" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#1f4478" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#0a1e3a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#061225" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7fb6f1" />
            <stop offset="100%" stopColor="#2f80d6" stopOpacity="0.2" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Globe body */}
        <circle cx="200" cy="200" r="150" fill="url(#globeFill)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#4f97e5" strokeOpacity="0.25" strokeWidth="1" />

        {/* Rotating meridians / latitudes */}
        <g
          style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
          className="animate-spin-slow"
        >
          <ellipse cx="200" cy="200" rx="60" ry="150" fill="none" stroke="#4f97e5" strokeOpacity="0.18" />
          <ellipse cx="200" cy="200" rx="115" ry="150" fill="none" stroke="#4f97e5" strokeOpacity="0.12" />
          <line x1="50" y1="200" x2="350" y2="200" stroke="#4f97e5" strokeOpacity="0.14" />
          <path d="M64,138 H336" stroke="#4f97e5" strokeOpacity="0.10" />
          <path d="M64,262 H336" stroke="#4f97e5" strokeOpacity="0.10" />
        </g>

        {/* Connection arcs with flowing dash */}
        {arcs.map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#arcStroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 8"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-96"
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Nodes with pulsing halo */}
        {nodes.map((n, i) => (
          <g key={`${n.cx}-${n.cy}`} filter="url(#soft)">
            <circle cx={n.cx} cy={n.cy} r="3.5" fill="#7fb6f1" />
            <circle cx={n.cx} cy={n.cy} r="3.5" fill="none" stroke="#7fb6f1" strokeWidth="1.5">
              <animate attributeName="r" from="3.5" to="14" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
