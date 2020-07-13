import React from 'react'
import './App.css'
import './TodoItem'
import TodoItem from './TodoItem'

function App() {

  return (
    <div className='App-header'>
      <div className='todo-main-bg'>
      <TodoItem todo={{name: 'Wash dishes', checked: true}}/>
      <hr/>
      <TodoItem todo={{name: 'Clean the house', checked: false}}/>
      <hr/>
      <TodoItem todo={{name: 'Get groceries', checked: false}}/>
      </div>
    
    </div>
  );
}

export default App;
