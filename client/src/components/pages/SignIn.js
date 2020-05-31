import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function SignIn({ icon }) {
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />
        <form>
          <div className='form-group'></div>
          <Link
            className={icon}
            to='/auth/github'
            style={{ paddingLeft: '40px' }}>
            &nbsp; Sign in with Github
          </Link>
        </form>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
