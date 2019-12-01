import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
    return (
        <div className={props.classBar}>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            <Logo
                contentTitle={props.contentTitle}
                contentSpan={props.contentSpan}
                classGithub={props.classGithub}
                classSearch={props.classSearch}
            />
        </Link>
        <Search
            type={props.type}
            classInput={props.classInput}
            classButton={props.classButton}
            placeholder={props.placeholder}
            changeUser={props.changeUser}
            user={props.user}
            buttonAction={props.buttonAction}
        />
        </div>
    )
}

export default SearchBar