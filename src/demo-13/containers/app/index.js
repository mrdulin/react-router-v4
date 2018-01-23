import React from "react";
import PropTypes from "prop-types";
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
