
require("react-hot-loader/patch")


import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './containers/app';

import Home from './containers/home';
import About from './containers/about';
import Topics from './containers/topics';

import './style.css';

const hash = localStorage.getItem('demo-5$hash');
console.log('hash: ', hash);
console.log('document.referrer: ', document.referrer);
if (document.referrer.indexOf('baidu.com') !== -1) {
  window.location.href = hash;
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topics' component={Topics}></Route>
          </Switch>
        </Component>
      </HashRouter>
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/app', () => { render(App) })
}
