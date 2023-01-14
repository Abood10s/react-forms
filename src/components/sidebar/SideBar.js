import React, { Component } from "react";

import "./sidebar.css";

import controller from "../../assets/Games/side1.PNG";
import heart from "../../assets/Games/side2.PNG";
import settings from "../../assets/Games/side3.PNG";
import piece from "../../assets/Games/side4.PNG";
import moon from "../../assets/Games/moon.png";
import sun from "../../assets/Games/sun.PNG";

export default class SideBar extends Component {
  render() {
    return (
      <div
        className={`sidebar ${this.props.theme === "dark" ? "dark" : "light"}`}
      >
        <div>
          <img src={controller} alt="" className="controller" />
        </div>
        <div className="sidebar-icons">
          <img src={heart} alt="" />
          <img src={settings} alt="" />
          <img src={piece} alt="" />
        </div>
        <div className="sidebar-theme">
          <img src={moon} alt="dark" onClick={this.props.setDarkTheme} />
          <img src={sun} alt="light" onClick={this.props.setLightTheme} />
        </div>
        <div className="sidebar-line"></div>
      </div>
    );
  }
}
