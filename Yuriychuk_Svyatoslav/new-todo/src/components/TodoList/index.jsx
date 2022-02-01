import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
