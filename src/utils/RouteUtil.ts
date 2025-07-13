import router from "@/router";

export const RouteUtil = {
  isForRegistration: (): boolean => {
    const route = router.currentRoute.value;
    return route.fullPath.includes("/registration");
  },
  extractParam: (paramName: string): string => {
    const route = router.currentRoute.value;
    return route.params[paramName].toString();
  },
  moveToPage: (url: string) => {
    const route = router.currentRoute.value;
    if (route.fullPath === url) {
      location.reload();
      return;
    }
    router.push(url);
  },

  // For Manager
  moveToProblemManagerPage: () => RouteUtil.moveToPage("/manager/problems"),
  moveToProblemEditPage: (problemId: number) =>
    RouteUtil.moveToPage(`/manager/problems/${problemId}`),
  moveToProblemRegisterPage: () =>
    RouteUtil.moveToPage("/manager/problems/registration"),
  moveToWorkbookManagerPage: () => RouteUtil.moveToPage("/manager/workbooks"),
  moveToWorkbookEditPage: (workbookId: string) =>
    RouteUtil.moveToPage(`/manager/workbooks/${workbookId}`),
  moveToWorkbookRegisterPage: () =>
    RouteUtil.moveToPage("/manager/workbooks/registration"),

  // For Challenger
  moveToWorkbookPage: (workbookId: number) =>
    RouteUtil.moveToPage(`/challenger/workbooks/${workbookId}`),
  moveToProblemPage: (problemId: number) =>
    RouteUtil.moveToPage(`/challenger/problems/${problemId}`),
};
