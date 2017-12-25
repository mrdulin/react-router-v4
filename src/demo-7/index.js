require("react-hot-loader/patch");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { AppRouter, AppRouterProps } from "./router";

import { AppContainer } from "react-hot-loader";

import App from "./containers/App";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Detail from "./containers/Detail";
import NoMatch from "./containers/NoMatch";

import "./style.css";

console.log('AppRouterProps: ', AppRouterProps);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <AppRouter {...AppRouterProps}>
        <Component>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </Component>
      </AppRouter>
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./containers/App", () => {
    render(App);
  });
}
