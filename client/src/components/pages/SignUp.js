import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import InputContext from '../../context/input/inputContext';
import axios from 'axios';
import '../styles/SignUp.css';

const SignUp = () => {
  const [signup, setSignup] = useState([]);
  const inputContext = useContext(InputContext);

  const [state, setState] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };



  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // get our form data out of state
  //   const { firstName, lastName, email } = state.value;
  //   router.post('localhost:3001/signup', { firstName, lastName, email }).then((result) => {
  //     //access the results here....
  //     console.log(result)

  //   });
  // };

  // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  const onsubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    // get form data out of state
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      }}).then((result) => {
        console.log(result);
      }).then(data => {
        console.log(data)
      })
  };
  
  return (
    <section className='container-fluid'>
      <section className='row'>
        <section className='col-12 col-sm-6 col-md-3' />
        <form onSubmit={onsubmit}>
        <div className='form-group'>
            <label>First name</label>
            <input
              type='text'
              name='firstName'
              value={state.firstName}
              onChange={onChange}
              className='form-control'
              placeholder='First name'
            />
          </div>

          <div className='form-group'>
            <label>Last name</label>
            <input
              type='text'
              name='lastName'
              value={state.lastName}
              onChange={onChange}
              className='form-control'
              placeholder='Last name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              email='text'
              onChange={onChange}
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
              password='text'
              onChange={onChange}
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn '> Sign up </button>
          <button className='btn '>
            <Link to='/login'> Login </Link>
          </button>
        </form>
      </section>
    </section>
  );
};

export default SignUp;
