import React from 'react'
import axios from 'axios'
import './Home.css'
import SearchBar from '../../components/SearchBar/SearchBar'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            res: '',
            error: ''
        }
    }

    changeUser = user => {
        this.setState({user: user.target.value})
    }

    searchUser = async () => {
        const { user } = this.state
        try {
            const { data: res } = await axios.get(
                `https://api.github.com/users/${user}`
            )
        
            this.setState({res, error: ''})
            this.props.history.push({
                pathname: '/result',
                state: {
                    res
                }
            })    
        } catch (error) {
            this.setState({
                error: 'User not found :(',
                res: ''
            }) 
            this.props.history.push({
                pathname: '/result',
                state: {
                    error: 'User not found :('
                }
            })
        }
    }

    render() {
        const { user } = this.state;
        return (
            <div className='container'>
                    <SearchBar
                        classBar='search-component-home'
                        contentTitle='Github'
                        contentSpan='Search'
                        classGithub='search-logo'
                        classSearch='search-span'
                        type='text'
                        classInput='search-input'
                        classButton='search-button'
                        placeholder='Digite aqui um usuário para consultar seus repositórios'
                        changeUser={this.changeUser}
                        user={user}
                        buttonAction={this.searchUser}
                    >
                    </SearchBar>
            </div>
        )
    }
}

export default Home