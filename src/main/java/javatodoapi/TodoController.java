package javatodoapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoController {
    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @RequestMapping(value = "/todo/{id}", method  = RequestMethod.GET)
    public Todo get(@PathVariable long id) {
        return todoService.get(id);
    }

    @RequestMapping(value = "/todo", method  = RequestMethod.GET)
    public List<Todo> get() {
        return todoService.get();
    }

    @RequestMapping(value = "/todo", method  = RequestMethod.POST)
    public long post(@RequestBody Todo todo) {
        return todoService.post(todo);
    }

    @RequestMapping(value = "/todo", method  = RequestMethod.PATCH)
    public void patch(@RequestBody Todo todo) {
        todoService.patch(todo);
    }

    @RequestMapping(value = "/todo/{id}", method  = RequestMethod.DELETE)
    public void delete(@PathVariable long id) {
        todoService.delete(id);
    }

    @RequestMapping(value = "/todo", method = RequestMethod.DELETE)
    public void delete() {
        todoService.delete();
    }
}
