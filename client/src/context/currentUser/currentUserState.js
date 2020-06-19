import React, { useReducer } from 'react';
import { CurrentUserContext } from './currentUserContext';
import { IS_AUTHENTICATED } from '../types';
import CurrentUserReducer from './currentUserReducer';
import db from './DexieCurrentUser';

const CurrentUserState = (props) => {
  var initialState = {
    CurrentUserId: null,
    CurrentUserToken: null,
    CurrentUserGitHubHandle: null,
  };

  const [state, dispatch] = useReducer(CurrentUserReducer, initialState);

  db.open().catch((err) => {
    console.log(err.stack || err);
  });

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
      });

    const authenticated = await db.user
      .where('token')
      .equals(getCurrentUser.CurrentUserToken)
      .toString();
    console.log(authenticated.length);
    if (authenticated.length < 1) {
      console.log('You are not Logged in!!');
      return;
    } else {
      db.user
        .add({
          token: getCurrentUser.CurrentUserToken,
          handle: getCurrentUser.CurrentUserGitHubHandle,
        })
        .catch((err) => {
          console.log(err);
        });

      dispatch({
        type: IS_AUTHENTICATED,
        payload: getCurrentUser,
      });
    }
  };

  return (
    <CurrentUserContext.Provider value={{ ...state, updateCurrentUser }}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserState;
