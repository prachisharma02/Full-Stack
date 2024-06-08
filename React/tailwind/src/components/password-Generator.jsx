import React, { useState } from "react";

function PasswordGenerator() {
  const [number, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [length, setlength] = useState(10);
  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input type="text" name="" id="" />
      </div>
    </>
  );
}

export default PasswordGenerator;
