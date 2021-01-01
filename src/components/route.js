import React from "react";
import { Route, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
  const token = useSelector(state => state.token, shallowEqual)
  return (
    <Route
      {...rest}
      render = {props => (
        token ?
          <Component {...props} />
          :
          <Redirect to="/login" />
      )}
    />
  );
};

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const token = useSelector(state => state.token, shallowEqual)
  return (
    <Route
      {...rest}
      render = {props => (
        token && restricted ?
          <Redirect to="/" />
          :
          <Component {...props} />
      )}
    />
  );
};

export { PrivateRoute, PublicRoute }