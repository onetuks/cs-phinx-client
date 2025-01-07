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
    component: () => import("@/pages/manager/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/choices",
    name: "객관식",
    component: () => import("@/pages/manager/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/shorts",
    name: "단답형",
    component: () => import("@/pages/manager/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/descriptions",
    name: "서술형",
    component: () => import("@/pages/manager/ProblemsManager.vue"),
  },
  {
    path: "/manager/problems/:problemId",
    name: "문제 상세 관리",
    component: () => import("@/pages/manager/ProblemDetailManager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
