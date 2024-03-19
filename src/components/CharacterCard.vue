<script setup lang="ts">
defineProps({
  img: String,
  name: String,
  status: String,
  race: String,
  location: String,
  firAp: String
})
</script>

<template>
  <div class="container">
    <div class="containerInfo">
      <img :src="img" alt="404" />
    </div>
    <div class="containerInfo">
      <h1>{{ name }}</h1>
      <h2 v-if="status == 'unknown'">⚪{{ status }} - {{ race }}</h2>
      <h2 v-if="status == 'Alive'">🟢{{ status }} - {{ race }}</h2>
      <h2 v-if="status == 'Dead'">🔴{{ status }} - {{ race }}</h2>
      <p>last know location:</p>
      <p>{{ location }}</p>
      <p>First seen in:</p>
      <p>
        {{ firAp }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  color: white;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: rgb(60, 62, 68);
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
