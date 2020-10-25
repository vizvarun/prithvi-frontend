/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
const hist = createBrowserHistory();

export default function App() {
  return (
    <div>
      <Router history={hist}>
        <Switch>
          <Route path="/" render={props => <HomePage {...props} />} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
