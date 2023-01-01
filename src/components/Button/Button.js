import React, { Component } from "react";
import "./button.css";
export default class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className="btn">
        {this.props.btn}
      </button>
    );
  }
}
