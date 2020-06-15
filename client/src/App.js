import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import SignIn from './components/pages/SignIn';
import Wall from './components/pages/Wall';
import ChatApp from './components/pages/ChatApp';
// import PrivateRoute from './components/privateroute/PrivateRoute';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import WallState from './context/wall/wallState';
// import Login, { fakeAuth } from './components/privateroute/Login';

import './App.css';
import CurrentUserState from './context/currentUser/currentUserState';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         fakeAuth.isAuthenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: '/login', state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// };

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <CurrentUserState>
          <WallState>
            <Router>
              <div className='App'>
                <Navbar />
                <div className='container'>
                  <Alert />
                  <Switch>
                    {/* <Route path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <PrivateRoute path='/admin' component={Admin} /> */}
                    <Route exact path='/chat' component={ChatApp} />
                    <Route exact path='/home' component={Wall} />
                    <Route exact path='/search' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:login' component={User} />
                    <Route exact path='/' component={SignIn} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
          </WallState>
        </CurrentUserState>
      </AlertState>
    </GithubState>
  );
};

// const Home = (props) => (
//   <div>
//     <h2>Home {console.log(props)}</h2>
//   </div>
// );

const Admin = ({ match }) => {
  return (
    <div>
      {' '}
      <h2>Welcome admin </h2>
    </div>
  );
};

export default App;
