import React, { Component } from "react";
import Button from "../Button/Button";
import "./form.css";
class Form extends Component {
  state = {
    email: "",
    password: "",
  };
  defaults = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.defaults });
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    console.log(e.target);
  };
  render() {
    return (
      <form className="form-cont" onSubmit={this.handleSubmit}>
        <div className="input-cont">
          <label htmlFor="email" className="input-label">
            Your Email
          </label>
          <input
            required
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
            required
            type="password"
            placeholder="password"
            className="input"
            id="password"
            minLength={8}
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <Button title="Login" />
      </form>
    );
  }
}

export default Form;
