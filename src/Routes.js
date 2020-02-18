import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./register/Register";
import Login from "./login/Login";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" render={(props) => <Login {...props} {...childProps} />} />;
    <Route path="/register" render={(props) => <Register {...props} {...childProps} />} />;
  </Switch>;
