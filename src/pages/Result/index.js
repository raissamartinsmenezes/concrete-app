import React from 'react';
import './Result.scss'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
import axios from 'axios'

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            repos: [],
            res: '',
            error: '',
            value: ''
            // value: ''
        }
    }

    changeUser = user => {
        this.setState({ value: user.target.value })
      //  console.log()
    }

    componentDidMount() {
            this.searchUser(this.props.location.state.res.login)
            this.searchRepos(this.props.location.state.res.login)

    }

    searchRepos = async (user) => {
        // const { user } = this.state
        console.log(user, 'searchrepos')
        try {
            const { data: repos } = await axios.get(
                `https://api.github.com/users/${user}/repos`
            )

            this.setState({ repos, error: '' })
            // console.log(this.history.location.state.res.avatar_url)
        } catch (error) {
            this.setState({
                error: 'usuário não encontrado',
                repos: []
            })
        }
        this.searchUser(user)

    }

    searchUser = async (user) => {
        console.log(user, 'searchUser')
        try {
            const { data: response } = await axios.get(
                `https://api.github.com/users/${user}`
            )

            this.setState({ user: response, error: '' })
            console.log(response)
        } catch (error) {
            this.setState({
                error: 'usuário não encontrado'
                // res: ''
            })
        }
    }
    // searchUser = async () => {
    //     const { user } = this.state

    //     try {
    //         const res = await axios.get(
    //             `https://api.github.com/users/${user}`
    //         )

    //         this.setState({user: res, error: ''})
    //         // console.log(resizeBy)
    //     } catch (error) {
    //         this.setState({
    //             error: 'usuário não encontrado'
    //             // res: ''
    //         })
    //     }
    // }

    render() {
        const { user, repos, error } = this.state;
        console.log(this.props.location.state.res.avatar_url)
        return (
            <div className='container'>
                <div className='search-component-result'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                        <Logo
                            contentTitle='Github'
                            contentSpan='Search'
                            classGithub='search-logo-result'
                            classSearch='search-span'
                        /></Link>
                    <Search
                        classInput='search-input'
                        classButton='search-button'
                       // value='user'
                        placeholder='Digite aqui um usuário para consultar seus repositórios'
                        changeUser={this.changeUser}
                        user={user}
                        buttonAction={() => this.searchRepos(this.state.value)}
                    />
                </div>
                <div className='content'>
                    <Profile
                        classPicture='profile-picture'
                        imageUrl={user.avatar_url}
                        name={user.name}
                        bio={user.bio}
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
