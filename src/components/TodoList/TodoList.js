import './TodoList.scss'

const TodoList = ({todoList, setTodoList}) => {
  const handleDone = (id) => {
    const updatedTasks = todoList.map((item) => (
      item.id === id ? {...item, done: !item.done} : item
    ));

    setTodoList(updatedTasks);
  }

  const removeTask = (id) => {
    const updatedTasks = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTasks);
  }

  return (
    <div className="list">
      {todoList.map((item, index) => (
        <div key={item.id} className="task">
          <div>
            <span style={{textDecoration: item.done ? "line-through" : ""}}>
              {index + 1}. {item.task}
            </span>
          </div>
          <div className='operations'>
            <button onClick={() => handleDone(item.id)}>
              {item.done ? "Undone" : "Mark as done"}
            </button>
            <span className='remove' onClick={() => removeTask(item.id)}><i class="material-icons">close</i></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;