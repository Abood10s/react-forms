import React, { Component } from "react";

import Heading from "../GamesHeading/Heading";
import "./trophycard.css";

import trophy from "../../assets/Games/cup.png";
import green from "../../assets/Games/green.png";

class TrophyCard extends Component {
  render() {
    return (
      <div>
        <Heading title="most recent trophy" />
        <div className="trophy-cont">
          <div className="trophy-section">
            <img className="green" src={green} alt="" />
            <img src={trophy} alt="" />
            <div>
              <p className="txt">perfect KILL streak You are in the 0.5% </p>
            </div>
          </div>
          <div className="card-txt">
            <h4>assassin's creed odyssey</h4>
            <p>last played: 34 hours ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TrophyCard;
