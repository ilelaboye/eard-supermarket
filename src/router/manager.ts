import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/manager/layout.vue";
import Transactions from "@/pages/manager/transactions.vue"
import Staff from "@/pages/manager/staff.vue"
import M_Inventory from "@/pages/manager/product.vue"
import M_Profile from "@/pages/manager/profile.vue"
import Each_Staff from "@/pages/manager/eachstaff.vue"

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
        component:Staff,
      },
      
      {
        path: "/m_inventory",
        name: "Products",
        component: M_Inventory,
      },
      {
        path: "/m-profile",
        name: "Manager_Profile",
        component: M_Profile,
      },
      {
        path: "/each-staff",
        name: "Each_Staff",
        component:Each_Staff,
      },
     
    ]
  },
  
];



export default managerRoutes;