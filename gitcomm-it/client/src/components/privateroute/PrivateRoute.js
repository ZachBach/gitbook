import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export const fakeAuth = {
  isAuthenticated: false,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },

  signout() {
    this.isAuthenticated = false;

    //also need to clear CurrentUser
  },
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          console.log('hi')
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }
    />
  );
};

export default PrivateRoute;
