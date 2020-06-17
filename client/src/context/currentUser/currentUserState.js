import React, { useReducer } from 'react';
import { CurrentUserContext } from './currentUserContext'
import { IS_AUTHENTICATED } from '../types';
import CurrentUserReducer from './currentUserReducer';


const CurrentUserState = (props) => {
    var initialState = {
        CurrentUserId: null,
        CurrentUserToken: null,
        CurrentUserGitHubHandle: null
    };

    const [state, dispatch] = useReducer(CurrentUserReducer, initialState);

    const updateCurrentUser = async () => {
        const getCurrentUser = await fetch('/api/currentuser', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((data) => data.json())
            .then((result) => {
                return result[0];
            })
        dispatch({
            type: IS_AUTHENTICATED,
            payload: getCurrentUser
        });
    };

    return (
        <CurrentUserContext.Provider value={{ ...state, updateCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserState;
