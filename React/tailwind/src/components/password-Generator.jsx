import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [number, setnum] = useState(false); // character should be present in password or not
  const [char, setchar] = useState(false); // number should be present in password or not
  const [length, setlength] = useState(10); // password length
  const [pass, setpass] = useState(""); // to set the password
  const passref = useRef(null);
  // useref is used when we want any reference to anything (variable or anything)

  // useCallback: cache a function definition between re-renders means to store the previous values of any function
  // before re render takes place mtlb purani values + add on new values jo render krne p aay to ye cache ki trah
  // store krleti hai jase callback dubara call hota hai vse he

  // it include dependencies like any variable on which that function is dependent if that value changes ut re renders

  const PasswordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXVZabcdefghijklmnopqrstuvwxyz"; //total length : 52(26+26)
    if (number) str += 1234567890;
    if (char) str += "`~!@#$%^&*()_{}|?/'";

    // so basically what is happening is
    // i=0 lets say random aaya 43 then  pass += str.charAt(random) ka mtlb
    // jo string hai (str)upar uski 43rd position ko hm pass me add krdenge
    // aese he jitni length hm set krenge uske according password vary krega

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(random);
    }
    setpass(password);
    // to yaha hmara password generate hojayga
  }, [length, number, char, setpass]);

  // useeffect : is used to produce sideefects  whenever there is a change in any component it renders
  // so here we want that when number,character,length values changes then password generator should re-render
  // why we are doing this because we dont want to call this fn on button click
  // function inside this is executed when page loads or say mounted
  useEffect(() => {
    PasswordGenerator();
  }, [number, length, char, PasswordGenerator]);

  const copypassword = useCallback(() => {
    passref.current?.select(); // so ref is used when we want to use that reference to do something like here by
    //taking reference we are able to select the selected text
    passref.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);
  return (
    <>
      <h1 style={{ color: "darkviolet" }}>Password Generator</h1>
      <div>
        <label htmlFor="">Password: </label>
        <input
          value={pass}
          type="text"
          name=""
          id=""
          readOnly
          ref={passref}
          style={{
            backgroundColor: "black",
            margin: "10px",
            width: "700px",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
        <button onClick={copypassword}>copy</button>
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
            setchar((prev) => !prev);
          }}
        />
        <label style={{ marginRight: "10px" }}>Character</label>
      </div>
    </>
  );
}

export default PasswordGenerator;
