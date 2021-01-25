import React from 'react'
import User from '../data/userDetails'
import './style/headerStyles.css'

const Contact = () => {
    const { number, email, github, linkedIn } = User.contactList
    const { mail, githubLink, linkedInLink } = User.links

    const mailTo = () => window.location = mail
    const githubRoute = () => window.open(githubLink)
    const linkedInRoute = () => window.open(linkedInLink)

    const linkStyle = {
        cursor: "pointer",
        textDecoration: "underline"
    }

    // <i i class="fa fa-user" aria - hidden="true" ></i>
    return (
        <ul className="contact">
            <li><i className="fa fa-phone contact-icon" aria-hidden="true"></i>{number}</li>
            <li onClick={mailTo} style={linkStyle}>
                <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                {email}</li>
            <li onClick={githubRoute} style={linkStyle}>
                <i className="fa fa-github contact-icon"></i>
                {github}
            </li>
            <li onClick={linkedInRoute} style={linkStyle}>
                <i className="fa fa-linkedin contact-icon"></i>
                {linkedIn}
            </li>
        </ul>
    )
}

export default Contact