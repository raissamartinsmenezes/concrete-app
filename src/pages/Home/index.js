import React from 'react';
// importar os componentes
import './_Home.scss';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

export default function Home() {
    return (
        <main>
            <Header
                nome='Github'
                span='Search'
                classSearch='text-style-1'
                classGithub='Text-Style-3'
            />
            <Search
                classInput='Search-Input'
                classButton='button'
            />
        </main>
    )
}
