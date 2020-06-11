import React, { useEffect } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';
import '../styles/SignUp.css';
import Particles from '../layout/Particles';

function SignIn({ icon }) {
  const handleClick = async (e) => {
    e.preventDefault();
    const getCurrentUser = await fetch('/api/currentuser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((result) => {
        console.log(result[0].CurrentUserToken + '***********');
        return result[0].CurrentUserToken;
      });

    fakeAuth.authenticate(getCurrentUser);
  };
  return (
    <div>
      <Particles></Particles>

      <section className='container-fluid'>
        <section id='loginSection' className='row'>
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
        </section>
      </section>
    </div>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
