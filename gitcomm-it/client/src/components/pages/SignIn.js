import React, { useLayoutEffect, useContext } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';
import '../styles/SignUp.css';
import Particles from '../layout/Particles';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

function SignIn({ icon }) {
  const currentUserContext = useContext(CurrentUserContext);

  const handleClick = async () => {
    await currentUserContext.updateCurrentUser();
    fakeAuth.authenticate(currentUserContext.CurrentUserGitHubHandle);
  };

  const signOut = () => {
    // db.user.delete(currentUserContext.CurrentUserGitHubHandle)
    localStorage.clear();
    const delCurrentUser = fetch(
      '/api/delete/' + currentUserContext.CurrentUserGitHubHandle,
      {
        method: 'DELETE',
        // body: JSON.stringify(currentUserContext.CurrentUserId),
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
      .then((data) => {
        data.json();
        console.log('THIS IS DATTTTTTTTA');
        console.log(data);
      })
      .then((result) => {
        console.log('THIS BELOW IS REESULTTTTT');
        console.log(result);
        return result;
      });
    return delCurrentUser;
  };

  const signInLink = `/auth/github`;
  const signOutLink = `/logout`;

  const signInText = `Sign In with GitHub`;
  const signOutText = `Log Out`;

  return (
    <div>
      <Particles></Particles>
      <div className='container-fluid'>
        <div id='loginSection' className='row'>
          <div className='form-group'> </div>
          <a href={signInLink}>
            <button className={icon} onClick={handleClick}>
              {' '}
              {signInText}
            </button>
          </a>
        </div>

        <div id='loginSection' className='row'>
          <div className='form-group'> </div>
          <a href={signOutLink}>
            <button className={icon} onClick={signOut}>
              {' '}
              {signOutText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
