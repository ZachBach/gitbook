import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
import CurrentUserState from './context/currentUser/currentUserState';
import WallState from './context/wall/wallState';

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
                    <Route exact path='/chat' component={ChatApp} />
                    <Route path='/home' component={Wall} />
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

export default App;
