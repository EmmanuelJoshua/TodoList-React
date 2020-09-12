import React from 'react'
import './App.css'
import { Container, Row, FormCheck } from 'react-bootstrap'

function TodoItem({ todo, handleChange }) {
    return (
        <Container className='todo-item' onClick={() => {
            handleChange(todo.id)
            console.log(todo.id)
        }}>
            <Row>
                <div className='ml-2'>
                    {
                        todo.completed ? <p className='item-name'>{todo.name}</p> : <p>{todo.name}</p>
                    }
                </div>
                <div className='ml-auto mr-2'>
                    <FormCheck
                        checked={todo.completed}
                        type='checkbox'
                        id='customControlAutosizing'
                        label=' '
                        custom
                    />
                </div>
            </Row>
        </Container>
    );
}

export default TodoItem