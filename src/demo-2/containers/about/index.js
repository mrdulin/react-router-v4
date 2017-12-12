import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    console.log('about render: ', this.props.aboutReducers);
    return (
      <div>
        <h2>About Me</h2>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps({ aboutReducers }) {
    return { aboutReducers };
  }
)(About)

