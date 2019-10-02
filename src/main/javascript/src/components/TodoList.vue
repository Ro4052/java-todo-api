<template>
    <ul :class="{ 'empty-list': todos.length === 0 }">
        <li v-for="todo of todos" :key="todo.id">{{ todo.description }}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import Todo from '../entities/Todo';

@Component
export default class TodoList extends Vue {
  @State
  private todos!: Todo[];

  @Action
  private getTodos!: () => void;

  private mounted() {
    this.getTodos();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 700px;
  margin: 20px auto;
  padding: 0 15px;
  border: 1px solid black;
  border-radius: 5px;
}

li {
  margin: 10px 0;
  font-size: 16px;
}

.empty-list {
  border-style: none;
}
</style>
