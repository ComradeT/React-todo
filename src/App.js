import './index.scss';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDo from './components/ToDo';


function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }

  return (
    <div className='todo'>
      <header className='top'>
        <h1>Список задач 2: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <ToDo 
          todo={todo}
          toggleTask={handleToggle}
          removeTask={removeTask} 
          key={todo.id}/>
        )
      })}
    </div>
  )
}

export default App;
