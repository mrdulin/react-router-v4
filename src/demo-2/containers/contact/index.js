import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Contact extends React.Component {
  static propTypes = {
    contactReducers: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>contact</h1>
        <p>{this.props.contactReducers.name}</p>
      </div>
    );
  }
}

export default connect(function mapStateToProps({ contactReducers }) {
  return { contactReducers };
})(Contact);
