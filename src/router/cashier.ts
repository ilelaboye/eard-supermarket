import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/dashboard/layout.vue";
import Orders from "@/views/dashboard/cashier/orders.vue";
import Order from "@/views/dashboard/cashier/order.vue";
import Inventory from "@/views/dashboard/common/products.vue";
import Profile from "@/views/dashboard/cashier/profile.vue";

const cashierRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "/order/:id",
        name: "Order",
        component: Order,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/inventory",
        component: Inventory,
        name: "Inventory",
      },
    ],
  },
];

export default cashierRoutes;
