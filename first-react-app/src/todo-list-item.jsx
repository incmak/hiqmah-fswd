export default function TodoListItem({ todo, handleDelete, handleComplete }) {
  return (
    <li
      key={todo.id}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      <span>{todo.text}</span>
      <div className='actions'>
        <button onClick={() => handleComplete(todo.id)}>
          {todo.completed ? '❌' : '✔️'}
        </button>
        <button onClick={() => handleDelete(todo.id)}>🗑️</button>
      </div>
    </li>
  );
}
