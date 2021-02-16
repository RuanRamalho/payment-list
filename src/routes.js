import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './pages/Store';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Store} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
