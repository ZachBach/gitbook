import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import { WallContext } from '../../context/wall/wallContext';

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
        <div className='form-control'>
          {/* {postArray &&
            postArray.map((post) => {
              return <p key={post.id}> {post.wallPostContent} </p>;
            })} */}
        </div>
      </div>
    </div>
  );
};

export default PostBox;
