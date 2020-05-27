import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />
        <form>
          <div className='form-group'>
            <label>First name</label>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
            />
          </div>

          <div className='form-group'>
            <label>Last name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' className='btn '>
            Sign Up
          </button>
          <button type='submit' className='btn '>
            <Link to='/login'> Login </Link>
          </button>
        </form>
      </section>
    </section>
  );
}

export default SignUp;
