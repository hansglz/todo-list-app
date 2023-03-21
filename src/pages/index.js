import React, { useState } from 'react';
import Checkbox from 'antd';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const IndexPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: Date.now() }];
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;