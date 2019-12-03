import React from 'react'
import axios from 'axios'
import './Result.css'
import UserNotFound from '../../components/UserNotFound/UserNotFound'
import SearchBar from '../../components/SearchBar/SearchBar'
import Profile from './components/Profile/Profile'
import Repositories from './components/Repositories/Repositories'

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            repos: [],
            res: '',
            error: '',
            value: ''
        }
    }

    changeUser = user => {
        this.setState({ value: user.target.value })
    }

    componentDidMount() {
        if(this.props.location.state){
            if(this.props.location.state.res){
            this.searchUser(this.props.location.state.res.login)
            this.searchRepos(this.props.location.state.res.login)
            }

            if(this.props.location.state.error){
                this.setState({ error: this.props.location.state.error})
            }
        }
    }

    searchRepos = async (user) => {
        try {
            const { data: repos } = await axios.get(
                `https://api.github.com/users/${user}/repos`
            )

            this.setState({ repos, error: '' })
        } catch (error) {
            this.setState({
                error: 'User not found :(',
                repos: []
            })
        }
        this.searchUser(user)
    }

    searchUser = async (user) => {
        try {
            const { data: response } = await axios.get(
                `https://api.github.com/users/${user}`
            )

            this.setState({ user: response, error: '' })
        } catch (error) {
            this.setState({
                error: 'User not found :(',
                res: ''
            })
        }
    }

    render() {
        const { user, repos, error, value } = this.state;
        return (
            <div className='container'>
                <SearchBar
                    classBar='search-component-result'
                    contentTitle='Github'
                    contentSpan='Search'
                    classGithub='search-logo-result'
                    classSearch='search-span'
                    classInput='search-input'
                    classButton='search-button'
                    placeholder='Digite aqui um usuário para consultar seus repositórios'
                    changeUser={this.changeUser}
                    user={user}
                    buttonAction={() => this.searchRepos(value)}
                >
                </SearchBar>
                {!error ?
                    <div className='content'>
                        <Profile
                            avatar_url={user.avatar_url}
                            name={user.name}
                            bio={user.bio}
                            company={user.company}
                            location={user.location}
                            public_repos={user.public_repos}
                            followers={user.followers}
                            following={user.following}
                        />
                        <Repositories
                            repos={repos}
                        />
                    </div>
                    : <UserNotFound
                        erro={error}
                    />
                }
            </div>
        )
    }
}

export default Result
