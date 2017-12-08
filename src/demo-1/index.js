import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Redirect} from 'react-router-dom';

import Home from './modules/home/main';
import About from './modules/about/main';
import Topics from './modules/topics/main';

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
