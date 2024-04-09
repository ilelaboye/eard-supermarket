import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/cashier/layout.vue";
import C_Orders from "@/pages/cashier/orders.vue"
import C_Order from "@/pages/cashier/order.vue"
import C_Inventory from "@/pages/cashier/product.vue"
import C_Profile from "@/pages/cashier/profile.vue"

const cashierRoutes: Array<RouteRecordRaw> = [
  {
    path: "/c-layout",
    component: Layout,
    children: [
      {
        path: "/c-orders",
        name: "Orders",
        component: C_Orders,
      },
      {
        path: "/c-order",
        name: "Order",
        component: C_Order,
      },
      {
        path: "/c_inventory",
        name: "Inventory",
        component: C_Inventory,
      },
      {
        path: "/c_profile",
        name: "Profile",
        component: C_Profile,
      },
    ]
  },
  
];



export default cashierRoutes;