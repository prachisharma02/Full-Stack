import { useState } from "react";

// so basically usestate was used to propage data or value changes in the ui how data propogates to frontend
function App() {
  const [counter, setcount] = useState(7);

  function increase() {
    let count = counter + 1;
    if (count > 20) {
      setcount(20);
      alert("you cant go upto 20");
    }
    //counter++; // if we do this it will work on server sode but will not update the ui
    // so for this hooks was introduced
    // to make changes in the ui
    else {
      //INTERVIEW QUESTION THAT IF you write setcount multiple times then what happen?
      setcount(counter + 1);
      setcount(counter + 1);
      setcount(counter + 1);
      // as here setcount is asynchronous function that will record only last and overwrite the previous similar to settimeout
      // ANSWER: weather you write it as many times it will increase only by once

      //BUT if you really want to increase it 2-more times then below is the synatx its a hidden feature
      setcount((prevcount) => prevcount + 1);
      setcount((prevcount) => prevcount + 1);
      setcount((prevcount) => prevcount + 1);
      setcount((prevcount) => prevcount + 1);
    }
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
