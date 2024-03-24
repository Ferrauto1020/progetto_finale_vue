<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';

defineProps({
  name: String,
  air_date: String,
  episode: String,
  created: String,
  characters: Array<String>,
})
</script>

<template>
  <div class="divider">
    <div class="container">
      <div class="containerInfo">
        <h1>{{ name }}</h1>
        <p>air date:</p>
        <p>{{ air_date }}</p>
        <p>episode:</p>
        <p>{{ episode }} - {{ created }}</p>
      </div>
      <div>
        <p v-for="(chars,index) in characters" :key="index">{{ chars }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.divider {
  padding: 15px 16px;
}
.container {
  display: flex;
  flex-direction: row;
  color: white;
  width: 700px;
  height: 325px;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: rgb(60, 62, 68);
  padding: 10px 15px;
}
.containerInfo {
  padding: 2px 16px;
  width: 50%;
  height: 100%;
}
img {
  border-radius: 5px 5px 0 0;
}
</style>
