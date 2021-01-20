import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import SignUp from '../Views/Sing Up';
import AppBar from '../Components/appBar';
import LogIn from '../Views/Log In';


export const PrivateRoute = ({ component, ...options }) => {

  const finalComponente = localStorage.jwt && localStorage.jwt !== 'undefined' ? component : LogIn;
  
  return (

    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...options} component={finalComponente} />
  )
};

const Router = props => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from="/" to="/app/home" />
      <Redirect exact from="/app" to='/app/home' />
      <PrivateRoute path="/app" render={AppBar} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  )
};

export default Router; 