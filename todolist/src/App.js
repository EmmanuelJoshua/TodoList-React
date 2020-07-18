import React from 'react'
import './App.css'
import './TodoItem'
import TodoItem from './TodoItem'
import TodoData from './todosData'

function App() {
  const TodosData = TodoData.map((todo) => <TodoItem todo={todo}/>)
  return (
    <div className='App-header'>
      <div className='todo-main-bg'>
       {TodosData}
      </div>

    </div>
  );
}

export default App;
