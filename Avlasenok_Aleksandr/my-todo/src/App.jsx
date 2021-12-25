import {useState, useEffect} from 'react';
import './App.scss';
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const addTodo = (newTodo) => {
    if(!newTodo.text) {
      return;
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const filteredTodos = todos.filter((item) => item.id !== todoId);
    setTodos(filteredTodos);
  }

  const editTodo = (updatedTodo) => {
    const newTodos = todos.map((itemTodo) => {
      if (itemTodo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return itemTodo;
      }
    });

    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="main-wrapper">
        <TodoHeader todos={todos} addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
      
    </div>
  );
}

export default App;
