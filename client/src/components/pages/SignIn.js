import React, { useEffect } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';
import '../styles/SignUp.css';
import Particles from 'react-particles-js';

function SignIn({ icon }) {
  const handleClick = async (e) => {
    e.preventDefault()
    const getCurrentUser = await fetch('/api/currentuser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result[0].CurrentUserToken + "***********")
        return result[0].CurrentUserToken
      });

    fakeAuth.authenticate(getCurrentUser);
  };
  return (
    <div>
    <div id="particles-js"></div>

      <div className='container-fluid'>
        <div id='loginSection' className='row'
        >
          <section
          // className='col-12 col-sm-6 col-md-3'
          />
          <div className='form-group'></div>

          <a href='http://localhost:3001/auth/github'>
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
