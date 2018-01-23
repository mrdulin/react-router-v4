import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class About extends React.Component {
  static defaultProps = {
    aboutReducers: {}
  };

  static propTypes = {
    aboutReducers: PropTypes.object
  };

  render() {
    return (
      <div>
        <h2>About Me</h2>
        <p>{this.props.aboutReducers.name}</p>
      </div>
    );
  }
}

export default connect(function mapStateToProps({ aboutReducers }) {
  return { aboutReducers };
})(About);
