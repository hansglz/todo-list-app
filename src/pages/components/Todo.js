import React from 'react';

const Todo = ({ todo, removeTodo }) => (
    <div>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
);

export default Todo;