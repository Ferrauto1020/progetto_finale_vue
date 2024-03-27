<script setup lang="ts">
import { page } from '@/utils/page'
import { verifyPage } from '@/utils/verifyPage'
</script>
<template>
  <ul>
    <li><button @click="page--" :disabled="page <= 0">◄</button></li>
    <li>
      {{ page }}
    </li>
    <li><button @click="page++" :disabled="page >= verifyPage">►</button></li>
    <li><input type="number" v-model="page" /></li>
    <li><RouterLink to="/">See Character</RouterLink></li>
    <li><RouterLink to="/episode/">See Episode</RouterLink></li>
    <li><button @click="page = 0">page 1</button></li>
  </ul>
</template>
<style scoped lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0px;
  width: 100vh;
}

li {
  float: left;

  border-right: 1px solid #bbb;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:last-child {
  float: inline-end;
  border-right: none;
}
/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
.active {
  background-color: #04aa6d;
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
