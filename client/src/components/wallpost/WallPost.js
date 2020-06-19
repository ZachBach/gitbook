import React, { useEffect, useContext } from 'react';
import PostBox from './PostBox';
import LikesState from '../../context/Likes/likesState';

const WallPost = () => {
  return (
    <LikesState>
      <div>
        <PostBox />
        <div className='row'></div>
      </div>
    </LikesState>
  );
};

export default WallPost;
