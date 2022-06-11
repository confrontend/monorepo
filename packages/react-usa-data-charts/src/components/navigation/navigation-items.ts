/**
 * List of items in navigation bar.
 * Each items includes a displayName, a route destination and a lazy loading import method
 */
export const navMenuItems = [
  {
    displayName: "Tax",
    to: "/tax",
    // Tax is prefetched. See also [const Tax](./src/App.tsx)
    loadComponent: () => null,
  },
  {
    displayName: "Life Quality",
    to: "/life-quality",
    loadComponent: () => import("../../pages/life-quality/life-quality"),
  },
  {
    displayName: "Weather",
    to: "/weather",
    loadComponent: () => import("../../pages/weather/weather"),
  },
  {
    displayName: "Demography",
    to: "/demography",
    loadComponent: () => import("../../pages/demography/demography"),
  },
];
