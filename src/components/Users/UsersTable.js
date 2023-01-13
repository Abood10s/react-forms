import React, { Component } from "react";
import "./userstable.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { API_URL } from "../../config/API";

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
    const token = localStorage.getItem("token");
    this.setState({ isLoading: true });
    axios
      .get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
