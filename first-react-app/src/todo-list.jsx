import { useState } from 'react';
import './todo.css';
import TodoListItem from './todo-list-item';

// [
//     {
//         id: 1.
//         text: 'Learn React',
//         completed: true
//     }
// ]
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text === '') return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setText('');
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    // ...todo, completed: !todo.completed
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className='todo-input'>
        <input
          type='text'
          placeholder='Add new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
