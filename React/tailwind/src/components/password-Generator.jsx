import React, { useCallback, useState } from "react";
import background from "./background";

function PasswordGenerator() {
  const [number, setnum] = useState(false); // character should be present in password or not
  const [char, setchar] = useState(false); // number should be present in password or not
  const [length, setlength] = useState(10); // password length
  const [pass, setpass] = useState(""); // to set the password

  // useCallback: cache a function definition between re-renders means to store the previous values of any function
  // before re render takes place mtlb purani values + add on new values jo render krne p aay to ye cache ki trah
  // store krleti hai jase callback dubara call hota hai vse he

  // it include dependencies like any variable on which that function is dependent if that value changes ut re renders

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXVZabcdefghijklmnopqrstuvwxyz";
    let number = 1234567890;
    let char = "`~!@#$%^&*()_{}|?/'";
    if (number) str += number;
    if (char) str += char;
    for (var i = 0; i < str.length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
    }
  }, [length, number, char, setpass]);
  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <label htmlFor="">Password: </label>
        <br />
        <input
          value={pass}
          type="text"
          name=""
          id=""
          style={{ backgroundColor: "lightblue", margin: "10px" }}
        />

        <br />
        <input
          min={6}
          max={60}
          type="range"
          style={{ marginRight: "10px" }}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }} // onchange event is used to trigger the length value that whenever we make changes in range it will
          //change the length of the password
        />
        <label style={{ marginRight: "10px" }}>length({length})</label>
        <input
          type="checkbox"
          onChange={() => {
            setnum((prev) => !prev); // setnum is taking boolean value initially false whenever we tick the checkbox
            // the state changes means it shoukd convert to true thats why we have taken false as prev then on
            //change!prev -> true
          }}
        />
        <label style={{ marginRight: "10px" }}>Numbers</label>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            setnum((prev) => !prev);
          }}
        />
        <label style={{ marginRight: "10px" }}>Character</label>
      </div>
    </>
  );
}

export default PasswordGenerator;
