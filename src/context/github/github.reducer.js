import {
    SEARCH_USERS,
    LOADING,
    SET_ALERT
} from './github.types';

const githubReducer = (state, action) => {
    if(action.type === SEARCH_USERS){
        return {
            ...state,
            users: action.payload,
            isLoading: false
        }
    }

    if(action.type === SET_ALERT){
        const payloadObj = action.payload;
        
        if(payloadObj){
            return{
                ...state,
                alert: {
                    ...action.payload
                }
            }
        } else {
            return {
                ...state,
                alert: null
            }
        }
    }

    if(action.type === LOADING){
        return {
            ...state,
            isLoading: true
        }
    }

    return state;
}

export default githubReducer;