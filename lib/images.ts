export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Bespoke, cinematically color-graded aerospace imagery — a cohesive set shot in
 * a single deep-navy / warm-amber palette so the whole site reads like one
 * commissioned photoshoot. Optimized WebP under public/images/.
 */
export const images = {
  heroCinematic: {
    src: "/images/hero-cinematic.webp",
    width: 2560,
    height: 1429,
    alt: "A commercial narrow-body jet airliner on a rain-slicked airport ramp at blue-hour dusk",
  },
  widebodyDusk: {
    src: "/images/widebody-dusk.webp",
    width: 2400,
    height: 1340,
    alt: "A widebody airliner on a runway amid low ground fog at dusk, a city skyline glowing behind",
  },
  turbofanHangar: {
    src: "/images/turbofan-hangar.webp",
    width: 1600,
    height: 1195,
    alt: "A commercial turbofan engine on a maintenance stand under dramatic light in a dark hangar",
  },
  mroFacility: {
    src: "/images/mro-facility.webp",
    width: 1600,
    height: 1195,
    alt: "A row of turbofan engines on maintenance stands in a modern, softly lit MRO facility",
  },
  freighterNight: {
    src: "/images/freighter-night.webp",
    width: 1600,
    height: 1195,
    alt: "A converted narrow-body freighter with its main-deck cargo door open on a wet ramp at night",
  },
  vvipCabin: {
    src: "/images/vvip-cabin.webp",
    width: 1600,
    height: 1195,
    alt: "A luxurious VVIP business-jet cabin with cream leather seats and polished walnut veneer",
  },
  narrowbodyDusk: {
    src: "/images/narrowbody-dusk.webp",
    width: 1600,
    height: 1195,
    alt: "A narrow-body airliner parked on the tarmac with airstairs deployed at golden-hour dusk",
  },
  nacelleDetail: {
    src: "/images/nacelle-detail.webp",
    width: 1600,
    height: 1195,
    alt: "A close-up of an open engine nacelle undergoing detailed technical inspection",
  },
  jetSilhouette: {
    src: "/images/jet-silhouette.webp",
    width: 1600,
    height: 1195,
    alt: "A commercial jet in dramatic silhouette against a sweeping twilight sky",
  },
  officeDusk: {
    src: "/images/office-dusk.webp",
    width: 1600,
    height: 1195,
    alt: "A modern aerospace-investment office at dusk overlooking an airfield with a parked jet",
  },

  // Real HAI operations photography (used on specific service cards only).
  spacexJet: {
    src: "/images/spacex-jet.webp",
    width: 1600,
    height: 1195,
    alt: "A silver executive Boeing 737 with a black SpaceX tail climbing out after takeoff",
  },
  engineFan: {
    src: "/images/engine-fan.webp",
    width: 1600,
    height: 1195,
    alt: "A close-up of a commercial turbofan's fan and core stages during technical inspection",
  },
  spacexCowl: {
    src: "/images/spacex-cowl.webp",
    width: 1600,
    height: 1195,
    alt: "A freshly finished gloss-black engine cowl bearing the SpaceX wordmark in a hangar",
  },
} satisfies Record<string, ImageAsset>;

/** Poster frame for the hero video (first frame of the loop). */
export const heroPoster = images.heroCinematic;

/** Which photo represents each service (keyed by slug). */
export const serviceImages: Record<string, ImageAsset> = {
  "passenger-to-freighter-conversions": images.freighterNight,
  "vvip-business-jet-retrofits": images.vvipCabin,
  "commercial-jet-engine-mro": images.turbofanHangar,
  "aircraft-trading-leasing": images.spacexJet,
  "portfolio-technical-services": images.engineFan,
  "structured-finance": images.jetSilhouette,
};
