import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

const MessageBox = () => {
  const currentUserContext = useContext(CurrentUserContext);

  const [msgTyped, setMsgTyped] = useState('');

  const onchange = (e) => {
    setMsgTyped(e.target.value);
    console.log(msgTyped);
  };

  const onsubmit = () => {
    console.log(currentUserContext);
    var newPost = {
      wallPostId: Math.random() * 100000,
      wallPostContent: msgTyped,
      userid: currentUserContext.CurrentUserGitHubHandle,
      parentpostid: currentUserContext.parentpostid,
    };

    fetch('/api/wallpost', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result);
        window.location.reload(false);
      });
  };

  return (
    <form>
      <div className='form-group'>
        <label>{currentUserContext.CurrentUserGitHubHandle}</label>
        <textarea
          onChange={onchange}
          value={msgTyped}
          name='msgcontent'
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'></textarea>
        <button
          type='button'
          onClick={onsubmit}
          className='btn btn-dark btn-block'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default MessageBox;
