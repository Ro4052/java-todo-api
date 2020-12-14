<template>
  <div>
    <span :class="{ 'interactive-span': !loading }" v-if="!isEditing" @click="() => setEditMode(true)">
      {{ text }}
    </span>
    <form v-if="isEditing" @submit="textSubmit">
      <input v-model="inputText" max="40" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class InputSpan extends Vue {
  private isEditing: boolean = false;
  private inputText!: string;

  @Prop({ required: true })
  private text!: string;

  @Prop({ required: true })
  private onSubmit!: (newText: string) => void;

  @Prop({ required: true })
  private loading!: boolean;

  private escapeHandler(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      this.setEditMode(false);
    }
  }

  private pageClickHandler(e: MouseEvent) {
    if (!e.composedPath().includes(this.$el)) {
      this.setEditMode(false);
    }
  }

  private setEditMode(value: boolean) {
    if (!this.loading) {
      if (value) {
        this.inputText = this.text;
      }
      this.isEditing = value;

      if (value) {
        document.addEventListener('keydown', this.escapeHandler);
        document.addEventListener('click', this.pageClickHandler);
      } else {
        document.removeEventListener('keydown', this.escapeHandler);
        document.removeEventListener('click', this.pageClickHandler);
      }
    }
  }

  private textSubmit(e: Event) {
    e.preventDefault();
    this.isEditing = false;
    this.onSubmit(this.inputText);
  }
}
</script>

<style scope>
div {
  height: min-content;
  align-self: center;
}

.interactive-span {
  cursor: pointer;
}

span:hover::after {
  content: "🖉";
  position: absolute;
  margin-left: 2px;
  transform: translateY(-3px);
}
</style>
