import React, { Component } from "react";
import "./header.css";
export default class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="header-cont">
        <h2 className="header-h">{title}</h2>
        <p className="header-p">{subtitle}</p>
      </div>
    );
  }
}
