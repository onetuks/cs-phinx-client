import router from "@/router";

export const ManagerRouterUtil = {
  moveToProblemManagerPage: () => router.push("/manager/problems"),
  moveToProblemEditPage: (problemId: number) =>
    router.push(`/manager/problems/${problemId}`),
  moveToProblemRegisterPage: () =>
    router.push("/manager/problems/registration"),
  moveToWorkbookManagerPage: () => router.push("/manager/workbooks"),
  moveToWorkbookEditPage: (workbookId: string) =>
    router.push(`/manager/workbooks/${workbookId}`),
  moveToWorkbookRegisterPage: () =>
    router.push("/manager/workbooks/registration"),
};
