export const RouteUtil = {
  isForRegistration: (route: any): boolean => {
    return route.path.includes("/registration");
  },
  extractParam: (route: any, paramName: string): string => {
    return route.params[paramName];
  },
};
