import { MutationTree } from "vuex";

import { TodoState } from './storeTypes';
import Todo from '../entities/Todo';

const mutations: MutationTree<{ todos: Todo[] }> = {
  loadingTodoToggle(state: TodoState, id: number): void {
    const todo: Todo | undefined = state.todos.find(t => t.id === id);
    if (todo) {
      todo.loading = !todo.loading;
    }
  },
}

export default { mutations };
