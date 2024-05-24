import React, { useState } from "react";
import "./App.css";
import "./index.css";
function LoginForm() {
  const [user, setuser] = useState("");
  const [pwd, setpwd] = useState("");
  const [auth, setauth] = useState("");

  const usr = (event) => {
    setuser(event.target.value);
  };
  const pd = (event) => {
    setpwd(event.target.value);
  };
  const update = () => {
    console.log(user);
    console.log(pwd);
    if (user === "Prachi" && parseInt(pwd) === 1234) {
      setauth("A Valid user ");
    } else setauth(" Not A Valid user ");
  };
  return (
    <div className="App">
      <h2>Login Page</h2>
      <label>User Name</label>
      <input type="text" onChange={usr} />
      <br />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" onChange={pd} />
      <br />
      <br />
      <button onClick={update}>SIgn In</button>
      <h2>{auth} </h2>
    </div>
  );
}
export default LoginForm;
