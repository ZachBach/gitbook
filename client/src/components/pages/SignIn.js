import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function SignIn({ icon }) {
  const handleClick = (event) => {
    event.preventDefault();
    axios.get('localhost:3001/auth/github').then((response) => {
      console.log(response);
      return response.json;
    });
  };

  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />

        <div className='form-group'></div>
        <button
          className={icon}
          onClick={handleClick}
          style={{ paddingLeft: '40px' }}>
          &nbsp; Sign in with Github
        </button>
      </section>
    </section>
  );
}
SignIn.defaultProps = {
  icon: 'fab fa-github',
};

export default SignIn;
