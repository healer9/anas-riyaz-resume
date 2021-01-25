import React from 'react'
import User from '../data/userDetails'

const Achievement = () => {
    const { achievements } = User

    const linkStyle = {
        marginTop: "1%",
        marginRight: "1%",
        fontSize: "1.2rem",
        fontWeight: "bold",
        listStyle: "inside"
    }

    return (
        <div className="section-container">
            <h1 className="section-heading">Achievements</h1>
            {achievements.map((achievement) => {
                return (
                    <div className="achievement"
                        style={{ display: "flex", alignItems: "center" }}
                        key={achievement.link}>
                        <li style={linkStyle}>{achievement.description}</li>
                        <i className="fa fa-external-link" aria-hidden="true"
                            onClick={() => window.open(achievement.link)}
                            style={{ cursor: "pointer" }}>
                        </i>
                    </div>
                )
            })}
        </div>
    )
}

export default Achievement