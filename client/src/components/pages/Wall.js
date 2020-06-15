import React from 'react';
import WallPost from '../wallpost/WallPost';
import WritePost from '../wallpost/WritePost';

const Wall = () => {
  return (
    <div>
      <WritePost />
      <br />
      <WallPost />
    </div>
  );
};

export default Wall;
