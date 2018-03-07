require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import { asyncComponent } from 'common/components/AsyncComponent';

import './style.css';

//几个问题：

//1. 不支持动态chunkname
//https://github.com/webpack-contrib/bundle-loader/issues/31
//2. 不支持错误处理，而且对webpack3，有点过时
//https://github.com/webpack-contrib/bundle-loader/issues/66
const loadModule = moduleName => {
  const defaultFile = 'index.js';
  return new Promise(resolve => {
    const bundle = require(`bundle-loader!./containers/${moduleName}/${defaultFile}`);
    bundle(function(module) {
      const Component = module.default;
      resolve(Component);
    });
  });
};

// 这种方式指定name属性可以正常生成相应的chunkName
// const bundle = require(`bundle-loader?name=about!./containers/about/index.js`);
// bundle(function (module) {
//   const Component = module.default;
//   console.log(Component);
// });

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component>
          <Switch>
            <Route
              exact
              path="/"
              component={asyncComponent({
                loader: () => loadModule('home')
              })}
            />
            <Route
              path="/about"
              component={asyncComponent({
                loader: () => loadModule('about')
              })}
            />
            {/* 在main文件中进行错误处理 */}
            <Route
              path="/topics"
              component={asyncComponent({
                loader: () => loadModule('topics')
              })}
            />
            <Route
              path="/contact"
              component={asyncComponent({
                loader: () => loadModule('contact')
              })}
            />
            <Route
              path="/contact"
              component={asyncComponent({
                loader: () => loadModule('NoMatch')
              })}
            />
          </Switch>
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
