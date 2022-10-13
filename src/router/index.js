import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})

export default router
