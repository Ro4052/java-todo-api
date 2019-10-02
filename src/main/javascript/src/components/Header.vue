<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Java/Vue To Do App</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
div {
  background-color: #d8d8d8;
  margin: 0;
  padding: 40px 0;
  justify-content: center;
  display: flex;
}

img {
  height: 70px;
  width: 70px;
}

h1 {
  margin: 0;
  height: min-content;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
