import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    return this.props.isAuthentecated ? <Outlet /> : <Navigate to="/" />;
  }
}

export default ProtectedRoute;
