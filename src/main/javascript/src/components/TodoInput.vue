<template>
    <form class="todo-form" @submit="submitTodo">
      <input
        class="form-elements"
        v-model="text"
        placeholder="Type something..."
        max="40"
      >
      <button
        class="form-elements"
        type="submit"
        :disabled="text.length === 0"
      >
        Create
      </button>
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class TodoInput extends Vue {
  private text: string = '';

  @Action
  private createTodo!: (text: string) => void;

  private submitTodo(e: Event) {
    e.preventDefault();
    if (this.text.length > 0) {
      this.createTodo(this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped>
.todo-form {
  width: max-content;
  margin: 0 auto;
}

.form-elements {
  padding: 10px 15px;
  border: 1px solid #959595;
}

input {
  border-radius: 5px 0 0 5px;
}

button {
  cursor: pointer;
  border-left: none !important;
  border-radius: 0 5px 5px 0;
}
</style>
