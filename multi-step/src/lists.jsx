const tasks = [
  {
    id: 1,
    title: 'Read a Book',
    completed: true,
  },
  {
    id: 2,
    title: 'Buy Groceries',
    completed: true,
  },
  {
    id: 3,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 4,
    title: 'Watch a Movie',
    completed: false,
  },
];

function Lists() {
  return (
    <>
      <h1>Todo Lists..</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? 'line-through' : '',
              }}
            >
              #{task.id} {task.title}
              {/* <input type='checkbox' checked={task.completed} /> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lists;
