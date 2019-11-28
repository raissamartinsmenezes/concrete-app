import React from 'react';

const UserPhoto = (props) => {
    return (
        <img src={props.image} className={props.classPicture} alt='user github'></img>
    )
}

export default UserPhoto