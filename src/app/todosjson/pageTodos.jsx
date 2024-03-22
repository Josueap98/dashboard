'use client'
import React, { useState, useEffect } from 'react';
import CharacterList from '../../components/CharacterList';

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const searchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodos(data);
  };

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={searchTodos}>Search</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.id}</h2>
            <h3>{todo.title}</h3>
            <p>{todo.completed ? 'true' : 'false'}</p>
          </li>
        ))}
      </ul>
      <CharacterList datos={todos} />
    </div>
  );
};

export default HomePage;