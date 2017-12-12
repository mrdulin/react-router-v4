import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.props.homeReducers.name}</p>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps({ homeReducers }) {
    return { homeReducers };
  }
)(Home);


