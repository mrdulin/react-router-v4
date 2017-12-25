import React from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

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
            <Link to="/prompt">prompt page</Link>
          </li>
        </ul>
        {this.props.children}
        <Popup />
      </div>
    );
  }
}

export default App;
