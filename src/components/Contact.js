import React from 'react'
import User from '../data/userDetails'
import './style/headerStyles.css'

const Contact = () => {
    const { number, email, github, linkedIn, portfolio } = User.contactList
    const { mail, githubLink, linkedInLink, portfolioLink } = User.links

    const mailTo = () => window.location = mail
    const githubRoute = () => window.open(githubLink)
    const linkedInRoute = () => window.open(linkedInLink)
    const portfolioRoute = () => window.open(portfolioLink)

    const linkStyle = {
        cursor: "pointer",
        textDecoration: "underline"
    }

    return (
        <ul className="contact">
            <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
            <li>{number}</li>
            <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
            <li onClick={mailTo} style={linkStyle}>
                {email}</li>
            <i className="fa fa-user" aria-hidden="true" ></i>
            <li onClick={portfolioRoute} style={linkStyle}>
                {portfolio}
            </li>
            <i className="fa fa-github contact-icon"></i>
            <li onClick={githubRoute} style={linkStyle}>
                {github}
            </li>
            <i className="fa fa-linkedin contact-icon"></i>
            <li onClick={linkedInRoute} style={linkStyle}>
                {linkedIn}
            </li>
        </ul>
    )
}

export default Contact