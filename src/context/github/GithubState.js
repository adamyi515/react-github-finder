import React, { useReducer } from 'react';
import GithubContext from './github.context';
import githubReducer from './github.reducer';

const GithubState = ({ children }) => {
    const initialState = {
        users:[],
        user: {},
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);


    return(
        <GithubContext.Provider
            value={{
                users: state.users
            }}
        >
            { children }
        </GithubContext.Provider>
    )
}

export default GithubState;