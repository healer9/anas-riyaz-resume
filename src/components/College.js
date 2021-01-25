import React from 'react'
import User from '../data/userDetails'

const College = () => {
    const { college } = User.education
    return (
        <>
            <div className="heading">
                <h2 className="institute-name">{college.name}</h2>
                <p className="">{college.duration}</p>
            </div>
            <div className="info">
                <h3>{college.course}</h3>
                <h3>{college.cgpa}</h3>
            </div>
        </>
    )
}

export default College