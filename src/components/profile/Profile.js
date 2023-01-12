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
            <img src={profilepic} alt="" />
          </div>
          <div>
            <p>Welcome back,</p>
            <p className="userName">{name}</p>
          </div>
        </div>
        <ul className="profile-ul">
          <i class="fa-sharp fa-solid fa-gear gear" onClick={this.showMenu}></i>
          {this.state.openMenu && (
            <ul className="profile-inner-ul">
              <li>
                <Link className="profile-link" to={`user/${id}`}>
                  <i class="fa-solid fa-user"></i>Profile
                </Link>
              </li>
              <li onClick={this.props.logout}>
                <i class="fa-solid fa-right-from-bracket"></i>Log out
              </li>
            </ul>
          )}
        </ul>
      </div>
    );
  }
}
