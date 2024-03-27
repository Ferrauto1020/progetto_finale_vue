<script setup lang="ts">
import EpisodeCard from './EpisodeCard.vue'
import type { Episode } from '../models/Episode'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import { verifyPage } from '../utils/verifyPage'
import { page } from '../utils/page'
const episodes = ref<Episode[]>([])
const error = ref(null)
const loadData = () => {
  axios
    .get(`https://rickandmortyapi.com/api/episode?page=${page.value}`)
    .then((response) => {
      episodes.value = response.data.results
      verifyPage.value = response.data.info.pages
    })
    .catch((err) => (error.value = err.value))
}

const getBySingleLink = (link: string) => {
  const name = ref('ciao')
  /* axios
    .get(link)
    .then((response) => (name.value = response.data.name))
    .catch((error) => error)
   */ return name.value
}
const loadNameChar = (link: string[]) => {
  link.map((element) => (element = getBySingleLink(element)))
  console.log(link)
  console.log(name)
  return link
}
onMounted(() => {
  loadData()
})
watch(page, () => {
  loadData()
})
</script>
<template>
  <div>
    <div v-if="!error">
      <EpisodeCard
        v-for="(episode, index) in episodes"
        :key="index"
        :name="episode?.name"
        :episode="episode?.episode"
        :air_date="episode?.air_date"
        :created="episode.created"
        :characters="loadNameChar(episode.characters)"
      />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
