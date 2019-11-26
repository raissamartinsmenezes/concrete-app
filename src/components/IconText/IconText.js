import React from 'react';

const IconText = (props) => {
    return (
        <div>
            <img src={props.icon} alt={props.alt}></img>
            <p>{props.children}</p>
        </div>
    )
}

export default IconText 