import React from 'react'
import User from '../data/userDetails'
import './style/eduStyle.css'

const Skills = () => {
    const { skills } = User
    return (
        <div className="section-container">
            <h1 className="section-heading">Skills</h1>
            <ul className="skills">
                {skills.map((skill) => <li key={skill.toString()}> {skill}</li>)}
            </ul>
        </div>
    )
}

export default Skills
