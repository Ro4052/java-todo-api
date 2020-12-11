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
    },
    loadingTodoToggle(state: TodoState, id: number): void {
      const todo: Todo | undefined = state.todos.find(todo => todo.id === id);
      if (todo) todo.loading = !todo.loading;
    },
    updateTodo(state: TodoState, newTodo: Todo): void {
      const todo: Todo | undefined = state.todos.find(todo => todo.id === newTodo.id);
      if (todo) {
        todo.description = newTodo.description;
        todo.completed = newTodo.completed;
        todo.loading = false;
      }
    },
    deleteTodo(state: TodoState, id: number): void {
      state.todos = state.todos.filter(todo => todo.id !== id);
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
    },
    toggleCompleteTodo(context: TodoContext, todo: Todo): void {
      const toggledTodo: Todo = new Todo(todo.description, todo.id, !todo.completed);
      context.commit('loadingTodoToggle', todo.id);
      axios.patch<void>('/api/todo', toggledTodo)
        .then(() => context.commit('updateTodo', toggledTodo))
        .catch(() => context.commit('loadingTodoToggle', todo.id));
    },
    deleteTodo(context: TodoContext, id: number): void {
      context.commit('loadingTodoToggle', id);
      axios.delete<void>(`/api/todo/${id}`)
        .then(() => context.commit('deleteTodo', id))
        .catch(() => context.commit('loadingTodoToggle', id));
    }
  },
});
