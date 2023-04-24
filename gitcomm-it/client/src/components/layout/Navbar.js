import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';

const Navbar = ({ icon, title }) => {
  const currentUserContext = useContext(CurrentUserContext);
  return (
    <nav className='navbar bg-success'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/'>
            {currentUserContext.CurrentUserGitHubHandle === null
              ? 'Log in'
              : 'Log out'}
          </Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/chat'>Chat</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>

      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Git Comm.it',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
