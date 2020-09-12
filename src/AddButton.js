import React from 'react'
import {Button} from 'react-bootstrap'
import './App.css'

const Addbutton = () => {
    return (
        <div className='add-section'>
            <Button className='add-item'>
                <p>+</p>
            </Button>
        </div>
    )
}

export default Addbutton