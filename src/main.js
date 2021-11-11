import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.styl";
import store from "./store/vuex.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faAngleRight,
  faChartLine,
  faCircleCheck,
  faGears,
  faMagnifyingGlass,
  faEllipsisVertical,
  faCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faAngleRight,
  faChartLine,
  faCircleCheck,
  faGears,
  faMagnifyingGlass,
  faEllipsisVertical,
  faCircle,
  faPlus
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("login-facilita")) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else if (localStorage.getItem("login-facilita")) {
    next({
      path: "/Tasks",
    }); // make sure to always call next()!
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
