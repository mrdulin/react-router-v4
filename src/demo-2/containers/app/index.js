

import React from 'react';
import { Link, Route } from 'react-router-dom';
import loadAbout from 'bundle-loader?lazy!../about';
import loadTopics from 'bundle-loader?lazy!../topics'

import Home from '../home';

class App extends React.PureComponent {

  componentDidMount() {
    loadAbout(() => {});
    loadTopics(() => {});
  }

  render() {
    return (
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
  }
}






export default App;
