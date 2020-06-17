import React, { useEffect, useContext } from 'react';
import Likes from './Likes';
import Reply from './Reply';
import PostBox from './PostBox';
import LikesState from '../../context/Likes/likesState';
import { WallContext } from '../../context/wall/wallContext';

const WallPost = () => {
  const wallpostId = 2;

  const wallContext = useContext(WallContext);

  const { postArray } = wallContext;

  useEffect(() => {
    wallContext.getAllWallPosts();
  }, []);

  return (
    <LikesState>
      <div>
        <PostBox postid={wallpostId} />
        {postArray &&
          postArray.map((post) => {
            console.log(post);
            return (
              <PostBox>
                <p key={post.id}> {post.wallPostContent} </p>;
              </PostBox>
            );
          })}
        <div className='row'>
          <Likes />
          <Reply />
        </div>
      </div>
    </LikesState>
  );
};

export default WallPost;
