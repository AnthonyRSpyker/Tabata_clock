import React from 'react'

import './timeCard/timeCard.style.css'


export const TimeCard = (props) => {
    <div className='time-card'>
        <p className='time-digits'> {props.time}</p>
    </div>
}
