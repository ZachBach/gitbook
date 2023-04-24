import React, { useReducer } from 'react';
import { ReplyContext } from './replyContext';
import ReplyReducer from './replyReducer';

import { REPLY_POSTS } from '../types';

const ReplyState = (props) => {
  var initialState = {
    id: null,
    replyPostId: null,
    replyPostContent: '',
  };

  const [state, dispatch] = useReducer(ReplyReducer, initialState);

  const getAllReplyPosts = async () => {
    const getReplyPosts = await fetch('/api/replypost', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        return result;
      });

    dispatch({
      type: REPLY_POSTS,
      payload: getReplyPosts,
    });
  };

  return (
    <ReplyContext.Provider value={{ ...state, getAllReplyPosts }}>
      {props.children}
    </ReplyContext.Provider>
  );
};

export default ReplyState;
