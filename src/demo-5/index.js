
require("react-hot-loader/patch")


import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import App from './containers/app';

import Home from './containers/home';
import About from './containers/about';
import Topics from './containers/topics';
import NoMatch from './containers/NoMatch';

import './style.css';

const domains = {
  baidu: 'baidu.com',
  localhost: 'localhost:2223'
}

// const hash = localStorage.getItem('demo-5$hash');
console.log('hash: ', hash);
console.log('document.referrer: ', document.referrer);
// if (document.referrer.indexOf(domains.baidu) !== -1) {
//   // window.location.href = hash;
//   window.location.replace(hash);
// }

if (document.referrer.indexOf(domains.localhost) !== -1) {
  window.location.replace(hash);
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
            <Route component={NoMatch} />
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
