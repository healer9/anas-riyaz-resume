import React from 'react'
import User from '../data/userDetails'
import Contact from '../components/Contact'
import './style/headerStyles.css'

const Header = () => {
    const { firstName, lastName } = User
    return (
        <>
            <header className="container">
                <h1 className="name"><span className="fname">{firstName.toUpperCase()}</span> {lastName.toUpperCase()}</h1>
                <Contact />
            </header>
        </>
    )
}

export default Header
