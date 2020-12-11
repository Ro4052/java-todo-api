<template>
  <li>
    <span :class="{ 'loading': todo.loading, 'completed': todo.completed }">{{ todo.description }}</span>
    <div>
      <button
        :class="`${todo.completed ? 'revert' : 'complete'}-button`"
        @click="() => toggleCompleteTodo(todo)"
        :disabled="todo.loading"
      >
        {{ todo.completed ? '&#10094;' : '&#10003;' }}
      </button>
      <button class="delete-button" @click="() => deleteTodo(todo.id)" :disabled="todo.loading">
        &#10008;
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import Todo from '../entities/Todo';

@Component
export default class TodoList extends Vue {
  @Prop({ type: Todo, required: true })
  todo!: Todo;

  @Action
  private toggleCompleteTodo!: (todo: Todo) => void;

  @Action
  private deleteTodo!: (id: number) => void;
}
</script>

<style scoped>
span {
  height: min-content;
  align-self: center;
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
