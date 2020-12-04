import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from '../../components/Store/Provider';
import RoutesPrivate from '../../components/Routes/Private';

//Pages
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';

//Style
import './theme.css';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
