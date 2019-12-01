import React from 'react';
import './Home.scss';
// import Logo from '../../components/Logo/Logo';
// import Search from '../../components/Search/Search';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar'
// import { searchRepos } from '../../service/searchRepos'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            res: '',
            // repos: [],
            error: '',
            // value: ''
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
            console.log(res)
        } catch (error) {
            this.setState({
                error: 'User not found :(',
                res: ''
            }) 
            // this.props.history.push({
            //     pathname: '/result',
            //     state: {
            //         ...error
            //     }
            // })  
            // console.log(error)
        }
    }


    render() {
        const { user } = this.state;
        return (
            <div className='container'>
                {/* <div className='search'> */}
                    <SearchBar
                        classBar='search'
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
                {/* </div> */}
            </div>
        )
    }
}

export default Home