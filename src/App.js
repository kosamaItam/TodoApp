import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const addTask = text => {
    const newTask = [...todos, { text }];
    setTodos(newTask);
  };

  const completeTask = index => {
    const newTask = [...todos];
    newTask[index].isDone = true;
    setTodos(newTask);
  };

  const [todos, setTodos] = React.useState([
    { text: 'build your todo List', isDone: false },
    { text: 'Take break fast', isDone: false }
  ]);

  const deleteTodo = index => {
    const newTask = [...todos];
    newTask.splice(index, 1);
    setTodos(newTask);
  };

  return (
    <div className="app">
      <h1 style={{ color: 'white', fontSize: '60px' }}>My Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTask={completeTask}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
