
require("react-hot-loader/patch")

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import Loading from './containers/Loading';
import { asyncComponent } from 'common/components/AsyncComponent';

import './style.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component>
          <Switch>
            <Route exact path='/' component={asyncComponent({
              loader: require('./containers/home/main').default,
            })} />
            <Route path='/about' component={asyncComponent({
              loader: require('./containers/about/main').default,
              loading: Loading
            })} />
            {/* 在main文件中进行错误处理 */}
            <Route path='/topics' component={asyncComponent({
              loader: require('./containers/topics/main').default
            })} />
            <Route path='/contact' component={asyncComponent({
              loader: require('./containers/contact/main').default
            })} />
            <Route path='/contact' component={asyncComponent({
              loader: require('./containers/NoMatch/main').default,
            })} />
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
