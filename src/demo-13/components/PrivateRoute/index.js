import React from "react";
import { Redirect, Route } from "react-router-dom";
import authService from "../../services/auth";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: PrivateComponent, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated ? (
        <PrivateComponent {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node,
  location: PropTypes.object
};

export default PrivateRoute;
