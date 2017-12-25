require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';

import './style.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Component>
      </HashRouter>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}
