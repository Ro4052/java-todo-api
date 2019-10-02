export default class Todo {
  private id: number;
  private description: string;
  private completed: boolean = false;

  constructor(id: number, description: string, completed: boolean) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getCompleted(): boolean {
    return this.completed;
  }

  public setCompleted(completed: boolean): void {
    this.completed = completed;
  }
}
