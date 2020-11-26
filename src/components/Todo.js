import React from 'react';

function Todo({ todo, index, completeTask, deleteTodo }) {
  return (
    <div
      className="todo"
      style={{
        color: '#033b5c',
        textDecoration: todo.isDone ? 'line-through' : ''
      }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTask(index)}>Done</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
