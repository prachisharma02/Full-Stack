import React, { Component } from "react";
class Signing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      auth: "",
    };
  }
  handlechange = (event) => {
    if ((event.target.type = "email"))
      this.setState({ email: event.target.value });
    else if ((event.target.type = "password"))
      this.setState({ password: event.target.value });
    console.log(this.email);
    console.log(this.password);
  };
  handlebutton = () => {
    if (this.state.email == "abc@gmail.com" && this.state.password == "1234")
      this.setState({ auth: "A valid user" });
    else this.setState({ auth: "Not valid user" });
  };
  render() {
    return (
      <div className="App">
        <h1>Sign Up</h1>
        <div className="container">
          <label htmlFor="Email">E-mail-Address</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handlechange}
          />
        </div>

        <br />
        <div className="container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlechange}
          />
        </div>
        <button onClick={this.handlebutton}>SignUp</button>
        <p>{this.state.auth}</p>
      </div>
    );
  }
}
export default Signing;
