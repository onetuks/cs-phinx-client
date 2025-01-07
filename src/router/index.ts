import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "홈페이지",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/manager",
    name: "백오피스",
    component: () => import("@/pages/manager/Manager.vue"),
  },
  {
    path: "/manager/problems",
    name: "문제 관리",
    component: () => import("@/pages/manager/problems/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/choices",
    name: "객관식",
    component: () => import("@/pages/manager/problems/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/shorts",
    name: "단답형",
    component: () => import("@/pages/manager/problems/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/descriptions",
    name: "서술형",
    component: () => import("@/pages/manager/problems/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/:problemId",
    name: "문제 상세 관리",
    component: () =>
      import("@/pages/manager/problems/ProblemDetailManager.vue"),
  },
  {
    path: "/manager/problems/registration",
    name: "문제 등록",
    component: () =>
      import("@/pages/manager/problems/ProblemRegisterManager.vue"),
  },
  {
    path: "/manager/workbooks",
    name: "문제집 관리",
    component: () => import("@/pages/manager/workbooks/WorkbooksManager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
