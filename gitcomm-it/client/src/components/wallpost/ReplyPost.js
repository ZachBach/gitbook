import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

const ReplyPost = () => {
  const currentUserContext = useContext(CurrentUserContext);
  const [msgTyped, setMsgTyped] = useState('');

  const onchange = (e) => {
    setMsgTyped(e.target.value);
    console.log(msgTyped);
  };

  const onsubmit = () => {
    console.log(currentUserContext);
    var newReplyPost = {
      replyPostId: Math.random() * 100000,
      replyPostContent: msgTyped,
      userid: currentUserContext.CurrentUserGitHubHandle,
      parentpostid: currentUserContext.parentpostid,
    };

    fetch('/api/replypost', {
      method: 'POST',
      body: JSON.stringify(newReplyPost),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <div className='form-group'>
        <label>{currentUserContext.CurrentUserGitHubHandle}</label>
        <textarea
          onChange={onchange}
          value={msgTyped}
          name='msgcontent'
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
        ></textarea>
        <button type='button' onClick={onsubmit} className='btn btn-primary'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReplyPost;
