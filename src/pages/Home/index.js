import React from 'react';
import './Home.scss';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';

export default function Home() {
    return (
        <div className='container'>
            <div className='search'>
                <Logo
                    contentTitle='Github'
                    contentSpan='Search'
                    classGithub='search-logo'
                    classSearch='search-span'
                />
                <Search
                    classInput='search-input'
                    classButton='search-button'
                />
            </div>
        </div>
    )
}
