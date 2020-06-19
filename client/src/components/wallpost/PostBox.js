import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import { WallContext } from '../../context/wall/wallContext';
import Likes from './Likes';
import Reply from './Reply';

const PostBox = () => {
  const currentUserContext = useContext(CurrentUserContext);
  const wallContext = useContext(WallContext);

  const { postArray } = wallContext;

  useEffect(() => {
    wallContext.getAllWallPosts();
  }, []);

  return (
    <div>
      <div className='form-group'>
        <label>{currentUserContext.CurrentUserGitHubHandle}</label>
        {postArray &&
          postArray.map((post) => {
            console.log('hjkadhjkadskhjashjkdashjkadhjkasdhjkadshjk');
            console.log(post);
            return (
              <div>
                <div className='form-control'>
                  <p key={post.id}> {post.wallPostContent} </p>
                </div>
                <div className='row'>
                  <Likes id={post.wallPostId} />
                  <Reply />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostBox;
