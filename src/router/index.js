import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'
import Schedule from '../views/schedule/Schedule.vue'
import Help from '../views/help/Help.vue'
import Member from '../views/member/Member.vue'
import Caregiver from '../views/caregiver/Caregiver.vue'

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
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Schedule
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/member",
      name: "member",
      component: Member
    },
    {
      path: "/caregiver",
      name: "caregiver",
      component: Caregiver
    }
  ]
});
