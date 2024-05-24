import React, { Component } from "react";

class Loginformc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      auth: "",
    };
  }
  usr = (event) => {
    this.setState({ user: event.target.value });
  };
  pd = (event) => {
    this.setState({ pwd: event.target.value });
  };
  update = () => {
    console.log(this.state.user);
    console.log(this.state.pwd);
    if (this.state.user === "Prachi" && parseInt(this.state.pwd) === 1234) {
      this.setState({ auth: "A Valid user " });
    } else this.setState({ auth: " Not A Valid user " });
  };

  render() {
    return (
      <div className="App">
        <h2>Login Page</h2>
        <label>User Name</label>
        <input type="text" onChange={this.usr} />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" onChange={this.pd} />
        <br />
        <br />
        <button onClick={this.update}>Sign In</button>
        <h2>{this.state.auth} </h2>
      </div>
    );
  }
}
export default Loginformc;
