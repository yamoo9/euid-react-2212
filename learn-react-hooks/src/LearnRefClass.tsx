import React from "react";

export class LearnRefClass extends React.Component {
  state = {
    message: "React.Component",
  };

  pleaseRememberMe = "나를 기억해주세요."; // this.pleaseRememberMe

  handleUpdateState = () => {
    // immutable
    this.setState({
      message: this.state.message + "😃",
    });
  };

  handleUpdateInstanceProperty = () => {
    if (this.pleaseRememberMe.indexOf("주세요") > -1) {
      this.pleaseRememberMe = "나를 기억해주셨군요! 😉";
    } else {
      // mutable
      this.pleaseRememberMe += "🥹";
    }
    console.log("updated this.pleaseRememberMe:", this.pleaseRememberMe);
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleUpdateState}>
          update greeting message
        </button>
        <h1>{this.state.message}</h1>
        <button type="button" onClick={this.handleUpdateInstanceProperty}>
          update remember me message
        </button>
        <p>{this.pleaseRememberMe}</p>
      </div>
    );
  }
}
