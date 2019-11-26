import React from 'react';
// importar os componentes
import Title from '../../components/Title/Title'
import Search from '../../components/Search/Search'
import './Result.scss'
// import '../Home/Home.scss'

export default function Result() {
    return (
        <div className='search-component-result'>
            <Title
                contentTitle='Github'
                contentSpan='Search'
                classGithub='search-title-result'
                classSearch='search-span'
            />
            <Search
                classInput='search-input'
                classButton='search-button'
            />
        </div>
    )
}
