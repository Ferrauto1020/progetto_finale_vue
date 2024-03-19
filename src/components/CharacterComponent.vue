<script setup lang="ts">.
import CharacterCard from './CharacterCard.vue'
import type { Character } from '@/models/characters'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
const page = ref(1)
const characters = ref<Character[]>([])
let verifyPage = ref(42)
const loadData = () => {
  axios
    .get(`https://rickandmortyapi.com/api/character?page=${page.value}`)
    .then((response) => {
      characters.value = response.data.results
      verifyPage.value = response.data.info.pages
    })
    .catch((err) => err)
}

onMounted(() => {
  loadData()
})
watch(page, () => {
  loadData()
})
</script>
<template>
  <div class="container">
    <div>
      <button :disabled="page <= 0" @click="page--">prev page</button>
      <p>{{ page }}</p>
      <button :disabled="page >= 42" @click="page++">next page</button>
    </div>
    <div v-if="!err">
      <CharacterCard
        v-for="(Character, index) in characters"
        :key="index"
        :img="Character.image"
        :name="Character.name"
        :status="Character.status"
        :race="Character.species"
        :location="Character.origin.name"
        :firAp="Character.episode[0]"
      />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
