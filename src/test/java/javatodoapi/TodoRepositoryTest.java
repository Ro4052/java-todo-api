package javatodoapi;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class TodoRepositoryTest {

    @Test
    public void todosGetUniqueIds() {
        TodoRepository todoRepo = new TodoRepository();

        Todo todo1 = new Todo("title 1");
        Todo todo2 = new Todo("title 2");
        Todo todo3 = new Todo("title 3");

        todoRepo.createTodo(todo1);
        todoRepo.createTodo(todo2);
        todoRepo.deleteTodo(1);
        todoRepo.createTodo(todo3);

        List<Todo> allTodos = todoRepo.getAllTodos();
        assertEquals("Check that todo 3 has the right ID", 2, allTodos.get(1).getId());
    }

    @Test
    public void canUpdateTodoDetails() {
        TodoRepository todoRepo = new TodoRepository();

        Todo todo = new Todo("title");
        Todo updatedTodo = new Todo("new title", true);
        updatedTodo.setId(0);

        todoRepo.createTodo(todo);
        todoRepo.updateTodo(updatedTodo);

        assertEquals(
                "Check new description is correct",
                "new title",
                todoRepo.getTodo(0).getDescription()
        );
        assertEquals(
                "Check initial completed is correct",
                true,
                todoRepo.getTodo(0).getCompleted()
        );
    }
}
