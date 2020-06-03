import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function SignIn({ icon }) {
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />

        <div className='form-group'></div>
        <a
          className={icon}
          href={'localhost:3001/auth/github'}
          style={{ paddingLeft: '40px' }}>
          &nbsp; Sign in with Github
        </a>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
