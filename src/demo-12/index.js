require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';

import './style.css';

const $portal = document.getElementById('portal');
const getConfirmation = (stringMessage = '', callback) => {
  console.log('stringMessage: ', stringMessage);
  const message = JSON.parse(stringMessage);
  const $popup = $portal.firstElementChild;
  if ($popup) {
    $popup.style.display = 'block';
    const allowTransition = message.allowTransition;
    callback(allowTransition);
  }
};

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter getUserConfirmation={getConfirmation}>
        <Component>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Component>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('main')
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}
