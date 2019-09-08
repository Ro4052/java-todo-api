package javatodoapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoController {
    private TodoRepository todoRepo;

    @Autowired
    public TodoController(TodoRepository todoRepo) {
        this.todoRepo = todoRepo;
    }

    @RequestMapping(value = "/todo/{id}", method  = RequestMethod.GET)
    public Todo getTodo(@PathVariable long id) {
        return todoRepo.getTodo(id);
    }

    @RequestMapping(value = "/todo", method  = RequestMethod.GET)
    public List<Todo> getAllTodos() {
        return todoRepo.getAllTodos();
    }

    @RequestMapping(value = "/todo", method  = RequestMethod.POST)
    public void createTodo(@RequestBody Todo todo) {
        todoRepo.createTodo(todo);
    }

    @RequestMapping(value = "/todo/{id}", method  = RequestMethod.PATCH)
    public void updateTodo(@RequestBody Todo todo) {
        todoRepo.updateTodo(todo);
    }

    @RequestMapping(value = "/todo/{id}", method  = RequestMethod.DELETE)
    public void deleteTodo(@PathVariable long id) {
        todoRepo.deleteTodo(id);
    }

    @RequestMapping(value = "/todo", method = RequestMethod.DELETE)
    public void deleteCompletedTodos() {
        todoRepo.deleteCompletedTodos();
    }
}
