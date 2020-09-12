import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './App.css'

const TimeSection = () => {
    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='time-section d-flex align-items-center'>
            <Container>
                <Row>
                    <div className='section1 ml-3 d-flex flex-row align-items-center'>
                        <div className='sub1'>
                            <span>{day}</span>
                        </div>
                          <div className='sub2 d-flex flex-column'>
                              <span>{months[date.getMonth()]}</span>
                              <span>{year}</span>
                          </div>
                    </div>
                    <div className='section2 ml-auto mr-3'>
                            <span>{days[date.getDay()]}</span>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default TimeSection;