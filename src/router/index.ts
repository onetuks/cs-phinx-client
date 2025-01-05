import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/manager",
    name: "Manager",
    component: () => import("@/views/manager/Manager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
