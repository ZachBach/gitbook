import React, { useReducer } from 'react';
import { WallContext } from './wallContext';
import WallReducer from './wallReducer';

import { WALL_POSTS } from '../types';

const WallState = (props) => {
  var initialState = {
    id: null,
    wallPostId: null,
    wallPostContent: '',
  };

  const [state, dispatch] = useReducer(WallReducer, initialState);

  const getAllWallPosts = () => {
    const getWallPosts = fetch('/api/wallpost', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log('FETCHED RESULTS FROM WALL POSTS');
        console.log(result);
        return result;
      });

    dispatch({
      type: WALL_POSTS,
      payload: getWallPosts,
    });
  };

  return (
    <WallContext.Provider value={{ ...state, getAllWallPosts }}>
      {props.children}
    </WallContext.Provider>
  );
};

export default WallState;