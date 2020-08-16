import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Article from "./components/Article/Article.vue";
import About from "./components/About/About.vue";
import Account from "./components/Account/Account.vue";

const routes = [
  { path: "/", component: Article },
  { path: "/about", component: About },
  { path: "/account", component: Account },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active-menu-link",
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
