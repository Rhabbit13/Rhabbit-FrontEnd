import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../shared/permit";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
