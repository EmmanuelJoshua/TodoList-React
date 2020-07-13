import React from 'react'
import './App.css'

function TodoItem(props){
    return (
        <div className='todo-item'>
                <p>{props.todo.name}</p>
                <input type="checkbox" checked={props.todo.checked}/>
        </div>
    );
}

export default TodoItem