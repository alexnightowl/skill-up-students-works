import React from "react";

const TodoItem = ({ todo, editTodo, removeTodo, i }) => {
  const handleChange = () => {
    todo.completed = !todo.completed;
    editTodo(todo);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li key={i}>
      <input type="checkbox" chacked={todo.completed} onChange={handleChange} />
      <p>{todo.text}</p>
      <button onClick={handleDelete}>X</button>
    </li>
  );
};

export default TodoItem;
