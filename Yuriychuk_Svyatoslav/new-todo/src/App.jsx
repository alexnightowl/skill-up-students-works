import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const filteredTodo = todos.filter((item) => item.id !== todoId);
    setTodos(filteredTodo);
  };

  const editTodo = (updatedTodo) => {
    const newTodos = todos.map((itemTodo) => {
      if (itemTodo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return itemTodo;
      }
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoHeader todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
