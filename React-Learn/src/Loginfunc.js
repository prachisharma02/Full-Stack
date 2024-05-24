import React, { useState } from "react";

const Loginfunc = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");

  let onchangehandle = (event) => {
    console.log("changed");
    if (event.target.name === "username") {
      setUname(event.target.value);
      console.log(uname);
    } else if (event.target.name === "password") {
      setPwd(event.target.value);
      console.log(pwd);
      1;
    }
  };

  let validation = (event) => {
    console.log("authentication");
    if (uname === "Prachi" && pwd === 1234) {
      setUser("Valid user");
    } else {
      setUser("Not a valid user");
    }
  };

  return (
    <div className="container">
      <h2>LOGIN FORM</h2>
      <br />
      <label>User name</label>
      <input
        type="text"
        name="username"
        onChange={onchangehandle}
        placeholder="User Name"
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={onchangehandle}
        placeholder="Password"
      />
      <br />
      <br />
      <button type="button" onClick={validation}>
        Login
      </button>
      <br />
      <br />
      <h2>{user}</h2>
    </div>
  );
};

export default Loginfunc;
