import React from "react";
class ClsExCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernm: "default user",
      userpws: "default pwd",
    };
  }
  render() {
    return (
      <div>
        <br />
        user name:{" "}
        <input
          type="text"
          placeholder="enter your name"
          value={this.state.usernm}
          onChange={(eve) => {
            this.setState({ usernm: eve.currentTarget.value });
          }}
        />
        <input type="button" value="login" />
      </div>
    );
  }
}
export default ClsExCom;
