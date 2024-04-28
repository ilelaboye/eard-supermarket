import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/dashboard/layout.vue";
import Transactions from "@/views/dashboard/manager/transactions.vue";
import Staff from "@/views/dashboard/manager/staff.vue";
import M_Profile from "@/views/dashboard/manager/profile.vue";
import Each_Staff from "@/views/dashboard/manager/eachstaff.vue";

const managerRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/transactions",
        name: "Transactions",
        component: Transactions,
      },
      {
        path: "/staff",
        name: "Staffs",
        component: Staff,
      },
      {
        path: "/m-profile",
        name: "Manager_Profile",
        component: M_Profile,
      },
      {
        path: "/each-staff",
        name: "View Staff",
        component: Each_Staff,
      },
    ],
  },
];

export default managerRoutes;
