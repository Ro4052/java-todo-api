<template>
    <form class="todo-form" @submit="submitTodo">
      <input v-model="text" placeholder="Type something..." max="40">
      <button type="submit">Create</button>
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
</style>
