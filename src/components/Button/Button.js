import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";
export default class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className="btn">
        {/* <Link to="/games" className="btn">
          Login
        </Link> */}
        {this.props.btn}
      </button>
    );
  }
}
