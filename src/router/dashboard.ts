import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/dashboard/layout.vue";
import Orders from "@/pages/dashboard/orders.vue"
import Product from "@/pages/dashboard/product.vue"
import Profile from "@/pages/dashboard/profile.vue"

const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "/orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "/product",
        name: "Product",
        component: Product,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
    ]
  },
  
];



export default dashboardRoutes;