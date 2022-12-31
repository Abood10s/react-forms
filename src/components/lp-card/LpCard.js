import React, { Component } from "react";
import "./lpcard.css";

export default class LpCard extends Component {
  render() {
    const { img, desc } = this.props;
    return (
      <div className="lp-card">
        <img src={img} alt="last-played card" />
        <p>{desc}</p>
      </div>
    );
  }
}
