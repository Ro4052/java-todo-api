<template>
  <li>
    <InputSpan
      :class="{ 'loading': todo.loading, 'completed': todo.completed }"
      :text="todo.description"
      :loading="todo.loading"
      :onSubmit="getHandleSubmit(todo)"
    />
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

import InputSpan from './InputSpan.vue';
import { UpdateDescriptionPayload } from '../store/update';
import Todo from '../entities/Todo';

@Component({
  components: {
    InputSpan
  }
})
export default class TodoList extends Vue {
  @Prop({ required: true })
  private todo!: Todo;

  @Action
  private toggleCompleteTodo!: (todo: Todo) => void;

  @Action
  private deleteTodo!: (id: number) => void;

  @Action
  private updateTodoDescription!: ({ todo, newDescription }: UpdateDescriptionPayload) => void;

  private getHandleSubmit(todo: Todo) {
    return (newDescription: string) => {
      this.updateTodoDescription({ todo, newDescription });
    };
  }
}
</script>

<style scoped>
span {
  height: min-content;
  align-self: center;
  cursor: pointer;
}

span:hover::after {
  content: "🖉";
  position: absolute;
  margin-left: 2px;
  transform: translateY(-3px);
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
