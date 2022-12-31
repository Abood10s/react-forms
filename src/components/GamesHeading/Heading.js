import React, { Component } from "react";
import "./heading.css";
export default class Heading extends Component {
  render() {
    return <h2 className="heading-title">{this.props.title}</h2>;
  }
}
