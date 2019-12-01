import React from 'react'
import './Search.css'
import searchIcon from '../../assets/icons/search-icon.svg'

const Search = (props) => {
    return (
        <div className='search-component'>
            <input 
                placeholder={props.placeholder} 
                type={props.type} 
                className={props.classInput}
                onChange={props.changeUser}>
            </input>
            <button className={props.classButton} onClick={props.buttonAction}><img src={searchIcon} alt='search icon'></img></button>
        </div>
    )
}

export default Search