import React, { Component } from "react";

import "./freinds.css";

import friendsimg from "../../assets/Games/friends.PNG";
import Heading from "../GamesHeading/Heading";
class Index extends Component {
  render() {
    return (
      <div>
        <Heading title="friends" />
        <div className="friends-cont">
          <div>
            <img className="friends-img" src={friendsimg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
