import React from 'react';
import './Result.scss'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
import axios from 'axios'

class Result extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            repos: [],
            response: [],
            error: '',
            // value: ''
        }
    }

    changeUser = user => {
        this.setState({user})
    }

    componentDidMount(){
        this.searchRepos()
        // this.searchUser()
    }
    
    searchRepos = async () => {
        const { user } = this.state
            
        try {
            const {data: repos} = await axios.get(
                `https://api.github.com/users/${user}/repos`
            )
        
            this.setState({repos, error: ''})
            console.log(repos)
        } catch (error) {
            this.setState({
                error: 'usuário não encontrado',
                repos: []
            })
        }
    }
    
    // searchUser = async () => {
    //     const { user } = this.state
    
    //     try {
    //         const response = await axios.get(
    //             `https://api.github.com/users/${user}`
    //         )
        
    //         this.setState({response, error: ''})
    //         console.log(response)
    //     } catch (error) {
    //         this.setState({
    //             error: 'usuário não encontrado'
    //             // res: ''
    //         })
    //     }
    // }
    
    render() {
        const { user, repos, error } = this.state;
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
                        value='user'
                        placeholder='Digite aqui um usuário para consultar seus repositórios'
                        changeUser={this.changeUser}
                        user={user}
                        buttonAction={this.searchRepos}
                    />
                </div>
                <div className='content'>
                    <Profile
                        classPicture='profile-picture'
                    ></Profile>
                    <Repositories
                        repos={repos}
                    ></Repositories>
                </div>
            </div>
        )
    }
}

export default Result
