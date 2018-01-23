import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends React.Component {
  static propTypes = {
    homeReducers: PropTypes.object
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.props.homeReducers.name}</p>
      </div>
    );
  }
}

export default connect(function mapStateToProps({ homeReducers }) {
  return { homeReducers };
})(Home);
