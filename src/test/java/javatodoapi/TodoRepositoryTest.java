package javatodoapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@TestPropertySource(locations="classpath:application-test.properties")
@DataJpaTest
@DirtiesContext(classMode= DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class TodoRepositoryTest {

    @Autowired
    private TodoService todoService;

    // Test no longer necessary as unique IDs is enforced by the database
    @Test
    public void todosGetUniqueIds() {
        Todo todo1 = new Todo("title 1");
        Todo todo2 = new Todo("title 2");
        Todo todo3 = new Todo("title 3");

        todoService.post(todo1);
        todoService.post(todo2);
        todoService.delete(todo1.getId());
        todoService.post(todo3);

        assertNotEquals("Check that todo 3 has the right ID", 2, todo3.getId());
    }

    @Test
    public void canUpdateTodoDetails() {
        Todo todo = new Todo("title");
        Todo updatedTodo = new Todo("new title", true);

        todoService.post(todo);
        updatedTodo.setId(todo.getId());
        todoService.patch(updatedTodo);

        Todo newTodo = todoService.get(todo.getId());
        assertEquals(
                "Check new description is correct",
                "new title",
                newTodo.getDescription()
        );
        assertEquals(
                "Check initial completed is correct",
                true,
                newTodo.getCompleted()
        );
    }
}
