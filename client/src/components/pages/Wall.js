import React from 'react';
import WallPost from '../wallpost/WallPost';
import WritePost from '../wallpost/WritePost';

const Wall = () => {
  return (
    <div>
      <WallPost />
      <br />
      <WritePost />
    </div>
  );
};

export default Wall;
