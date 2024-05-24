import React, { Component } from "react";
import "./index.css";
class Loging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { username, password } = this.state;

    // Perform authentication logic here
    if (username === "user" && password === "password") {
      this.setState({ auth: "Valid User" });
    } else {
      this.setState({ auth: "Invalid username or password" });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="App">
        <h1>Login Page</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Sign In</button>
        <h1>{this.state.auth}</h1>
      </div>
    );
  }
}

export default Loging;
