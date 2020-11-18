import React from 'react'
import {Button} from 'react-bootstrap'
import {Plus} from 'react-feather'
import './App.css'

const Addbutton = () => {
    return (
        <div className='add-section'>
            <Button className='add-item'>
                <Plus/>
            </Button>
        </div>
    )
}

export default Addbutton