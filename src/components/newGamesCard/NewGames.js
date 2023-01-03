import React, { Component } from "react";

import GameCard from "../GameCard/GameCard";
import Heading from "../GamesHeading/Heading";
import "./newgames.css";
import spiderman from "../../assets/Games/spiderman.png";
import superman from "../../assets/Games/superman.png";
import godofwar from "../../assets/Games/godofwar.png";

export default class NewGames extends Component {
  render() {
    return (
      <div>
        <Heading title="NEW GAMES" />

        <div className="games-scroll">
          <section className="games-cards">
            <GameCard
              img={godofwar}
              body="Join in the new DLC with Kratos to learn more about him and his future."
            />
            <GameCard
              img={superman}
              body="Be part of the Suicide Squad and kill the Justice League!
-Amanda Waller"
            />
            <GameCard
              img={spiderman}
              body="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
            />
          </section>
        </div>
      </div>
    );
  }
}
