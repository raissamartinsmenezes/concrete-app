import React from 'react';

const UserPhoto = (props) => {
    const { avatar_url } = props
    return (
        <img src={avatar_url} style={{ width: '280px', height: '280px' }} alt='user github'></img>
    )
}

export default UserPhoto