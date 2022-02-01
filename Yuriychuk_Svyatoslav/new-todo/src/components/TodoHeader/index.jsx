import React, { useEffect, useRef } from "react";

const TodoHeader = ({ todos, addTodo }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    console.log(inputRef.current.value);
  }, [inputRef]);

  const CreateTodo = (event) => {
    event.preventDefault();
    const todoObj = {
      id: new Date().getTime(),
      text: inputRef.current.value,
      completed: false,
    };

    addTodo(todoObj);

    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={CreateTodo}>
        <input ref={inputRef} type="text" />
        <button type="submit "> Add Todo </button>
      </form>
    </div>
  );
};

export default TodoHeader;
