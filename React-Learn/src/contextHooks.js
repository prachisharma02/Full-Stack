import { createContext } from "react";
import React, { useContext, useState } from "react";

const UserContext = createContext();
function Component1() {
  const [user, setuser] = useState("Mca 2nd sem");
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>{`hello ${user}!`}</h1>
        <Component2></Component2>
      </UserContext.Provider>
    </div>
  );
}
function Component2() {
  return (
    <>
      <h1> Componnent2</h1> <Component3></Component3>
    </>
  );
}
function Component3() {
  return (
    <>
      <h1> Componnent3</h1> <Component4></Component4>
    </>
  );
}
function Component4() {
  return (
    <>
      <h1> Componnent4</h1> <Component5></Component5>
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1> Componnent5</h1>
      <h2>{`Hello again to all ${user} student`}</h2>
    </>
  );
}
export default Component1;
