import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Todo from './entities/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<Todo>()
  },
  mutations: {
    getTodos(state, todos) {
      state.todos = todos;
    },
    createTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    getTodos({ commit }) {
      axios.get('/api/todo')
        .then(({ data }) => commit('getTodos', data));
    },
    createTodo({ commit }, description: string) {
      const newTodo: Todo = new Todo(description);
      axios.post('/api/todo', newTodo)
        .then(({ data }) => {
          newTodo.id = data;
          commit('createTodo', newTodo);
        });
    }
  },
});
