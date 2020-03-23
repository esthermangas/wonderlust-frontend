import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import SignUp from '../Views/Sing Up';
import Home from '../Views/Home';

const PrivateRoute = ({ component, ...options }) => {

  const finalComponente = localStorage.jwt && localStorage.jwt !== 'undefined' ? component : SignUp;
  
  return (
    <Route {...options} component={finalComponente} />
  )
};

const Router = props => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <PrivateRoute exact path="/home" component={Home} />
    <Route exact path="/signup" component={SignUp} />
  </Switch>
)

export default Router; 