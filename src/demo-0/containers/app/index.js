import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
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
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
