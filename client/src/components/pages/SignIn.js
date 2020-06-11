import React, { useEffect } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';

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
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />

        <div className='form-group'></div>

        <a href='http://localhost:3001/auth/github'>
          <button onClick={handleClick}> Click me</button>
        </a>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
