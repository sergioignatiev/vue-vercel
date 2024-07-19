import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/:id',
      name: 'id',
      
      component: () => import('../views/IdView.vue')
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      
      component: () => import('../views/LeaderboardView.vue')
    },
  ]
})

export default router
