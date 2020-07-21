import React, { Component } from 'react'
import './App.css'
import './TodoItem'
import TodoItem from './TodoItem'
import TodoData from './todosData'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: TodoData
    }
  }

  render(){
    const TodosData = this.state.todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
    return (
      <div className='App-header'>
        <div className='todo-main-bg'>
         {TodosData}
        </div>
  
      </div>
    );
  }
}

export default App;
