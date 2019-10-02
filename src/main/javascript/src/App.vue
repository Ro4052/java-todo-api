<template>
  <Header />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
