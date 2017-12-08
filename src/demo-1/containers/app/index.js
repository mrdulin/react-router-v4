

import React from 'react';
import {Link, Route} from 'react-router-dom';

import Home from '../home';
import About from '../about';
import Topics from '../topics';

const App = () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/topics'>Topics</Link></li>
    </ul>

    <hr />

    <Route exact path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/topics' component={Topics}></Route>

  </div>
)

export default App;
