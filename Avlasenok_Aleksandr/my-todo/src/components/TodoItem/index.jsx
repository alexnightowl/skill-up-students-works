import React from 'react';
import "./style.scss";

const TodoItem = ({todo, editTodo, removeTodo}) => {

   const handleChange = () => {
      todo.completed = !todo.completed;
      editTodo(todo);
   };
   const handleDelete = () => {
      removeTodo(todo.id);
   };

   return (
      <li className="item">
         <input type="checkbox" checked={todo.completed} onChange={handleChange} />
         <p className={`${todo.completed ? "completed" : ""}`}>{todo.text}</p>
         <span onClick={handleDelete}>X</span>
      </li>
   );
};

export default TodoItem;
