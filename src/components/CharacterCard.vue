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
      <h2>{{ status }} - {{ race }}</h2>
      <p>{{ location }}</p>
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
}
.containerInfo {
  width: 50%;
  height: 100%;
}
</style>
