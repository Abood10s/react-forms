import React, { Component } from "react";

import "./games.css";

import SideBar from "../../components/sidebar/SideBar";
import Friends from "../../components/friends";
import Profile from "../../components/profile/Profile";
import LastPlayed from "../../components/lastplayed/LastPlayed";
import TrophyCard from "../../components/trophy/TrophyCard";
import NewGames from "../../components/newGamesCard/NewGames";
import UsersTable from "../../components/Users/UsersTable";

export default class Games extends Component {
  state = {
    isAdmin: false,
  };
  componentDidMount() {
    const admin = JSON.parse(localStorage.getItem("isAdmin"));
    if (admin) {
      this.setState({ isAdmin: true });
    }
  }
  render() {
    return (
      <div className="games">
        <SideBar
          setDarkTheme={this.props.setDarkTheme}
          setLightTheme={this.props.setLightTheme}
          theme={this.props.theme}
        />
        <section
          className={`main-content ${
            this.props.theme === "dark" ? "dark" : "light"
          }`}
        >
          <Profile
            isAuthentecated={this.props.isAuthentecated}
            logout={this.props.logout}
            theme={this.props.theme}
          />
          {this.state.isAdmin ? (
            <UsersTable />
          ) : (
            <>
              <section className="new-games">
                <NewGames />
              </section>
              <section className="grid">
                <LastPlayed />
                <TrophyCard />
                <Friends />
              </section>
            </>
          )}
        </section>
      </div>
    );
  }
}
