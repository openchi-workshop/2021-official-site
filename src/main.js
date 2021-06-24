import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faArrowLeft,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueGtag from 'vue-gtag';
import VueLazyload from 'vue-lazyload';
import VueMeta from 'vue-meta';
import { LayoutPlugin, NavbarPlugin } from "bootstrap-vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/styles/custom.scss';
import 'normalize.css/normalize.css';

library.add([faArrowRight, faArrowLeft, faArrowUp]);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)

Vue.use(VueLazyload, {
  lazyComponent: true,
});

Vue.use(VueMeta);
Vue.use(
  VueGtag,
  {
    config: { id: 'UA-79130055-3' },
  },
  router
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
