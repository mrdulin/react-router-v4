import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About Me v2</h2>
        <p>{this.props.aboutReducers.name}</p>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps({ aboutReducers }) {
    return { aboutReducers };
  }
)(About);

