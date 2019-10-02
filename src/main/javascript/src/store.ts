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
    }
  },
  actions: {
    getTodos({ commit }) {
      axios.get('/api/todo')
        .then(({ data }) => commit('getTodos', data));
    }
  },
});
