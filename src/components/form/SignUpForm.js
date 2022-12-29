import React, { Component } from "react";
import Button from "../Button/Button";
import "./form.css";
import * as yup from "yup";

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
  repeatpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
  checkbox: yup
    .bool()
    .oneOf([true], "You must agree to the terms and conditions")
    .required(),
});
const defaults = {
  email: "",
  password: "",
  repeatpassword: "",
  checkbox: false,
  strength: 0,
  color: "transparent",
  status: "",
  error: "",
};
class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    repeatpassword: "",
    checkbox: false,
    strength: 0,
    color: "red",
    status: "",
    error: "",
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
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.status === "weak") {
      this.setState({ error: "please enter stronger password" });
    }
    schema
      .validate({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        repeatpassword: this.state.repeatpassword,
        checkbox: this.state.checkbox,
      })
      .then((val) => {
        this.setState({ ...defaults });
      })
      .catch(function (err) {
        alert(err.errors);
      });
  };
  handleChange = (e) => {
    const { id, value, checked } = e.target;
    if (id === "checkbox") {
      this.setState({
        [id]: checked,
      });
    } else {
      this.setState({
        [id]: value,
      });
    }
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
            Your Password{star}
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
          {newField && (
            <>
              <label htmlFor="repeatpassword" className="input-label">
                {status}
                {star}
              </label>
              <input
                name="repeatpassword"
                type="password"
                placeholder={status}
                className="input"
                id="repeatpassword"
                minLength={1}
                onChange={this.handleChange}
                value={this.state.repeatpassword}
              />
            </>
          )}
        </div>
        {check && (
          <section className="agree">
            <input
              name="agreed"
              type="checkbox"
              id="checkbox"
              onChange={this.onValueChange}
              checked={this.state.checkbox}
            />
            <label htmlFor="checkbox">I agree to terms & conditions</label>
          </section>
        )}
        <Button title={btn} check={this.checkPasswordStrength} />
      </form>
    );
  }
}

export default SignUpForm;
