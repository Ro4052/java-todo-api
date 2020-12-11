import { ActionTree, MutationTree } from "vuex";
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';

const mutations: MutationTree<{ todos: Todo[] }> = {
  getTodos(state: TodoState, todos: Todo[]): void {
    state.todos = todos;
  },
}

const actions: ActionTree<{ todos: Todo[]; }, { todos: Todo[]; }> = {
  getTodos(context: TodoContext) {
    axios.get<Todo[]>('/api/todo')
      .then(response => context.commit('getTodos', response.data));
  },
}

export default { mutations, actions };
