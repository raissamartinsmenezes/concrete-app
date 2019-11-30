import React from 'react';
import './UserNotFound'

const UserNotFound = (props) => { 
    return (
        <h1 className='user-not-found'>{props.erro}</h1> 
    )
}

export default UserNotFound