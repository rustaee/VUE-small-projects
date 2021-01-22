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
    component: ExpandingCards
  },
  {
    path: "/progress",
    name: "Progress",
    component: ProgressBar
  },
  {
    path: "/blur",
    name: "Blur",
    component: BluryImage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
