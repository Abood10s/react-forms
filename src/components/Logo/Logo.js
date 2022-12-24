import React, { Component } from "react";
import logo from "../../assets/logo2.png";
import "./logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <div className="title-cont">
          <img src={logo} alt="gamers logo" className="logo" />
          <p className="title">Gamers</p>
        </div>
      </div>
    );
  }
}
