import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import interfaceimg from "../../assets/controller.png";
import google from "../../assets/google.png";
import arrow from "../../assets/arrow.png";
import whitelogo from "../../assets/whitelogo.png";
import quote from "../../assets/quote.png";
import edge from "../../assets/edge.png";
import SignUpForm from "../../components/form/SignUpForm";
import Header from "../../components/Header/Header";

import "./register.css";
export default class Register extends Component {
  render() {
    return (
      <div className="register-all-cont">
        <div className="interface">
          <img src={interfaceimg} alt="" className="inter-img" />
          <div className="reg-text">
            <Logo color="#FFF" img={whitelogo} />
            <div className="text-p">
              <p>
                <img src={quote} alt="" className="reg-quote" />
              </p>
              " I always observe the people who pass by when I ride an
              escalator. I'll never see most of them again, so I imagine a lot
              of things about their lives... about the day ahead of them.
              <div className="text-edge">
                Hideo Kojima <img src={edge} alt="" className="edge" />
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="back">
            <img src={arrow} alt="back arrow" className="reg-arrow" />
            <button className="back-btn">Back</button>
          </div>
          <Header
            title="Register Individual Account!"
            subtitle="For the purpose of gamers regulation, your details are required."
          />
          <div className="line"></div>
          <SignUpForm
            newField={true}
            status="Repeat password"
            star="*"
            btn="Register Account"
            check={true}
          />
          <div className="or">
            <p className="or-p">or</p>
          </div>
          <button className="reg-login-btn" onClick={this.props.handleRoute}>
            <img src={google} alt="" className="reg-google" />
            <p className="flex-2">login</p>
          </button>
        </div>
      </div>
    );
  }
}
