import React from 'react';

const PostBox = () => {
  fetch('/api/wallpost', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((data) => data.json())
    .then((result) => {
      console.log(result);
    });

  return (
    <div>
      <div className='form-group'>
        <label>githubHandle</label>
        <div className='form-control' id='exampleFormControlTextarea1' rows='3'>
          Message
        </div>
      </div>
    </div>
  );
};

export default PostBox;
