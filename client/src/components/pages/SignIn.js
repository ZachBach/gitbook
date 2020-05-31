import React from 'react';

function SignIn({ icon }) {
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />
        <form>
          <div className='form-group'></div>
          <a
            className={icon}
            href='/auth/github'
            style={{ paddingLeft: '40px' }}>
            &nbsp; Sign in with Github
          </a>
        </form>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
