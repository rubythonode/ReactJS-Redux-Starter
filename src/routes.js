import React from 'react';
import {
  Route,
  NotFoundRoute,
  Redirect,
  DefaultRoute,
  IndexRoute
} from 'react-router';

import App from './App';
import Home from './pages/Home';

export default (
  <Route component={App}>
    <Route component={Home} path="/" />
    <Redirect from="/index.html" to="/"/>
    <Redirect from="/*/" to="/*"/>
  </Route>
);