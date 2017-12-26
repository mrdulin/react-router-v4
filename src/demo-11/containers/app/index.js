import React from 'react';
import Container from './container';

class App extends React.Component {
  render() {
    const { children } = this.props;
    return children;
  }
}
export default App;
