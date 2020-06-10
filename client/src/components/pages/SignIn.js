import React, { useEffect } from 'react';
import { fakeAuth } from '../privateroute/PrivateRoute';

function SignIn({ icon }) {
  useEffect(() => {
    fakeAuth.authenticate();
  }, []);

  const handleClick = () => {
    fakeAuth.authenticate();
  };
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />

        <div className='form-group'></div>

        <a href='http://localhost:3001/auth/github'>
          <button> Click me</button>
        </a>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
