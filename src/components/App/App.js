import { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;