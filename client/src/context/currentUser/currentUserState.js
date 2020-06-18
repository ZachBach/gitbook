import React, { useReducer } from 'react';
import { CurrentUserContext } from './currentUserContext'
import { IS_AUTHENTICATED } from '../types';
import CurrentUserReducer from './currentUserReducer';
import Dexie from 'dexie'

const CurrentUserState = (props) => {
    var initialState = {
        CurrentUserId: null,
        CurrentUserToken: null,
        CurrentUserGitHubHandle: null
    };

    const [state, dispatch] = useReducer(CurrentUserReducer, initialState);

    const db = new Dexie("CurrentUser")
    db.version(1).stores({
        user: "token, handle"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })

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

        db.user.add({ token: getCurrentUser.CurrentUserToken, handle: getCurrentUser.CurrentUserGitHubHandle })

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
