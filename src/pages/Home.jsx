import React, { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ title, description, deadline, imageUrl }) => {
    setTodos([
      ...todos,
      { id: Date.now(), title, description, deadline, imageUrl, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-platinum rounded-md shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-tomato">Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;
