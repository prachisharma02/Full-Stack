import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      u_name: props.u_name ? props.u_name : "",
      password: props.password ? props.password : "",
      valid: "",
    };
  }

  validate = () => {
    var flag = 0;
    var users = {
      Prachi: "1234",
    };

    if (!this.state.u_name in users) {
      flag = 1;
    } else {
      if (this.state.password != users[this.state.u_name]) {
        flag = 1;
      }
    }
    if (flag == 0) {
      this.setState({ valid: "Valid User" });
    } else {
      this.setState({ valid: "Not a Valid User" });
    }
  };

  username = (event) => this.setState({ u_name: event.target.value });

  password = (event) => this.setState({ password: event.target.value });

  render() {
    return (
      <div className="container">
        <h2>LOGIN FORM</h2>
        <br />
        <lable>User name</lable>
        <input
          type="text"
          defaultValue={this.state.u_name}
          onChange={this.username}
          placeholder="User Name"
        />
        <br />
        <br />
        <lable>Password</lable>
        <input
          type="password"
          defaultValue={this.state.password}
          onChange={this.password}
          placeholder="Password"
        />
        <br />
        <br />
        <button type="button" onClick={this.validate}>
          Login
        </button>
        <br />
        <br />
        <h2>{this.state.valid}</h2>
      </div>
    );
  }
}

export default Login;
