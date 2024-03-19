<script setup lang="ts">
import CharacterCard from './CharacterCard.vue'
import type { Character } from '@/models/characters'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
const page = ref(1)
const characters = ref<Character[]>([])
const verifyPage = ref(42)
const loadData = () => {
  axios
    .get(`https://rickandmortyapi.com/api/character?page=${page.value}`)
    .then((response) => {
      characters.value = response.data.results
      verifyPage.value = response.data.info.pages
    })
    .catch((err) => err)
}
const loadNameEp = (link: string) => {
  const name = ref('')
  axios
    .get(link)
    .then((response) => (name.value = response.data.name))
    .catch((error) => error)
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
    <div class="c_page">
      <button :disabled="page <= 0" @click="page--">◄</button>
      <p>{{ page }}</p>
      <button :disabled="page >= 42" @click="page++">►</button>
      <input type="number" v-model="page" />
    </div>
    <div v-if="!err">
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
<style scoped lang="scss">
.c_page {
  display: flex;
  flex-direction: row;
}
button {
  width: 50px;
  height: 25px;
}
input {
  width: 40px;
  height: 25px;
}
</style>
