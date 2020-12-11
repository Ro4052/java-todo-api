import { ActionTree, MutationTree } from "vuex";
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';

const mutations: MutationTree<{ todos: Todo[] }> = {
  deleteTodo(state: TodoState, id: number): void {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
}

const actions: ActionTree<{ todos: Todo[]; }, { todos: Todo[]; }> = {
  deleteTodo(context: TodoContext, id: number): void {
    context.commit('loadingTodoToggle', id);
    axios.delete<void>(`/api/todo/${id}`)
      .then(() => context.commit('deleteTodo', id))
      .catch(() => context.commit('loadingTodoToggle', id));
  },
}

export default { mutations, actions };
