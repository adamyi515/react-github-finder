import React, { useReducer } from 'react';
import GithubContext from './github.context';
import githubReducer from './github.reducer';
import {
    SEARCH_USERS,
    GET_USER,
    SET_ALERT,
    LOADING
} 
from './github.types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = ({ children }) => {
    const initialState = {
        users:[],
        user: {},
        isLoading: false,
        alert: null
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Dispatch Method ////////////////////////////////////////////////////////////
    const searchUsers = (text) => {
        setLoading();

        fetch(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
            &client_secret=${githubClientSecret}`)
        .then(response => response.json())
        .then(data => dispatch({ type: SEARCH_USERS, payload: data.items }) );
    }

    const getUser = (username) => {
        setLoading();

        fetch(`https://api.github.com/users/${username}?client_id=${githubClientId}
        &client_secret=${githubClientSecret}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_USER, payload: data}));

    }

    const setAlert = ({ type, msg }) => {
        dispatch({ type: SET_ALERT, payload: {type, msg}})

        setTimeout(() => {
            dispatch({ type: SET_ALERT })
        }, 5000);
    }

    const setLoading = () => {
        dispatch({ type: LOADING });
    }

    return(
        <GithubContext.Provider
            value={{
                users: state.users,
                isLoading: state.isLoading,
                alert: state.alert,
                user: state.user,
                searchUsers,
                setAlert,
                getUser
            }}
        >
            { children }
        </GithubContext.Provider>
    )
}

export default GithubState;