import React, { Component } from "react";
import * as yup from "yup";
import "./loginform.css";
import Button from "../Button/Button";
//Regex
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
const defaults = {
  email: "",
  password: "",
  strength: 0,
  color: "transparent",
  status: "",
  error: "",
};
export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    strength: 0,
    color: "red",
    status: "",
    error: "",
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.status === "weak") {
      this.setState({ error: "please enter stronger password" });
    }
    schema
      .validate({
        email: this.state.email,
        password: this.state.password,
      })
      .then((val) => {
        this.setState({ ...defaults });
      })
      .catch(function (err) {
        alert(err.errors);
      });
  };

  validate = () => {
    if (strongRegex.test(this.state.password)) {
      this.setState({
        color: "#7CFC00",
        strength: "100%",
        status: "Strong",
      });
    } else if (mediumRegex.test(this.state.password)) {
      this.setState({
        color: "#FFC107",
        strength: "50%",
        status: "medium",
      });
    } else if (this.state.password.length > 0) {
      this.setState({
        color: "red",
        strength: "20%",
        status: "weak",
      });
    } else {
      this.setState({ strength: "0px", status: "" });
    }
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
            onKeyUp={this.validate}
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
          <Button title={"Login"} check={this.checkPasswordStrength} />
        </div>
      </form>
    );
  }
}
