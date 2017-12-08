
require("react-hot-loader/patch")


import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './containers/app';


import './style.css';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component></Component>
      </HashRouter>
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/app', () => { render(App) })
}
