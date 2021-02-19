import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './pages/Store';
import Checkout from './pages/Checkout';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Store} />
      <Route path="/checkout/:id" component={Checkout} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
