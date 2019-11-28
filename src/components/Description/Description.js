import React from 'react'

const Description = (props) => {
    return (
        <div>
            <h2 className={props.classTitle}>{props.title}</h2>
            <p className={props.classParagraph}>{props.description}</p>
        </div>
    )
}

export default Description