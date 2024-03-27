<script setup lang="ts">
import CharacterCard from './CharacterCard.vue'
import type { Character } from '@/models/characters'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { page } from '../utils/page'
import { verifyPage } from '@/utils/verifyPage'
//const page = ref(1)
const characters = ref<Character[]>([])
const error = ref(null)
const loadData = () => {
  axios
    .get(`https://rickandmortyapi.com/api/character?page=${page.value}`)
    .then((response) => {
      characters.value = response.data.results
      verifyPage.value = response.data.info.pages
    })
    .catch((err) => (error.value = err.value))
}
const loadNameEp = (link: string) => {
  const name = ref('')
  axios
    .get(link)
    .then((response) => (name.value = response.data.name))
    .catch((err) => err)
  return name 
}
onMounted(() => {
  loadData()
  loadNameEp('')
})
watch(page, () => {
  loadData()
})
</script>
<template>
  <div>
    <div v-if="!error">
      <CharacterCard
        v-for="(Character, index) in characters"
        :key="index"
        :img="Character.image"
        :name="Character.name"
        :status="Character.status"
        :race="Character.species"
        :location="Character.location.name"
        :firAp="loadNameEp(Character.episode[0])"
      />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
