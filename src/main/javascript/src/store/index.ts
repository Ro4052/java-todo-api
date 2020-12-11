import Vue from 'vue';
import Vuex from 'vuex';

import getHandlers from './get';
import createHandlers from './create';
import loadingHandlers from './loading';
import updateHandlers from './update';
import deleteHandlers from './delete';
import Todo from '../entities/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<Todo>()
  },
  mutations: {
    ...getHandlers.mutations,
    ...createHandlers.mutations,
    ...loadingHandlers.mutations,
    ...updateHandlers.mutations,
    ...deleteHandlers.mutations,
  },
  actions: {
    ...getHandlers.actions,
    ...createHandlers.actions,
    ...updateHandlers.actions,
    ...deleteHandlers.actions,
  },
});
