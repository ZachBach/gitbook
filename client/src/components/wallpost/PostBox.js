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

  console.log(postArray);
  return (
    <div>
      <div className='form-group'>
        <label>{currentUserContext.CurrentUserGitHubHandle}</label>
        <div className='form-control' id='exampleFormControlTextarea1'>
          {postArray &&
            postArray.map((post) => {
              console.log(post);
              return <p key={post.id}> {post.wallPostContent} </p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default PostBox;
