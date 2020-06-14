import React, { useState, useContext } from 'react';
import WallMsgContext from '../../context/WallMessages/wallMsgContext';

const MessageBox = () => {
  const [wallposting, setWallPosting] = useState([]);
  const wallMsgContext = useContext(WallMsgContext);

  const [state, setState] = useState('');

  const onChange = (e) => {
    const inputValue = e.target.value;
    setState({
      ...state,
      [e.target.name]: inputValue,
    });
  };

  const onsubmit = (event) => {
    //   event.preventDefault();
    // get form data out of state
    var newPost = {
      wallPostId: Math.random(),
      wallPostContent: state.msgcontent,
    };
    fetch('/api/wallpost', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((result) => {
        // console.log(result);
      })
      .then((data) => {
        // console.log(data);
      });
  };

  return (
    <div>
      <div className='form-group'>
        <label>githubHandle</label>
        <textarea
          value={state.msgcontent}
          name='msgcontent'
          onChange={onChange}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'></textarea>
        <button type='button' onClick={onsubmit} className='btn btn-primary'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
