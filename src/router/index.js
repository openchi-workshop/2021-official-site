import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Registration from "../views/Registration";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
