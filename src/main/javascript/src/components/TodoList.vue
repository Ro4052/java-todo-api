<template>
    <ul :class="{ 'empty-list': todos.length === 0 }">
        <TodoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import TodoItem from './TodoItem.vue';
import Todo from '../entities/Todo';

@Component({
  components: {
    TodoItem
  }
})
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
  box-sizing: border-box;
}

.empty-list {
  border-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

li:not(:last-child) {
  border-bottom: black 1px dashed;
}
</style>
