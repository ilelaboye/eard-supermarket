import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/public/login.vue";
import Fpassword from "@/views/public/fpassword.vue";
import Otp from "@/views/public/otp.vue";
import Reset from "@/views/public/reset.vue";
import Layout from "@/views/dashboard/layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/f_password",
    name: "F_password",
    component: Fpassword,
  },
  {
    path: "/otp",
    name: "Otp",
    component: Otp,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
