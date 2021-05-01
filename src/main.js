import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue } from "bootstrap-vue";
import VueLazyload from "vue-lazyload";

import "@/assets/styles/custom.scss";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add([faArrowRight, faArrowLeft, faArrowUp]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueLazyload, {
  lazyComponent: true,
  loading:
    "https://storage.googleapis.com/openhci2021-storage/home-page/banner_small_size.png",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
