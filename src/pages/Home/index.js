import React from 'react';
// importar os componentes
import './Home.scss';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

export default function Home() {
    return (
        <main className='container section-search'>
            <Title
                contentTitle='Github'
                contentSpan='Search'
                classGithub='search-title'
                classSearch='search-span'
            />
            <Search
                classInput='search-input'
                classButton='search-button'
            />
        </main>
    )
}
