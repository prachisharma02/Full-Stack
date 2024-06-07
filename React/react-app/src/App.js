import React from "react";

function App() {
  const username = "prachi";

  return (
    <>
      Learn React with {username};{" "}
      {/* here we can only write evaluated expression not evaluations like if else etc 
      because react syntax does not support this so react syntax is 
       const reactelement = React.createElement(
    "a",
    {
      href: "https://www.google.com/",
    },
    "click"
    if-else // it will not work cuz its a js object only reacll js obj can we write if else condition in js objects no 
    thats why we can only write evaluated expression
  ); so here if we write like if else
   */}
    </>
  );
}

export default App;
