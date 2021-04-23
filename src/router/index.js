import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PastWork from "../views/PastWork";

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
];

const router = new VueRouter({
  routes,
});

export default router;
