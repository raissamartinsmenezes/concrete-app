import React from 'react';
import './IconText.scss';

const IconText = (props) => {
    return (
        <div className='icon-text-box'>
            <img src={props.icon} alt={props.alt} className={props.classIcon}></img>
            <p className='icon-text'>{props.children}</p>
        </div>
    )
}

export default IconText 