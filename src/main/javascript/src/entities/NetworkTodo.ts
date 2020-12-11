import Todo from './Todo';

export default class NetworkTodo {
  public id: number | null;
  public description: string;
  public completed: boolean;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.description = todo.description;
    this.completed = todo.completed;
  }
}
