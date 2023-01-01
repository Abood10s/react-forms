import React, { Component } from "react";

import "./pagenotfound.css";

class PageNotFound extends Component {
  render() {
    return (
      <div className="errorpage">
        <h1>404 Page not found</h1>
        <p>Something went wrong...</p>
      </div>
    );
  }
}

export default PageNotFound;
