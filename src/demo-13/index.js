require("react-hot-loader/patch");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppContainer } from "react-hot-loader";

import App from "./containers/app";
import Home from "./containers/home";
import About from "./containers/about";
import Login from "./containers/Login";
import User from "./containers/User";

import PrivateRoute from "./components/PrivateRoute";

import "./style.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/login" component={Login} />
          </Switch>
        </Component>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./containers/app", () => {
    render(App);
  });
}
