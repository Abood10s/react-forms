import React, { Component } from "react";

import Heading from "../../components/GamesHeading/Heading";
import LpCard from "../../components/lp-card/LpCard";

import lp1 from "../../assets/Games/lp1.png";
import lp2 from "../../assets/Games/lp2.png";
import lp3 from "../../assets/Games/lp3.png";
import lp4 from "../../assets/Games/lp4.png";
class LastPlayed extends Component {
  render() {
    return (
      <div>
        <Heading title="last played" />
        <LpCard img={lp3} desc="Hogwarts Legacy 50%" />
        <LpCard img={lp2} desc="God Of War: Ragnarök 72.5%" />
        <LpCard img={lp1} desc="Crash Bandicoot N. Sane Trilogy 34%" />
        <LpCard img={lp4} desc="Dying Light 2 Stay Human 100%" />
      </div>
    );
  }
}

export default LastPlayed;
