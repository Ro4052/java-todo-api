import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<Todo>()
  },
  mutations: {
    getTodos(state: TodoState, todos: Todo[]): void {
      state.todos = todos;
    },
    createTodo(state: TodoState, todo: Todo): void {
      state.todos.push(todo);
    }
  },
  actions: {
    getTodos(context: TodoContext) {
      axios.get<Todo[]>('/api/todo')
        .then(response => context.commit('getTodos', response.data));
    },
    createTodo(context: TodoContext, description: string): void {
      const newTodo: Todo = new Todo(description);
      axios.post<number>('/api/todo', newTodo)
        .then(response => {
          newTodo.id = response.data;
          context.commit('createTodo', newTodo);
        });
    }
  },
});
