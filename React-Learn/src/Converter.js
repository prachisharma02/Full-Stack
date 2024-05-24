import React, { useState } from "react";

function Converter() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFahrenheit(value);
  };

  const convertToFahrenheit = () => {
    const convertedCelsius = (fahrenheit - 32) * (5 / 9);
    setCelsius(convertedCelsius.toFixed(2));
  };

  const clearValues = () => {
    setFahrenheit("");
    setCelsius("");
  };

  return (
    <div className="App">
      <h1>Fahrenheit to Celsius Converter</h1>
      <label htmlFor="fahrenheit">From Fahrenheit:</label>
      <input
        type="number"
        id="fahrenheit"
        value={fahrenheit}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="celsius">To Celsius:</label>
      <input type="text" id="celsius" value={celsius} readOnly />
      <br />
      <button onClick={convertToFahrenheit}>Convert</button>
      <button onClick={clearValues}>Clear</button>
      <p>
        Result: {fahrenheit} Fahrenheit = {celsius} Celsius
      </p>
    </div>
  );
}

export default Converter;
