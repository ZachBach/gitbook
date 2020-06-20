import React, { useReducer, useContext } from 'react';
import { LikesContext } from './likesContext';
import { LIKED, UNLIKED, LOAD } from '../types';
import LikesReducer from './likesReducer';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

const LikesState = (props) => {
  const currentUserContext = useContext(CurrentUserContext);
  const currentUser = currentUserContext.CurrentUserGitHubHandle;
  var currentid = props['children']['props']['children'][0]['props']['postid'];
  var initialState = {
    likesCount: 0,
    status: false,
    postid: currentid,
    userid: currentUser,
  };

  const [state, dispatch] = useReducer(LikesReducer, initialState);

  const getLikes = () => {
    const getdata = fetch('/api/likes', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => {
        console.log('THIS IS LIKES DATA');
        console.log(data);
        data.json();
      })
      .then((result) => {
        console.log(result);
        console.log('jflasdjf;asdfasdf');
        return result;
      });
    return getdata;
  };

  const onLoad = async () => {
    let temp;
    await getLikes().then((data) => (temp = data));
    // if (getLikes.likesCount === undefined) {
    //   temp = initialState;
    // }
    await dispatch({
      type: LOAD,
      payload: temp,
    });
  };

  const likeClicked = async (id) => {
    console.log("Props")
    console.log(props)
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
        console.log(result);
        return result;
      });
    await dispatch({
      type: LIKED,
      payload: id,
    });
  };

  const unlikeClicked = async () => {
    // fetch('/api/likes/:userid/:postid', {
    //   method: 'DELETE',
    //   body: JSON.stringify(state),
    //   headers: {
    //     'Content-type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // })
    //   .then((data) => data.json())
    //   .then((result) => {
    //     return result;
    //   });
    await dispatch({
      type: UNLIKED,
      payload: currentid,
    });
  };
  return (
    <LikesContext.Provider
      value={{ ...state, likeClicked, unlikeClicked, onLoad }}>
      {props.children}
    </LikesContext.Provider>
  );
};

export default LikesState;
