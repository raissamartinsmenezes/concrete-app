import React from 'react';
// importar o style

export default function Header(props) {
    return (
        <section>
            <h1 className={props.classGithub}>{props.nome} <span className={props.classSearch}>{props.span}</span></h1>
        </section>
    )
}