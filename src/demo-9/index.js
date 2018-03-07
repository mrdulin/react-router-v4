require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Prompt from './containers/Prompt';

import { open } from './actions/popup';
import { store } from './store';
import './style.css';

//默认实现
// const getConfirmation = (message, callback) => {
//   console.log('getConfirmation arguments: ', message, callback);
//   const allowTransition = window.confirm(message);
//   callback(allowTransition);
// };

//基于redux的自定义实现
const getConfirmation = (dataString, callback) => {
  // console.log(dataString);
  const data = JSON.parse(dataString);
  let allowTransition = false;
  store.dispatch(
    open({
      text: data.message,
      //这里confirmCallback和cancelCallback是通用处理逻辑
      confirmCallback: () => {
        allowTransition = true;
        callback(allowTransition);
      },
      cancelCallback: () => {
        allowTransition = false;
        callback(allowTransition);
      }
    })
  );
};

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter getUserConfirmation={getConfirmation}>
          <Component>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/prompt" component={Prompt} />
          </Component>
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/app', () => {
    render(App);
  });
}
