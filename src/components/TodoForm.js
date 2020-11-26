import React from 'react';

function TodoForm({ addTask }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
