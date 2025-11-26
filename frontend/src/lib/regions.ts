export interface RegionConfig {
  id: string;
  name: string;
  maxBounds: [number, number, number, number];
  /** starting position [lng, lat] */
  startCoord: [number, number];
  /** starting zoom */
  startZoom: number;
  headTags: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const REGIONS: RegionConfig[] = [
  {
    id: "sydney",
    name: "Sydney",
    startCoord: [151.0409, -33.8455],
    maxBounds: [149.536285, -34.927346, 152.571173, -32.231172],
    startZoom: 10.5,
    headTags: {
      title: "SydneyBikeMap: Map of cycle paths in Sydney",
      description:
        "🚲️ Your guide to Sydney’s cycle network — See safe routes to ride in Sydney including separated cycleways, shared paths, cycleways under construction, planned cycleways and more.",
      ogImage: "https://bikemap.carto.au/og-image-sydney.png",
    },
  },
  {
    id: "melbourne",
    name: "Melbourne",
    startCoord: [144.9616, -37.7452],
    maxBounds: [142.8513, -39.2154, 146.8921, -36.1339],
    startZoom: 10.5,
    headTags: {
      title: "MelbourneBikeMap: Map of cycle paths in Melbourne",
      description:
        "🚲️ Your guide to Melbourne’s cycle network — See safe routes to ride in Melbourne including separated cycleways, shared paths, cycleways under construction, planned cycleways and more.",
      ogImage: "https://bikemap.carto.au/og-image-melbourne.png",
    },
  },
  {
    id: "brisbane",
    name: "Brisbane",
    startCoord: [153.0085, -27.4631],
    maxBounds: [151.494, -28.4828, 154.5678, -26.2241],
    startZoom: 10.5,
    headTags: {
      title: "BrisbaneBikeMap: Map of cycle paths in Brisbane",
      description:
        "Your guide to Brisbane’s cycle network — See safe routes to ride in Brisbane including separated cycleways/bikeways, shared paths, cycleways under construction, planned cycleways and more.",
      ogImage: "https://bikemap.carto.au/og-image-brisbane.png",
    },
  },
  {
    id: "canberra",
    name: "Canberra",
    startCoord: [149.0828, -35.2961],
    maxBounds: [148.2625, -36.1672, 149.8707, -34.6724],
    startZoom: 10.5,
    headTags: {
      title: "CanberraBikeMap: Map of cycle paths in Canberra",
      description:
        "🚲️ Your guide to Canberra’s cycle network — See safe routes to ride in Canberra including separated cycleways, shared paths, cycleways under construction, planned cycleways and more.",
      ogImage: "https://bikemap.carto.au/og-image-canberra.png",
    },
  },
];
