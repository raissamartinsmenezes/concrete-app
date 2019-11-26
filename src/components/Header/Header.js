import React from 'react';
// importar o style

const Header = (props) => {
    return (
        <section>
            <h1 className={props.classGithub}>{props.nome}<span className={props.classSearch}> {props.span}</span></h1>
        </section>
    )
}

export default Header