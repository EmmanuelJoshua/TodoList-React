import React from 'react'
import './App.css'
import {Form} from 'react-bootstrap'

function TodoItem({todo, handleChange}) {
    return (
        <div>
            <div className='todo-item'>
                {
                    todo.completed ?  <p className='item-name'>{todo.name}</p> :  <p>{todo.name}</p>
                }
                <Form.Check
                    custom
                    type='checkbox'
                    id='custom-checkbox'
                    label='rem'
                   
                />
                {/* <input type="checkbox" checked={todo.completed} onChange = {() => handleChange(todo.id)} /> */}
            </div>
        
        </div>

    );
}

export default TodoItem