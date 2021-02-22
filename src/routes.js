import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './pages/Store';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Store} />
      <Route exact path="/checkout/:id" component={Checkout} />
      <Route exact path="/receipt/:id" component={Receipt} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
