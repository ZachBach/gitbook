import React, { useEffect, useContext } from 'react';
import PostBox from './PostBox';
import LikesState from '../../context/Likes/likesState';

const WallPost = () => {
  const wallpostId = 2;

  return (
    <LikesState>
      <div>
        <PostBox postid={wallpostId} />
        <div className='row'>
        </div>
      </div>
    </LikesState>
  );
};

export default WallPost;
