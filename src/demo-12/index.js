require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Search from './containers/Search';
import Popup from './components/Popup';

import './style.css';

const getConfirmation = (stringMessage = '', callback) => {
  // console.log('stringMessage: ', stringMessage);
  const message = JSON.parse(stringMessage);
  Popup.allowTransitionCallback = callback;
  Popup.show();
  callback(message.allowTransition);
};

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter getUserConfirmation={getConfirmation}>
        <Component>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
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
