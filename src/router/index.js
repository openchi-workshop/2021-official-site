import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    path: "/registration",
    name: "Registration",
    component: Registration,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
