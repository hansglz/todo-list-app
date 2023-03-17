import React, { useState } from 'react';

const Todo = ({ todo, removeTodo }) => (
  <div>
    {todo.text}
    <button onClick={() => removeTodo(todo.id)}>Delete</button>
  </div>
);

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

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