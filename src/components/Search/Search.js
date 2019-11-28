import React from 'react'
import './Search.scss'
import searchIcon from '../../assets/icons/search-icon.svg'
import { Link } from 'react-router-dom'

const Search = (props) => {
    return (
        <div className='search-component'>
            <input 
                placeholder={props.placeholder} 
                type={props.type} 
                className={props.classInput}
                value={props.user}
                onChange={e => props.changeUser(e.target.value)}>
            </input>
            <Link to='/result'>
            <button className={props.classButton} onClick={props.buttonAction}><img src={searchIcon} alt='search icon'></img></button></Link>
        </div>
    )
}

export default Search