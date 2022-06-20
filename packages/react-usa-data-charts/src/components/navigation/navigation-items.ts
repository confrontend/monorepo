import { INavigation } from "@confrontend/ui-components/src/components/navigation/navigation.types";

/**
 * List of items in navigation bar.
 * Each items includes a displayName, a route destination and a lazy loading import method
 */
export const navMenuItems: INavigation[] = [
  {
    displayName: "Tax",
    route: "/tax",
    // Tax is prefetched. See also [const Tax](./src/App.tsx)
    lazyLoadComponent: async() => null,
  },
  {
    displayName: "Life Quality",
    route: "/life-quality",
    lazyLoadComponent: () => import("../../pages/life-quality/life-quality"),
  },
  {
    displayName: "Weather",
    route: "/weather",
    lazyLoadComponent: () => import("../../pages/weather/weather"),
  },
  {
    displayName: "Demography",
    route: "/demography",
    lazyLoadComponent: () => import("../../pages/demography/demography"),
  },
];
