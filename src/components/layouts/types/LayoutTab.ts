export const LayoutTabs = {
  COLLECTION: {
    path: "/collections",
    name: "모음집",
  },
  ANALYSIS: {
    path: "/analysis",
    name: "결과진단",
  },
} as const;

export type LayoutTabKey = keyof typeof LayoutTabs;
export type LayoutTab = (typeof LayoutTabs)[LayoutTabKey];
