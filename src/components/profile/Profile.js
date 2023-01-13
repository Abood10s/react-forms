import React, { Component } from "react";
import "./profile.css";
import profilepic from "../../assets/Games/profile.png";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    openMenu: false,
  };

  showMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");

    return (
      <div className="profile-cont">
        <div className="right-profile">
          <div>
            <Link className="profile-link" to={`user/${id}`}>
              <img src={profilepic} alt="" />
            </Link>
          </div>
          <div>
            <p>Welcome back,</p>
            <p className="userName">{name}</p>
          </div>
        </div>

        <button onClick={this.props.logout} className="logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
          <p className="logout-p">Log out</p>
        </button>
      </div>
    );
  }
}
