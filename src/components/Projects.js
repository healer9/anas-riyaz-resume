import React from 'react'
import User from '../data/userDetails'
import './style/projectStyles.css'

const Projects = () => {
    const { projects } = User

    return (
        <div className="section-container">
            <h1 className="section-heading">Projects</h1>
            {projects.map((project) => {
                return (
                    <div key={project.name.toString()}>
                        <div className="project-heading">
                            <h1>{project.name}</h1>
                            <h2 className="type">{project.type}</h2>
                        </div>
                        <div className="project-link">
                            <h3>Source Code : <span onClick={() => window.open(project.sourceCode)}
                                style={{ textDecoration: "underline", cursor: "pointer" }}>{project.sourceCode}</span></h3>
                            <h3>Live At : <span onClick={() => window.open(project.liveAt)}
                                style={{ textDecoration: "underline", cursor: "pointer" }}>{project.liveAt}</span></h3>
                        </div>
                        <h3 style={{ marginTop: "1%" }}>Build With : {project.buildWith}</h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects