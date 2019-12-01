import React from 'react';
import './Result.scss'
import UserNotFound from '../../components/UserNotFound/UserNotFound'
import SearchBar from '../../components/SearchBar/SearchBar'
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
            console.log(repos)
            // console.log(this.history.location.state.res.avatar_url)
        } catch (error) {
            this.setState({
                error: 'User not found :(',
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
                error: 'User not found :('
                // res: ''
            })
        }
    }
    

    render() {
        const { user, repos, error } = this.state;
        console.log(this.props.location.state.res.avatar_url)
        return (
            <div className='container'>
                {/* <div className='search-component-result'>  */}
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
                        buttonAction={() => this.searchRepos(this.state.value)}
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
