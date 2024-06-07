import { useState } from "react";

// so basically usestate was used to propage data or value changes in the ui how data propogates to frontend
function App() {
  let [counter, setcount] = useState(7);

  function increase() {
    let count = counter + 1;
    if (count > 20) {
      alert("you cant go upto 20");
    }
    //counter++; // if we do this it will work on server sode but will not update the ui
    // so for this hooks was introduced
    // to make changes in the ui
    else setcount(count);
  }
  function decrease() {
    let count = counter - 1;
    if (count < 0) {
      setcount(0);
      alert("value cant be decresae");
    }
    // counter--;
    else setcount(count);
  }
  return (
    <>
      hello we are creating a project named counter
      <h2>Counter value:{counter}</h2>
      <button onClick={increase}>increased value {counter} </button>
      <br />
      <br />
      <button onClick={decrease}>decreased value {counter} </button>
    </>
  );
}
export default App;
