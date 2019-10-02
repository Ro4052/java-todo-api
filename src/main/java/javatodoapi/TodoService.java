package javatodoapi;

import java.util.List;

public class TodoService {
    private final TodoRepository todoRepo;

    public TodoService(TodoRepository todoRepo) {
        this.todoRepo = todoRepo;
    }

    public Todo get(long id) {
        return todoRepo.getTodo(id);
    }

    public List<Todo> get() {
        return todoRepo.getAllTodos();
    }

    public long post(Todo todo) {
        return todoRepo.createTodo(todo);
    }

    public void patch(Todo todo) {
        todoRepo.updateTodo(todo);
    }

    public void delete(long id) {
        todoRepo.deleteTodo(id);
    }

    public void delete() {
        todoRepo.deleteCompletedTodos();
    }
}
