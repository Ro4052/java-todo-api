export default class Todo {
  public id: number | null;
  public description: string;
  public completed: boolean;
  public deleting: boolean;

  constructor(description: string, id: number | null = null, completed: boolean = false, deleting: boolean = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
    this.deleting = deleting;
  }
}
