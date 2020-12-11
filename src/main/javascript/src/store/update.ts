import { ActionTree, MutationTree } from 'vuex';
import axios from 'axios';

import { TodoState, TodoContext } from './storeTypes';
import Todo from '../entities/Todo';
import NetworkTodo from '../entities/NetworkTodo';

export interface UpdateDescriptionPayload {
  todo: Todo;
  newDescription: string;
}

const updateCall = (context: TodoContext, todo: Todo): void => {
  axios.patch<void>('/api/todo', todo)
    .then(() => context.commit('updateTodo', new NetworkTodo(todo)))
    .catch(() => context.commit('loadingTodoToggle', todo.id));
};

const mutations: MutationTree<{ todos: Todo[] }> = {
  updateTodo(state: TodoState, newTodo: Todo): void {
    const todo: Todo | undefined = state.todos.find(t => t.id === newTodo.id);
    if (todo) {
      todo.description = newTodo.description;
      todo.completed = newTodo.completed;
      todo.loading = false;
    }
  },
};

const actions: ActionTree<{ todos: Todo[]; }, { todos: Todo[]; }> = {
  toggleCompleteTodo(context: TodoContext, todo: Todo): void {
    context.commit('loadingTodoToggle', todo.id);
    const toggledTodo: Todo = new Todo(todo.description, todo.id, !todo.completed);
    updateCall(context, toggledTodo);
  },
  updateTodoDescription(context: TodoContext, { todo, newDescription }: UpdateDescriptionPayload): void {
    context.commit('loadingTodoToggle', todo.id);
    const updatedTodo: Todo = new Todo(newDescription, todo.id);
    updateCall(context, updatedTodo);
  },
};

export default { mutations, actions };
