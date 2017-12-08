

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Home from '../home';
import Loading from '../Loading';

import { asyncComponent } from 'common/components/AsyncComponent';
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={asyncComponent({ loader: () => import('../about'), loading: Loading })}></Route>
          <Route path='/topics' component={asyncComponent({ loader: () => import('../topics') })}></Route>
          <Route path='/contact' component={asyncComponent({ loader: () => import('../contact'), loading: Loading })} />
          <Route component={asyncComponent({ loader: () => import('../NoMatch') })} />
        </Switch>
      </div>
    )
  }
}

export default App;
