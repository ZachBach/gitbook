import React, { useReducer } from 'react';
import { CurrentUserContext } from './currentUserContext';
import { IS_AUTHENTICATED } from '../types';
import CurrentUserReducer from './currentUserReducer';


const CurrentUserState = (props) => {
    var initialState = {
        CurrentUserGitHubHandle: null,
    };

    const [state, dispatch] = useReducer(CurrentUserReducer, initialState);

    const updateCurrentUser = async () => {
        const loggedin = localStorage.getItem("user")
        let currentuser = window.location.href.substring(window.location.href.indexOf("home") + 5, window.location.href.length)
        console.log(loggedin)

        if (loggedin === null && currentuser !== "" || loggedin.includes("/")) {

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

        //     else if (window.location.href.substring(window.location.href.indexOf("home") + 5, window.location.href.length) === "") {
        // console.log("DIS BETTER NOT RUN")
        // dispatch({
        //     type: IS_AUTHENTICATED,
        //     payload: null,
        // });
        // }
    }


    return (
        <CurrentUserContext.Provider value={{ ...state, updateCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserState;
