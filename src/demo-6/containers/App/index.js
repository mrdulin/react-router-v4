import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/book/home'>Home</Link></li>
          <li><Link to='/book/search'>search</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
