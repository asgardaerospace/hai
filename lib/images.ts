export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  heroEngineDusk: {
    src: "/images/hero-engine-dusk.webp",
    width: 1280,
    height: 854,
    alt: "Commercial jet engine and wing on the ramp at dusk",
  },
  engineNacelleHangar: {
    src: "/images/engine-nacelle-hangar.webp",
    width: 1280,
    height: 876,
    alt: "Open engine nacelle undergoing maintenance in a hangar",
  },
  engineShopRow: {
    src: "/images/engine-shop-row.webp",
    width: 1280,
    height: 960,
    alt: "Row of turbofan engines in an MRO facility",
  },
  turbofanBlades: {
    src: "/images/turbofan-blades.webp",
    width: 1280,
    height: 852,
    alt: "Close-up of turbofan engine fan blades",
  },
  narrowbodyTarmac: {
    src: "/images/narrowbody-tarmac.webp",
    width: 1280,
    height: 850,
    alt: "Narrow-body Boeing 737 on the tarmac with airstairs",
  },
  enginesOutdoorWide: {
    src: "/images/engines-outdoor-wide.webp",
    width: 1240,
    height: 620,
    alt: "Commercial engines on transport stands beside an aircraft",
  },
  haiOffice: {
    src: "/images/hai-office.webp",
    width: 600,
    height: 451,
    alt: "The Hemisphere Aerospace Investments office",
  },
  vvip737: {
    src: "/images/vvip-737-inflight.webp",
    width: 600,
    height: 451,
    alt: "VVIP-configured Boeing 737 climbing after takeoff",
  },
  freighterPrimeAir: {
    src: "/images/freighter-prime-air.webp",
    width: 600,
    height: 451,
    alt: "Converted narrow-body freighter on the ramp at night",
  },
} satisfies Record<string, ImageAsset>;

/** Which photo represents each service (keyed by slug). */
export const serviceImages: Record<string, ImageAsset> = {
  "passenger-to-freighter-conversions": images.freighterPrimeAir,
  "vvip-business-jet-retrofits": images.vvip737,
  "commercial-jet-engine-mro": images.engineShopRow,
  "aircraft-trading-leasing": images.narrowbodyTarmac,
  "portfolio-technical-services": images.engineNacelleHangar,
  "structured-finance": images.enginesOutdoorWide,
};
