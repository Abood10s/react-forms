import React, { Component } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Profile from "../profile/Profile";
import guy from "../../assets/guy.jpg";
import Loader from "../loader/Loader";
import "./user.css";
import axios from "axios";
const UserDetails = () => {
  const { id } = useParams();
  return <User id={id} />;
};

export default UserDetails;

class User extends Component {
  state = {
    userData: [],
    id: this.props.id,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://react-tt-api.onrender.com/api/users/${this.state.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzYTZiMWQ1MjI3MDgxNzBlZjY4OCIsImlhdCI6MTY3MzUwNDIyNiwiZXhwIjoxNjc2MDk2MjI2fQ.J5-RguMcAkGQgbFWSxFytxn3v8X-d2gawnxO5ZxEbhA",
        },
      })
      .then((res) => {
        this.setState({ userData: res.data, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <Profile />
        <SideBar />
        <div className="user-card">
          <div className="user">
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <>
                <img
                  src={guy}
                  alt={this.state.userData.name}
                  className="user-img"
                />
                <h3 className="user-name">Name : {this.state.userData.name}</h3>
                <h5 className="user-email">
                  Email : {this.state.userData.email}
                </h5>
                <h5>Created At : {this.state.userData.createdAt}</h5>
                <h5>
                  Admin:
                  {this.state.userData.isAdmin
                    ? ` ${this.state.userData.name}  is an Admin`
                    : ` ${this.state.userData.name}  is not an Admin`}
                </h5>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
