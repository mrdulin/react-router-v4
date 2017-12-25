require("react-hot-loader/patch");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AppContainer } from "react-hot-loader";

import App from "./containers/App";
import Home from "./containers/Home";
import Search from "./containers/Search";
import NoMatch from "./containers/NoMatch";

import "./style.css";

// 加了basename后的url为
//http://localhost:3000/demo-6/book/home
//http://localhost:3000/demo-6/book/search

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter basename="/demo-6">
        <Component>
          <Switch>
            <Route exact path="/book/home" component={Home} />
            <Route exact path="/book/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </Component>
      </BrowserRouter>
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
