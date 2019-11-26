import React from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';

export default function Search(props) {
    return (
        <div>
            <input className={props.classInput}></input>
            <button className={props.classButton}><img src={searchIcon} alt='search icon'></img></button>
        </div>
    )
}