<template>
    <ul :class="{ 'empty-list': todos.length === 0 }">
        <li v-for="todo of todos" :key="todo.id">
          <span :class="{ 'loading': todo.loading, 'completed': todo.completed }">{{ todo.description }}</span>
          <div>
            <button :class="`${todo.completed ? 'revert' : 'complete'}-button`" @click="() => toggleCompleteTodo(todo)">
              {{ todo.completed ? '&#10094;' : '&#10003;' }}
            </button>
            <button class="delete-button" @click="() => deleteTodo(todo.id)" :disabled="todo.loading">
              &#10008;
            </button>
          </div>
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
  private toggleCompleteTodo!: (todo: Todo) => void;

  @Action
  private deleteTodo!: (id: number) => void;

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
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

li:not(:last-child) {
  border-bottom: black 1px dashed;
}

span {
  height: min-content;
  align-self: center;
}

.empty-list {
  border-style: none;
}

.loading {
  opacity: 0.8;
}

button {
  height: 25px;
  width: 25px;
}

.completed {
  text-decoration: line-through;
}

.complete-button, .revert-button {
  margin-right: 5px;
}

.complete-button {
  background-color: #1da91d;
}

.revert-button {
  background-color: #5791d4;
}

.delete-button {
  background-color: #ff2424;
}
</style>
