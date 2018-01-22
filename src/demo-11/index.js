require("react-hot-loader/patch");

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import App from "./containers/app";
import Home from "./containers/home";
import About from "./containers/about";
import Topics from "./containers/topics";
import "./style.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
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
