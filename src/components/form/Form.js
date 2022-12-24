import React, { Component } from "react";
import Button from "../Button/Button";
import "./form.css";

//Regex
const strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);
class Form extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    checkbox: false,
    strength: 0,
    color: "red",
    status: "",
  };
  defaults = {
    email: "",
    password: "",
    repeatPassword: "",
    checkbox: false,
  };
  validate = () => {
    if (strongRegex.test(this.state.password)) {
      this.setState({
        ...this.state,
        color: "#7CFC00",
        strength: "100%",
        status: "Strong",
      });
    } else if (mediumRegex.test(this.state.password)) {
      this.setState({
        ...this.state,
        color: "#FFC107",
        strength: "50%",
        status: "medium",
      });
    } else if (this.state.password.length > 0) {
      this.setState({
        ...this.state,
        color: "red",
        strength: "20%",
        status: "weak",
      });
    } else {
      this.setState({ ...this.state, strength: "0px", status: "" });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.defaults });
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  onValueChange = () => {
    this.setState((prevState) => {
      return {
        checkbox: !prevState.checkbox,
      };
    });
  };
  render() {
    const { newField, status, star, btn, check } = this.props;

    return (
      <form className="form-cont" onSubmit={this.handleSubmit}>
        <div className="input-cont">
          <label htmlFor="email" className="input-label">
            Your Email{star}
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
            Your Password{star}
          </label>
          <input
            required
            type="password"
            placeholder="password"
            className="input"
            id="password"
            minLength={1}
            onChange={this.handleChange}
            onKeyDown={this.validate}
            value={this.state.password}
          />
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
          {newField && (
            <>
              <label htmlFor="repeatPassword" className="input-label">
                {status}
                {star}
              </label>
              <input
                required
                type="password"
                placeholder={status}
                className="input"
                id="repeatPassword"
                minLength={1}
                onChange={this.handleChange}
                value={this.state.repeatPassword}
              />
            </>
          )}
        </div>
        {check && (
          <section className="agree">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.onValueChange}
              checked={this.state.checkbox}
              required
            />
            <label htmlFor="checkbox">I agree to terms & conditions</label>
          </section>
        )}
        <Button title={btn} />
      </form>
    );
  }
}

export default Form;
