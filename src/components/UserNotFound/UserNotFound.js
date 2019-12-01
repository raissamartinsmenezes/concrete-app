import React from 'react';
import './UserNotFound.css'

const UserNotFound = (props) => { 
    const { erro } = props
    return (
        <h1 className='user-not-found'>{erro}</h1> 
    )
}

export default UserNotFound