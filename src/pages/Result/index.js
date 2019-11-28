import React from 'react';
import './Result.scss'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'

export default function Result() {
    return (
        <div className='container'>
            <div className='search-component-result'>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/'>
                <Logo
                    contentTitle='Github'
                    contentSpan='Search'
                    classGithub='search-logo-result'
                    classSearch='search-span'
                /></Link>
                <Search
                    classInput='search-input'
                    classButton='search-button'
                />
            </div>
            <div className='content'>
                <Profile
                    classPicture='profile-picture'
                ></Profile>
                <Repositories></Repositories>
            </div>
        </div>
    )
}
