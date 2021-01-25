import React from 'react'
import College from './College'
import School from './School'
import './style/eduStyle.css'

const Education = () => {
    return (
        <div className="section-container">
            <h1 className="section-heading">Education</h1>
            <College />
            <School />
        </div>
    )
}

export default Education
