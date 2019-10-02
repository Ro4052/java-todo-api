export default class Todo {
  private id: number;
  private description: string;
  private completed: boolean = false;

  constructor(id: number, description: string, completed: boolean) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  get getId(): number {
    return this.id;
  }

  set setId(id: number) {
    this.id = id;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(description: string) {
    this.description = description;
  }

  get getCompleted(): boolean {
    return this.completed;
  }

  set setCompleted(completed: boolean) {
    this.completed = completed;
  }
}
