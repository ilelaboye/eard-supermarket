import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/cashier/layout.vue";
import Orders from "@/views/cashier/orders.vue";
import Order from "@/views/cashier/order.vue";
import Inventory from "@/views/cashier/product.vue";
import Profile from "@/views/cashier/profile.vue";

const cashierRoutes: Array<RouteRecordRaw> = [
  {
    path: "/c-layout",
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
