import React, { useState } from "react";
const StateObject = () => {
  const [state, setstate] = useState({ age: 19, siblingNum: 4 });
  const handleclick = (val) => setstate({ ...state, [val]: state[val] + 1 });
  const { age, siblingNum } = state;
  return (
    <div>
      <p>Today I am {age} years of age</p>
      <p>i have {siblingNum} siblings</p>
      <div>
        <button onClick={handleclick.bind(null, "age")}>get older!</button>
        <button onClick={handleclick.bind(null, "siblingNum")}>
          More siblings!
        </button>
      </div>
    </div>
  );
};

export default StateObject;
