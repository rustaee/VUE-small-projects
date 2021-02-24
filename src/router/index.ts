import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import ProgressBar from "../pages/effects/ProgressBar.vue"
import ExpandingCards from "../pages/effects/ExpandingCards.vue"
import BluryImage from "../pages/games/BluryImage.vue"
import GamesHome from "../pages/games/GamesHome.vue"
import EffectsHome from "../pages/effects/EffectsHome.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/games",
    name : "Games",
    component: GamesHome,
    meta: {
      layout: 'game'
    }
  },
  {
    path: "/effects",
    name : "Effects",
    component: EffectsHome,
    meta: {
      layout: 'effect'
    }
  },
  {
    path: "/about",
    name: "About",
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
    component: () => import("@/pages/effects/ScrollAnimation.vue"),
    meta: {
      layout: 'effect'
    }
  },
  {
    path: "/dad-jokes",
    name: "Joke",
    component : () => import("@/pages/effects/DadJokes.vue"),
    meta: {
      layout: 'effect'
    }
  },
  {
    path: "/funiq",
    name: "IQ",
    component : () => import("@/pages/effects/FunIq.vue"),
    meta: {
      layout: 'effect'
    }
  }
  ,{
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
