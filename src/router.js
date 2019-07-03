import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MUpload from "./views/MUpload.vue";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mupload",
      name: "mupload",
      meta: {
        id: 333
      },
      component: MUpload
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
