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
    console.log("this is CBBBBBBBB " + cb)
    if (cb === undefined || cb === null) {
      console.log("null/Undef")
    } else {
      this.isAuthenticated = true;
    }
  },

  signout() {
    this.isAuthenticated = false;
    //also need to clear CurrentUser
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      fakeAuth.isAuthenticated === true ?
        <Component {...props} />
        :
        <Redirect to='/login' />

    )}
  />
);

export default PrivateRoute;
