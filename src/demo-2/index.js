require("react-hot-loader/patch");

import "./style.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import App from "./containers/app";
import { store } from "./store";

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter>
          <Component />
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./containers/app", () => {
    render(App);
  });
}
