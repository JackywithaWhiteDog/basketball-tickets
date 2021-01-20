import React from "react"
import { Route, Redirect } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"

const PrivateRoute = ({component: Component, redirect, ...rest}) => {
  const token = useSelector(state => state.user.token, shallowEqual)
  console.log(token)
  return (
    <Route
      {...rest}
      render = {props => (
        token ?
          (
            redirect ?
            <Redirect to={redirect} />
            :
            <Component {...props} />
          )
          :
          <Redirect to="/login" />
      )}
    />
  );
};

const PublicRoute = ({component: Component, restricted, redirect, ...rest}) => {
  const token = useSelector(state => state.user.token, shallowEqual)
  console.log(token)
  return (
    <Route
      {...rest}
      render = {props => (
        token && restricted ?
          <Redirect to="/" />
          :
          (
            redirect ?
            <Redirect to={redirect} />
            :
            <Component {...props} />
          )
      )}
    />
  );
};

export { PrivateRoute, PublicRoute }