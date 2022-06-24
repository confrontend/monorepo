export interface INavigation {
  displayName: string;
  route: string;
  lazyLoadComponent: () => Promise<any>;
}
