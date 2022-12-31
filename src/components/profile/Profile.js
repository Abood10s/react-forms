import React, { Component } from "react";

import "./profile.css";
import profilepic from "../../assets/Games/profile.png";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-cont">
        <div>
          <img src={profilepic} alt="" />
        </div>
        <div>
          <p>Welcome back,</p>
          <p>Jenny!</p>
        </div>
      </div>
    );
  }
}
