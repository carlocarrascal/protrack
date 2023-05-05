import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";

const routes = [
    {
      meta: {
        title: "Home Page",
      },
      path: "/",
      name: "login",
      component: Login,
    },
    {
      // Document title tag
      // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
      meta: {
        title: "Dashboard",
      },
      path: "/dashboard",
      name: "dashboard",
      component: Home,
    },
   
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { top: 0 };
    },
  });
  
  export default router;