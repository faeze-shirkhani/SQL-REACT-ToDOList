import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import EditTodoForm from "./EditTodoForm";
const URL = "https://todo-backend-9i9w.onrender.com/tasks";

function TodoWrapper() {
  const [todos, setTodos] = useState([]); // store tasks

  useEffect(() => {
    async function getAllTasks() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data.map((d) => d._id));
      setTodos(data);
    }
    getAllTasks();
  }, []);

  const addTodo = async (todo) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo }),
    });
    const newTask = await res.json();
    setTodos((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleComplete = async (id, todo) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo }),
    });

    const updateTask = await res.json();
    console.log(updateTask);
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const editTodo = async (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = async (title, id) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm  editTask={editTask} task={todo}/>
        ) : (
          <Todos
            key={todo._id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
