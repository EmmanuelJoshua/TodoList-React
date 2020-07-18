import React from 'react'
import './App.css'

function TodoItem(props) {
    return (
        <div>
            <div className='todo-item'>
                <p>{props.todo.name}</p>
                <input type="checkbox" checked={props.todo.completed} />
            </div>
            <hr />
        </div>

    );
}

export default TodoItem