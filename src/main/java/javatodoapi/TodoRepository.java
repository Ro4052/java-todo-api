package javatodoapi;

import java.util.ArrayList;
import java.util.List;

public class TodoRepository {
    private long nextId = 0;
    private List<Todo> todos = new ArrayList<>();

    public Todo getTodo(long id) {
        return todos.stream().filter(todo -> todo.getId() == id).findFirst().get();
    }

    public List<Todo> getAllTodos() {
        return todos;
    }

    public void createTodo(Todo todo) {
        Todo newTodo = new Todo();
        newTodo.setId(nextId);
        newTodo.setDescription(todo.getDescription());
        newTodo.setCompleted(todo.getCompleted());
        todos.add(newTodo);
        nextId++;
    }

    public void updateTodo(Todo todo) {
        Todo originalTodo = getTodo(todo.getId());
        originalTodo.setDescription(todo.getDescription());
        originalTodo.setCompleted(todo.getCompleted());
    }

    public void deleteTodo(long id) {
        Todo todoToRemove = getTodo(id);
        todos.remove(todoToRemove);
    }

    public void deleteCompletedTodos() {
        todos.removeIf(todo -> todo.getCompleted());
    }
}
