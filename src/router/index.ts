import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import publicRoutes from "./public";
import cashierRoutes from "./cashier";
import managerRoutes from "./manager";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    children: [...publicRoutes],
  },
  {
    path: "/",
    children: [...cashierRoutes],
  },
  {
    path: "/",
    children: [...managerRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
