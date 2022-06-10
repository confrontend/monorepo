import { createContext, useContext } from "react";

export type CacheDataType = {
  taxData?: any;
  // TODO add other pages
};

export type CacheContextType = {
  cachedData: CacheDataType;
  setCachedData: (param: CacheDataType) => void;
};

const CacheContext = createContext<CacheContextType>({
  cachedData: { taxData: {} },
  setCachedData: (dataToBeCached: CacheDataType) => null,
});

/**
 * Global cached data provider. It act as a simple Redux-Like Store.
 * App Route Outlet is wrapped by this provider.
 * The goal is to fetch data only once in the App lifecycle. So that even by unmounting the component, its state persist.
 * If live data from the backend is required, a force refresh should be implemented in each Page later.
 */
export const CacheContextProvider = CacheContext.Provider;

/**
 * Each component can opt-in a caching mechanism by using this custom hook.
 * @returns context for CacheContextProvider
 */
export const useCacheContext = (): CacheContextType => useContext(CacheContext);
