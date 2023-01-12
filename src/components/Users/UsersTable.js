import React, { Component } from "react";
import "./userstable.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

class UsersTable extends Component {
  state = {
    users: [],
    isLoading: false,
  };
  handleDelete = (id) => {
    const filtered = this.state.users.filter((user) => user._id !== id);
    this.setState({ users: filtered });
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://react-tt-api.onrender.com/api/users", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzYTZiMWQ1MjI3MDgxNzBlZjY4OCIsImlhdCI6MTY3MzM0Mzg4MywiZXhwIjoxNjc1OTM1ODgzfQ.YcBTFlLOKoDQeCaUCELv3-Y4ujNPadS7-QXRm4UBlIM",
        },
      })
      .then((response) => {
        const people = response.data;
        this.setState({ users: people, isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <h5 className="users-count"> all {this.state.users.length} Users</h5>
        <table className="users-table">
          <tbody>
            <tr>
              <th>
                <td>Name</td>
              </th>
              <th>
                <td>Email</td>
              </th>
              <th>
                <td>View User</td>
              </th>
              <th>
                <td>Password</td>
              </th>
              <th>
                <td>Delete User</td>
              </th>
            </tr>
            {this.state.isLoading ? (
              <Loader />
            ) : (
              this.state.users.map((person) => {
                const { name, email, password, _id: id } = person;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <Link to={`user/${id}`} className="link">
                      <td>Show</td>
                    </Link>
                    <td>{password}</td>
                    <td
                      className="delete"
                      onClick={() => this.handleDelete(id)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
