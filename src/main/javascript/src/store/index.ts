import Vue from 'vue';
import Vuex, { Commit } from 'vuex';
import axios from 'axios';

import { TodoState } from './todoState';
import Todo from '../entities/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<Todo>()
  },
  mutations: {
    getTodos(state: TodoState, todos: Todo[]): any {
      state.todos = todos;
    },
    createTodo(state: TodoState, todo: Todo): any {
      state.todos.push(todo);
    }
  },
  actions: {
    getTodos({ commit }: { commit: Commit }) {
      axios.get('/api/todo')
        .then(
          ({ data }: { data: Todo[] }): any => commit('getTodos', data)
        );
    },
    createTodo({ commit }: { commit: Commit }, description: string): any {
      const newTodo: Todo = new Todo(description);
      axios.post('/api/todo', newTodo)
        .then(({ data }: { data: number }) => {
          newTodo.id = data;
          commit('createTodo', newTodo);
        });
    }
  },
});
