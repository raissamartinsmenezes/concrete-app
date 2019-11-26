import React from 'react';
// importar os componentes
import Title from '../../components/Title/Title'
import Search from '../../components/Search/Search'
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
// import UserPhoto from '../../components/UserPhoto/UserPhoto'
import './Result.scss'
// import IconText from '../../components/IconText/IconText';
// import '../Home/Home.scss'

// import organizationIcon from '../../assets/icons/organization-icon.svg'

export default function Result() {
    return (
        <div>
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
            <div>
                <Profile
                ></Profile>
                <Repositories></Repositories>
            </div>
        </div>
    )
}
