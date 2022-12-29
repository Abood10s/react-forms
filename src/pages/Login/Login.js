import React, { Component } from "react";
import "./login.css";
import joy from "../../assets/joystick.png";
import Header from "../../components/Header/Header";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import quote2 from "../../assets/quote2.png";
import logo from "../../assets/logo2.png";

import linkedin from "../../assets/linkedin.png";
import LoginForm from "../../components/form/LoginForm";
import Logo from "../../components/Logo/Logo";

export default class Login extends Component {
  render() {
    return (
      <div className="login-all-cont">
        <div className="login-cont">
          <div className="text">
            <Logo img={logo} />
            <div className="quote">
              <img src={quote2} alt="" className="login-quote" />" I always
              observe the people who pass by when I ride an escalator. I'll
              never see most of them again, so I imagine a lot of things about
              their lives... about the day ahead of them.
            </div>
            <div className="img">
              <p>Hideo Kojima</p>
              <img src={joy} alt="joystick" className="joy" />
            </div>
          </div>
          <div className="form">
            <div>
              <Header
                title="Join the game!"
                subtitle="Go inside the best gamers social network!"
              />
            </div>
            <div className="icons">
              <div>
                <img src={google} alt="google" />
              </div>
              <div>
                <img src={twitter} alt="twitter" />
              </div>
              <div>
                <img src={linkedin} alt="linkedin" />
              </div>
              <div>
                <img src={github} alt="github" />
              </div>
            </div>
            <div className="or">
              <p className="or-p">or</p>
            </div>
            <LoginForm btn="Login" />
            <p>
              Don’t have an account?
              <span onClick={this.props.handleRoute}>Register</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
