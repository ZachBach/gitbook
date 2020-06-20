import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import { WallContext } from '../../context/wall/wallContext';
import Likes from './Likes';
import Reply from './Reply';

const PostBox = () => {
  const currentUserContext = useContext(CurrentUserContext);
  const wallContext = useContext(WallContext);

  const { postArray, wallPostId } = wallContext;

  useEffect(() => {
    wallContext.getAllWallPosts();
  }, []);

  return (
    <div>
      <div className='form-group'>

        {postArray &&
          postArray.map((post) => {
            return (
              <div>
                <label>{post.userid}</label>
                <div className='form-control'>
                  <p key={post.id}> {post.wallPostContent} </p>
                </div>
                <div className='row' style={{ justifyContent: "left" }}>
                  <Likes id={post.wallPostId} />
                  {/* <Reply /> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostBox;
