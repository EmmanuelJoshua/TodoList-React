import React, { Component } from 'react'
import './App.css'
import './TodoItem'
import TodoItem from './TodoItem'
import TodoData from './todosData'
import AddButton from './AddButton'
import TimeSection from './TimeSection'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: TodoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
            console.log(todo.completed)
          }
          return todo
        })
      
    })
  }

  render(){
    const TodosData = this.state.todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>)
    return (
      <div className='App-header'>
        <div className='todo-main-bg'>
          <TimeSection/>
          <div className='data-section'>
          {TodosData}
          </div>
         < AddButton/>
        </div>

      </div>
    );
  }
}

export default App;
