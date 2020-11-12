import Vue from "vue";
import App from "./App.vue";

import "modern-css-reset";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
