import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'


export const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
});
