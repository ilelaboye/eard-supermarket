import { RouteRecordRaw } from "vue-router";
import Login from "@/views/public/login.vue";
import F_password from "@/views/public/fpassword.vue";
import Otp from "@/views/public/otp.vue";
import Reset from "@/views/public/reset.vue";

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/forget-password",
    name: "F_password",
    component: F_password,
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
];

export default publicRoutes;
