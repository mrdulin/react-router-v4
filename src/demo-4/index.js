
require("react-hot-loader/patch")

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import Loading from './containers/Loading';
import { asyncComponent } from 'common/components/AsyncComponent';

import './style.css';

let loadComponentWithContext = moduleName => {
  const defaultFile = 'index.js';
  return new Promise((resolve, reject) => {
    require(`bundle-loader!./containers/${moduleName}/${defaultFile}`)(function (module) {
      const Component = module.default;
      resolve(Component);
    });
  });
};

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component>
          <Switch>
            <Route exact path='/' component={asyncComponent({
              loader: () => loadComponentWithContext('home')
            })} />
            <Route path='/about' component={asyncComponent({
              loader: () => loadComponentWithContext('about')
            })} />
            {/* 在main文件中进行错误处理 */}
            <Route path='/topics' component={asyncComponent({
              loader: () => loadComponentWithContext('topics')
            })} />
            <Route path='/contact' component={asyncComponent({
              loader: () => loadComponentWithContext('contact')
            })} />
            <Route path='/contact' component={asyncComponent({
              loader: () => loadComponentWithContext('NoMatch')
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
