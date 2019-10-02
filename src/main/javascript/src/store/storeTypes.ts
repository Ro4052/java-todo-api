import { ActionContext } from 'vuex';

import Todo from '../entities/Todo';

export interface TodoState {
  todos: Todo[];
}

export type TodoContext = ActionContext<TodoState, TodoState>;
