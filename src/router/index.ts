import { createRouter, createWebHistory } from 'vue-router'
import CharacterComponent from '../components/CharacterComponent.vue'
import EpisodeComponent from '@/components/EpisodeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ ',
      name: 'home',
      component: CharacterComponent
    },
    {
      path: '/:episode',
      name: 'episode',
      component: EpisodeComponent
    }
  ]
})

export default router
