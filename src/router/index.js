import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import PastWork from "../views/PastWork";
import Registration from "../views/Registration";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pastwork",
    name: "PastWork",
    component: PastWork,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      setTimeout(() => {
        const element = document.getElementById(to.hash.replace(/#/, ""));
        if (element && element.scrollIntoView) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, 500);
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
