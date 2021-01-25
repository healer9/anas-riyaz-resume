import React from 'react'
import User from '../data/userDetails'

const School = () => {
    const { school } = User.education
    return (
        <>
            <h2 className="heading">{school.name}</h2>
            <div className="info">
                <h3>Class 12</h3>
                <h3>Marks : {school.intermediateMarks}</h3>
            </div>
            <div className="info">
                <h3>Class 10</h3>
                <h3>Marks : {school.highSchoolMarks}</h3>
            </div>
        </>
    )
}

export default School