import { ActionTree, MutationTree } from 'vuex';
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';

const mutations: MutationTree<{ todos: Todo[] }> = {
  updateTodo(state: TodoState, newTodo: Todo): void {
    const todo: Todo | undefined = state.todos.find(t => t.id === newTodo.id);
    if (todo) {
      todo.description = newTodo.description;
      todo.completed = newTodo.completed;
      todo.loading = false;
    }
  },
};

const actions: ActionTree<{ todos: Todo[]; }, { todos: Todo[]; }> = {
  toggleCompleteTodo(context: TodoContext, todo: Todo): void {
    const toggledTodo: Todo = new Todo(todo.description, todo.id, !todo.completed);
    context.commit('loadingTodoToggle', todo.id);
    axios.patch<void>('/api/todo', toggledTodo)
      .then(() => context.commit('updateTodo', toggledTodo))
      .catch(() => context.commit('loadingTodoToggle', todo.id));
  },
};

export default { mutations, actions };
