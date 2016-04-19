import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App';
import Home from '../imports/ui/Home';
import Portfolio from '../imports/ui/Portfolio';
import Contact from '../imports/ui/Contact';

Meteor.startup(() => {
    ReactDOM.render((
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRedirect to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    ), document.getElementById('content'))
});