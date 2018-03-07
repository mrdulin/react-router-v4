import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { HomeModules } from '../home/async';
import { AboutModules } from '../about/async';
import { TopicModules } from '../topics/async';
import { ContactModules } from '../contact/async';
import { NoMatchModules } from '../NoMatch/async';
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomeModules} />
          <Route path="/about" component={AboutModules} />
          <Route path="/topics" component={TopicModules} />
          <Route path="/contact" component={ContactModules} />
          <Route component={NoMatchModules} />
        </Switch>
      </div>
    );
  }
}

export default App;
