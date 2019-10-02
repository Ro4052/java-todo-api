<template>
  <div>
    <Header />
    <TodoList />
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

@Component({
  components: {
    Header,
    TodoList,
    TodoInput,
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
  font-size: 16px;
}
</style>
