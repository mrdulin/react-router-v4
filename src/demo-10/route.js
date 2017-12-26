import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './containers/home';
import About from './containers/about';
import Topics from './containers/topics';

const AppRouter = withRouter(({ location }) => {
  console.log('AppRouter location: ', location);
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="fade"
        key={location.pathname.split('/')[1]}
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default AppRouter;
