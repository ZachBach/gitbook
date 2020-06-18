import React, { useEffect, useContext } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';
import '../styles/SignUp.css';
import Particles from '../layout/Particles';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import db from '../../context/currentUser/DexieCurrentUser'

function SignIn({ icon }) {
  const currentUserContext = useContext(CurrentUserContext);


  const handleClick = async (e) => {
    await currentUserContext.updateCurrentUser();
    console.log('this is from SIGNINNNNN');
    console.log(currentUserContext);
    fakeAuth.authenticate(currentUserContext.CurrentUserToken);
  };

  const signOut = async () => {
    db.user.delete(currentUserContext.CurrentUserToken)
    const delCurrentUser = await fetch('/api/delete/' + currentUserContext.CurrentUserToken, {
      method: 'DELETE',
      body: JSON.stringify(currentUserContext.CurrentUserToken),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result)
        return result;
      });
    return delCurrentUser
  }

  const signInLink = `http://localhost:3001/auth/github`
  const signOutLink = `#`

  const signInText = `Sign In with GitHub`
  const signOutText = `Log Out`

  return (
    <div>
      <Particles></Particles>
      <div className='container-fluid'>
        <div id='loginSection' className='row'>
          <div />
          <div className='form-group'> </div>
          <a href={currentUserContext.CurrentUserToken === null ? signInLink : signOutLink}>
            <button className={icon} onClick={currentUserContext.CurrentUserToken === null ? handleClick : signOut}>
              {' '}
              {currentUserContext.CurrentUserToken === null ? signInText : signOutText}
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
