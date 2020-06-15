import React, { useReducer, useContext } from 'react';
import { LikesContext } from './likesContext';
import { LIKED, UNLIKED, LOAD } from '../types';
import LikesReducer from './likesReducer';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext'

const LikesState = (props) => {
  const currentUserContext = useContext(CurrentUserContext);
  var initialState = {
    likesCount: 0,
    status: false,
    postid: 50,
    userid: currentUserContext.CurrentUserGitHubHandle
  };

  const [state, dispatch] = useReducer(LikesReducer, initialState);

  // const getLikes = async () => {
  //   const getdata = fetch('/api/likes', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((result) => {
  //       console.log("from GETLIKES FUNCTION")
  //       console.log(result)
  //       return result;
  //     })
  // }


  // const onLoad = async () => {
  //   console.log("this is from OnLOAD FUCNTIOn")
  //   const temp = await getLikes
  //   await dispatch({
  //     type: LOAD,
  //     payload: getLikes
  //   })
  // }

  const likeClicked = async () => {
    fetch('/api/likes', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log('FROm CURRENT LIKES STATE')
        console.log(result);
        return result;
      });
    await dispatch({
      type: LIKED
    });
  };

  const unlikeClicked = async () => {
    fetch('/api/likes', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log('FROm CURRENT LIKES STATE')
        console.log(result);
        return result;
      });
    await dispatch({
      type: UNLIKED
    })
  }
  return (
    <LikesContext.Provider value={{ ...state, likeClicked, unlikeClicked }}>
      {props.children}
    </LikesContext.Provider>
  );
};

export default LikesState;
