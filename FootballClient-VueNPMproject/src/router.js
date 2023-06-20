import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      alias: "/",
      name: "homeComponent",
      component: () => import("./components/HomeComponent")
    },
    {
      path: "/player",
      name: "playerComponent",
      component: () => import("./components/PlayerComponent")
    },
    {
      path: "/team",
      name: "teamComponent",
      component: () => import("./components/TeamComponent")
    }
  ]
});