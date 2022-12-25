import React, { Component } from "react";
import "./logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <div className="title-cont">
          <img src={this.props.img} alt="gamers logo" className="logo" />
          <p className="title" style={{ color: `${this.props.color}` }}>
            Gamers
          </p>
        </div>
      </div>
    );
  }
}
