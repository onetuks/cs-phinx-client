export const SideBarMainTabs = {
  WORKBOOK_MANAGEMENT: {
    path: "/manager/workbooks",
    name: "문제집 관리",
  },
  PROBLEM_MANAGEMENT: {
    path: "/manager/problems",
    name: "문제 관리",
  },
  USER_MANAGEMENT: {
    path: "/manager/users",
    name: "사용자 관리",
  },
  QUESTION_MANAGEMENT: {
    path: "/manager/questions",
    name: "질문 관리",
  },
} as const;

export const SideBarSubTabs = {
  CHOICE_PROB_MANAGEMENT: {
    path: "/manager/problems/choices",
    name: "객관식",
  },
  SHORT_PROB_MANAGEMENT: {
    path: "/manager/problems/shorts",
    name: "단답형",
  },
  DESCRIPTION_MANAGEMENT: {
    path: "/manager/problems/descriptions",
    name: "서술형",
  },
} as const;

export type SideBarMainTabKey = keyof typeof SideBarMainTabs;
export type SideBarSubTabKey = keyof typeof SideBarSubTabs;
export type SideBarMainTab = (typeof SideBarMainTabs)[SideBarMainTabKey];
export type SideBarSubTab = (typeof SideBarSubTabs)[SideBarSubTabKey];
