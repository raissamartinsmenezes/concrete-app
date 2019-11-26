import React from 'react';
// importar o style
import './Title.scss'

const Title = (props) => {
    return (
        <div>
            <h1 className={props.classGithub}>{props.contentTitle}<span className={props.classSearch}> {props.contentSpan}</span></h1>
        </div>
    )
}

export default Title