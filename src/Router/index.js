import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import SignUp from '../Views/Sing Up';
import Home from '../Views/Home';
import LogIn from '../Views/Log In';

const PrivateRoute = ({ component, ...options }) => {

  const finalComponente = localStorage.jwt && localStorage.jwt !== 'undefined' ? component : LogIn;
  
  return (

    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...options} component={finalComponente} />
  )
};

const Router = props => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <PrivateRoute exact path="/home" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={LogIn} />
  </Switch>
)

export default Router; 