import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/manager/layout.vue";
import Transactions from "@/views/manager/transactions.vue";
import Staff from "@/views/manager/staff.vue";
import M_Profile from "@/views/manager/profile.vue";
import Each_Staff from "@/views/manager/eachstaff.vue";

const managerRoutes: Array<RouteRecordRaw> = [
  {
    path: "/m-layout",
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
        name: "Each_Staff",
        component: Each_Staff,
      },
    ],
  },
];

export default managerRoutes;
