import { useEffect, useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState(""); // get task from input

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      //add todo
      addTodo(value);
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

export default TodoForm;
