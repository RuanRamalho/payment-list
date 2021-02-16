import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sneaker from './pages/Sneaker';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Sneaker} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
