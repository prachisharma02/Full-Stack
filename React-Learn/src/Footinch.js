import React, { useState } from "react";

function Footinch() {
  const [foot, setFoot] = useState("");
  const [inch, setInch] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFoot(value);
  };

  const convertToInch = () => {
    const convertedInch = foot * 12;
    setInch(convertedInch);
  };

  const clearValues = () => {
    setFoot("");
    setInch("");
  };

  return (
    <div className="App">
      <h1>Foot to Inch Converter</h1>
      <label htmlFor="foot">From Foot:</label>
      <input
        type="number"
        id="foot"
        value={foot}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="inch">To Inch:</label>
      <input type="text" id="inch" value={inch} readOnly />
      <br />
      <button onClick={convertToInch}>Convert</button>
      <button onClick={clearValues}>Clear</button>
      <p>
        Result: {foot} Foot = {inch} Inch
      </p>
    </div>
  );
}

export default Footinch;
