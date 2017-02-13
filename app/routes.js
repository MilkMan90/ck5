// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import PlayerWindowContainer from './containers/PlayerWindowContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PlayerWindowContainer} />
  </Route>
);
