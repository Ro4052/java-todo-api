<template>
    <ul :class="{ 'empty-list': todos.length === 0 }">
        <li v-for="todo of todos" :key="todo.id">
          <span :class="{ 'deleting': todo.deleting }">{{ todo.description }}</span>
          <button class="delete-button" @click="() => deleteTodo(todo.id)" :disabled="todo.deleting">
            &#10008;
          </button>
        </li>
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

  @Action
  private deleteTodo!: (id: number) => void;

  private mounted() {
    this.getTodos();
  }

  private onDeleteTodo(id: number) {
    this.deleteTodo(id);
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
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

li:not(:last-child) {
  border-bottom: black 1px dashed;
}

.empty-list {
  border-style: none;
}

.deleting {
  opacity: 0.8;
}

.delete-button {
  background-color: #ff2424;
}
</style>
