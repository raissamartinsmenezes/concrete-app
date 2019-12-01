import React from 'react';
import './Logo.css'

const Logo = (props) => {
    return (
        <h1 className={props.classGithub}>{props.contentTitle}<span className={props.classSearch}> {props.contentSpan}</span></h1>
    )
}

export default Logo