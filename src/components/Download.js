import React from 'react'
import Resume from '../resume/Anas Riyaz Resume.pdf'

const Download = () => {
    return (
        <a href={Resume} download>
            <button>Download</button>
        </a>
    )
}

export default Download