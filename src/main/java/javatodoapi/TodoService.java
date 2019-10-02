package javatodoapi;

import java.util.List;

public class TodoService {
    private final TodoRepository todoRepo;

    public TodoService(TodoRepository todoRepo) {
        this.todoRepo = todoRepo;
    }

    public Todo get(long id) {
        return todoRepo.getOne(id);
    }

    public List<Todo> get() {
        return todoRepo.findAll();
    }

    public long post(Todo todo) {
        Todo newTodo = todoRepo.save(todo);
        return newTodo.getId();
    }

    public void patch(Todo todo) {
        todoRepo.save(todo);
    }

    public void delete(long id) {
        todoRepo.deleteById(id);
    }

    public void delete() {
        todoRepo.deleteAllByCompleted(true);
    }
}
