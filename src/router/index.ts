import { createRouter, createWebHistory } from 'vue-router'
import CharacterComponent from '../components/CharacterComponent.vue'
import EpisodeComponent from '@/components/EpisodeComponent.vue'
import TestComponent from '@/components/TestComponent.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: CharacterComponent
  },
  {
    path: '/episode',
    name: 'episode',
    component: EpisodeComponent
  },
  {
    path: '/test',
    name: 'test',
    component: TestComponent
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
