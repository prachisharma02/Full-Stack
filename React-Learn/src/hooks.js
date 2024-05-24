import React, { useState } from "react";

const Hooks = (props) => {
  const [counter, setCount] = useState(2);
  return (
    <div>
      <h1>Good Morning</h1>
      <h1>Value of counter : {counter}</h1>
      <button onClick={() => setCount((counter) => parseInt(counter) + 2)}>
        SetCounterValue
      </button>
    </div>
  );
};

export default Hooks;
