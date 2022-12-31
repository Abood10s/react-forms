import React, { Component } from "react";
import "./gamecard.css";
export default class index extends Component {
  render() {
    return (
      <div
        className="card-cont"
        style={{
          backgroundImage: `url(${this.props.img})`,
        }}
      >
        <div className="game-card-txt">
          <p> {this.props.body}</p>
        </div>
      </div>
    );
  }
}
