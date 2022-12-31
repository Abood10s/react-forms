import React, { Component } from "react";

import SideBar from "../../components/sidebar/SideBar";
import Friends from "../../components/friends";
import "./games.css";

import Profile from "../../components/profile/Profile";
import LastPlayed from "../../components/lastplayed/LastPlayed";
import TrophyCard from "../../components/trophy/TrophyCard";
import NewGames from "../../components/newGamesCard/NewGames";

export default class Games extends Component {
  render() {
    return (
      <div className="games">
        <SideBar />
        <section className="main-content">
          <Profile />
          <section className="new-games">
            <NewGames />
          </section>
          <section className="grid">
            <LastPlayed />
            <TrophyCard />
            <Friends />
          </section>
        </section>
      </div>
    );
  }
}
