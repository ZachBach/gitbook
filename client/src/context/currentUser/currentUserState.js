import React, { useReducer } from 'react';
import { CurrentUserContext } from './currentUserContext';
import { IS_AUTHENTICATED } from '../types';
import CurrentUserReducer from './currentUserReducer';
import db from './DexieCurrentUser';

const CurrentUserState = (props) => {
    var initialState = {
        // CurrentUserToken: null,
        CurrentUserGitHubHandle: null,
    };

    const [state, dispatch] = useReducer(CurrentUserReducer, initialState);

    db.open().catch((err) => {
        console.log(err.stack || err);
    });


    const updateCurrentUser = async () => {
        const loggedin = localStorage.getItem("user")
        console.log(loggedin)
        console.log("this is state")
        console.log(state)
        let currentuser = window.location.href.substring(window.location.href.indexOf("home") + 5, window.location.href.length)

        if (loggedin === null || loggedin.includes("/")) {
            console.log("run dis shit")
            localStorage.setItem("user", currentuser)
            await dispatch({
                type: IS_AUTHENTICATED,
                payload: currentuser,
            });
        }
        else {
            dispatch({
                type: IS_AUTHENTICATED,
                payload: loggedin,
            });

        }


        // db.user
        //     .add({
        //         handle: currentuser,
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // const getCurrentUser = await fetch('/api/currentuser', {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json',
        //         Accept: 'application/json',
        //     },
        // })
        //     .then((data) => data.json())
        //     .then((result) => {
        //         return result[0];
        //     });

        // const authenticated = await db.user
        //     .where('token')
        //     .equals(getCurrentUser.CurrentUserToken)
        //     .toString();

        // console.log(authenticated.length);
        // if (authenticated.length === undefined) {
        //     console.log('You are not Logged in!!');
        //     return;
        // } else {
        //     db.user
        //         .add({
        //             handle: getCurrentUser.CurrentUserGitHubHandle,
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });

    }
    // const delCurrentUser = fetch('/api/delete/' + getCurrentUser.CurrentUserToken, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-type': 'application/json',
    //         Accept: 'application/json',
    //     },
    // })
    //     .then((data) => {
    //         data.json()
    //         console.log("THIS IS DATTTTTTTTA")
    //         console.log(data)
    //     })
    //     .then((result) => {
    //         console.log("THIS BELOW IS REESULTTTTT")
    //         console.log(result)
    //         return result;
    //     });
    // return delCurrentUser
    // }

    return (
        <CurrentUserContext.Provider value={{ ...state, updateCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserState;
