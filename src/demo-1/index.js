require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import './style.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
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
