<script setup lang="ts">
import NavBar from '../src/components/NavBar.vue'

</script>

<template>

  <NavBar />
  
  <Suspense> <RouterView /></Suspense>
 
</template>

<style scoped></style>
