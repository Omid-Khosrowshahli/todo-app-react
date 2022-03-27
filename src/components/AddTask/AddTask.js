import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddTask.scss';

const AddTask = ({todoList, setTodoList}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);

  const addTask = (event) => {
    event.preventDefault();
    if(!inputValue.length) return;

    const newTask = {id: uuid(), task: inputValue, done: false};
    const updatedTodoList = [...todoList, newTask];
    setTodoList(updatedTodoList);
    setInputValue("");
  }

  return (
    <div className='add-task'>
      <form  type="submit" onSubmit={addTask}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='Add new Task...' />
      </form>
      <button onClick={addTask}>+</button>
    </div>
  );
}

export default AddTask;