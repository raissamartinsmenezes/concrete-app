import React from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';
import './Search.scss'

const Search = (props) => {
    return (
        <div className='search-component'>
            <input className={props.classInput}></input>
            <button className={props.classButton}><img src={searchIcon} alt='search icon'></img></button>
        </div>
    )
}

export default Search