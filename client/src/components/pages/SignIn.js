import React, { useEffect, useContext } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';
import '../styles/SignUp.css';
import Particles from '../layout/Particles';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

function SignIn({ icon }) {
  const currentUserContext = useContext(CurrentUserContext);

  const handleClick = async (e) => {
    // const getCurrentUser = await fetch('/api/currentuser', {
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // })
    //   .then((data) => data.json())
    //   .then((result) => {
    //     return result[0].CurrentUserToken;
    //   });
    await currentUserContext.updateCurrentUser();
    console.log('this is from SIGNINNNNN');
    console.log(currentUserContext);
    fakeAuth.authenticate(currentUserContext.CurrentUserToken);
  };

  return (
    <div>
      <Particles></Particles>
      <div className='container-fluid'>
        <div id='loginSection' className='row'>
          <div
          // className='col-12 col-sm-6 col-md-3'
          />
          <div className='form-group'></div>
          <a href='/auth/github'>
            <button className={icon} onClick={handleClick}>
              {' '}
              Sign In with Github
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
