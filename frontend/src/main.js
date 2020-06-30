import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import * as filters from "./utils/filters.js";
import axios from "axios";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
