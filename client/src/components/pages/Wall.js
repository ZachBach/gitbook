import React, { useContext, useLayoutEffect } from 'react';
import WallPost from '../wallpost/WallPost';
import WritePost from '../wallpost/WritePost';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext'

const Wall = () => {

  const currentUserContext = useContext(CurrentUserContext);

  useLayoutEffect(() => {
    currentUserContext.updateCurrentUser()
  }, [])


  return currentUserContext.CurrentUserGitHubHandle && (
    < div >
      <WritePost />
      <br />
      <WallPost />
    </div >
  );
};

export default Wall;
