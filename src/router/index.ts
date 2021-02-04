import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import ProgressBar from "../pages/ProgressBar.vue"
import ExpandingCards from "../pages/ExpandingCards.vue"
import BluryImage from "../pages/BluryImage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    //redirect: "/expandingcards",
    meta: {
      layout: 'intro'
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue")
  },
  {
    path: "/expandingcards",
    component: ExpandingCards,
    meta:{
      layout: 'effect'
    }
  },
  {
    path: "/progress",
    name: "Progress",
    component: ProgressBar,
    meta: {
      layout: 'effect'
    }
  },
  {
    path: "/blur",
    name: "Blur",
    component: BluryImage,
    meta: {
      layout: 'game'
    }
  },
  {
    path: "/scrollanimation",
    name: "Scroll",
    component: () => import("@/pages/ScrollAnimation.vue"),
    meta: {
      layout: 'effect'
    }
  },

  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/pages/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
