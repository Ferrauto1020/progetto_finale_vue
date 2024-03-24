<script setup lang="ts">
import CharacterComponent from './components/CharacterComponent.vue'
import EpisodeComponent from './components/EpisodeComponent.vue'
import NavBar from '../src/components/NavBar.vue'
/* import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
route.path = '/'
 */
</script>

<template>
  <!--   <RouterLink to="/">Home</RouterLink>
 -->
  <NavBar />
  <CharacterComponent />
  <!-- 
  <Suspense> <RouterView /></Suspense>
 -->
</template>

<style scoped></style>
