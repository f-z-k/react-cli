
import React from 'react';
import store from './../store'
import { Provider } from 'react-redux';
import app from './../containers/app/view/App'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import layOut from './layout'
const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={ layOut }/>
        <Route exact path="/login" component={ app }/>
        <Route render={ () => <div>404</div> } />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;