import * as yup from "yup";
import "./loginform.css";
import Button from "../Button/Button";
import axios from "axios";
import React, { Component } from "react";
import Loader from "../loader/Loader";
import { API_URL } from "../../config/API";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    strength: 0,
    color: "transparent",
    status: "",
    error: "",
    isLoading: false,
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    schema
      .validate({
        email: this.state.email,
        password: this.state.password,
      })
      .then(async ({ password }) => {
        this.setState({ isLoading: true });
        const res = await axios.post(`${API_URL}/users/login`, {
          email: this.state.email,
          password,
        });

        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("id", res.data._id);
          localStorage.setItem("name", res.data.name);
          this.setState({ isLoading: false });
          this.props.login();
        }
      })
      .catch((error) => {
        if (error.errors) {
          this.setState({ error: error.errors });
        } else {
          this.setState({ error: [error.message] });
        }
      });
  };

  render() {
    return (
      <form className="form-cont" onSubmit={this.handleSubmit}>
        <div className="input-cont">
          <label htmlFor="email" className="input-label">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="write your email"
            className="input"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div className="input-cont">
          <label htmlFor="password" className="input-label">
            Your Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input"
            id="password"
            minLength={1}
            onChange={this.handleChange}
            value={this.state.password}
          />
          {this.state.error && <p className="error-p">{this.state.error}</p>}

          <div
            className="strength"
            style={{
              width: `${this.state.strength}`,
              backgroundColor: `${this.state.color}`,
            }}
          >
            <label
              style={{ color: `${this.state.color}` }}
              className="strength-label"
            >
              {this.state.status}
            </label>
          </div>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <Button
              btn="Login"
              type="submit"
              handleSubmit={this.handleSubmit}
            />
          )}
        </div>
      </form>
    );
  }
}
