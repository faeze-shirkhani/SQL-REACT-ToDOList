import React, { useState } from "react";

function EditTodoForm({editTask, task}) {
  const [value, setValue] = useState(task.title); // get task from input

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      //add todo
     editTask(value, task._id)
      // clear form after submission
      setValue("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="new task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;
