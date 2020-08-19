import React from 'react'
import './App.css'

const TimeSection = () => {
    let date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='time-section'>
            <div className='section1'>
                <div className='sub1'>
                    <p>{day}</p>
                </div>
                <div className='sub2'>
                    <p>{months[date.getMonth()]}</p>
    <p>{year}</p>
                </div>
            </div>
            <div className='section2'>
                <p>{days[date.getDay()]}</p>
            </div>
        </div>
    )
}

export default TimeSection;