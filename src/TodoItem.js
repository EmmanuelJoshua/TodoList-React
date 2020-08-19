import React from 'react'
import './App.css'

function TodoItem({todo, handleChange}) {
    return (
        <div>
            <div className='todo-item'>
                {
                    todo.completed ?  <p className='item-name'>{todo.name}</p> :  <p>{todo.name}</p>
                }
                <input type="checkbox" checked={todo.completed} onChange = {() => handleChange(todo.id)} />
            </div>
        
        </div>

    );
}

export default TodoItem