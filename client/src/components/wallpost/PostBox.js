import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import { WallContext } from '../../context/wall/wallContext';

const PostBox = () => {
  const currentUserContext = useContext(CurrentUserContext);
  const wallContext = useContext(WallContext);

  const { id, wallPostId, wallPostContent } = wallContext;

  useEffect(() => {
    wallContext.getAllWallPosts();
  }, []);

  const posts = wallPostContent;
  console.log(posts);

  return (
    <div>
      <div className='form-group'>
        <label>{currentUserContext.CurrentUserGitHubHandle}</label>
        <div className='form-control' id='exampleFormControlTextarea1' rows='3'>
          {/* {wallContext.wallPostContent.map((post) => (
            <p key={[post.id]}></p>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default PostBox;
