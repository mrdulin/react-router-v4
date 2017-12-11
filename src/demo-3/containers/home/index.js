import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h2>Home</h2>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/topics'>Topics</Link></li>
      <li><Link to='/contact'>contact</Link></li>
    </ul>
  </div>
)
