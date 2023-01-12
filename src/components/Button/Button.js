import React, { Component } from "react";
import "./button.css";
export default class Button extends Component {
  render() {
    return (
      <button type="submit" className="btn" onClick={this.props.handleSubmit}>
        {this.props.btn}
      </button>
    );
  }
}
