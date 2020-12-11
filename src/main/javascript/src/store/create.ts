import { ActionTree, MutationTree } from 'vuex';
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';
import NetworkTodo from '../entities/NetworkTodo';

const mutations: MutationTree<{ todos: Todo[] }> = {
  createTodo(state: TodoState, todo: Todo): void {
    state.todos.push(todo);
  },
};

const actions: ActionTree<{ todos: Todo[]; }, { todos: Todo[]; }> = {
  createTodo(context: TodoContext, description: string): void {
    const newTodo: Todo = new Todo(description);
    axios.post<number>('/api/todo', new NetworkTodo(newTodo))
      .then(response => {
        newTodo.id = response.data;
        context.commit('createTodo', newTodo);
      });
  },
};

export default { mutations, actions };
