import React, {useReducer} from 'react'
import axios from 'axios'
import GitHubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props =>{
    const initialState = {
        users: [],
        users:{},
        repos: [],
        loading :false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    const searchUsers = async (text) => {
        setLoading()
        console.log(text)
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        console.log(res.data)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
        setLoading(false)
      }

    // Get Users

    // Get Repos

    // Set Loading
      const setLoading = () => dispatch({type: SET_LOADING})
    return <GitHubContext.Provider  
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers

        }}
       >
           {props.children}
       </GitHubContext.Provider> 
}
export default GithubState;