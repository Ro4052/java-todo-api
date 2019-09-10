package javatodoapi;

import java.security.InvalidParameterException;

public class Todo {
    private long id;
    private String description;
    private Boolean completed = false;

    public Todo(String description, Boolean completed) {
        setDescription(description);
        setCompleted(completed);
    }

    public Todo(String description) {
        setDescription(description);
    }

    public long getId() {
        return id;
    }

    // Only used server-side
    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    // Must be between 1 and 40 characters (inclusive)
    public void setDescription(String description) {
        if (description == null || description.isEmpty() || description.length() > 40) {
            throw new InvalidParameterException();
        }
        this.description = description;
    }

    public Boolean getCompleted() {
        return completed;
    }

    // Defaults to false
    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
