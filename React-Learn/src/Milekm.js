import React, { useState } from "react";

function Milekm() {
  const [mile, setMile] = useState("");
  const [kilometer, setKilometer] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMile(value);
  };

  const convertToKilometer = () => {
    const convertedKilometer = mile * 1.60934;
    setKilometer(convertedKilometer.toFixed(2));
  };

  const clearValues = () => {
    setMile("");
    setKilometer("");
  };

  return (
    <div className="App">
      <h1>Mile to Kilometer Converter</h1>
      <label htmlFor="mile">From Mile:</label>
      <input
        type="number"
        id="mile"
        value={mile}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="kilometer">To Kilometer:</label>
      <input type="text" id="kilometer" value={kilometer} readOnly />
      <br />
      <button onClick={convertToKilometer}>Convert</button>
      <button onClick={clearValues}>Clear</button>
      <p>
        Result: {mile} Mile = {kilometer} Kilometer
      </p>
    </div>
  );
}

export default Milekm;
