import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
