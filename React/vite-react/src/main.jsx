import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const element = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  value: "click on the page",
};

// so here we get to know that there is a proper syntax of react that how it compiles the html code in react
//and render it the above code will not work because syntax is wronng in custom react we created our own syntax
//thats why its working

const viteelement = (
  <a href="https://www.google.com/" target="_blank">
    google
  </a>
);
const username = "prachi";
// now if we want to create through react internal syntax then
const reactelement = React.createElement(
  // react.createElement is injected by babel
  "a",
  {
    href: "https://www.google.com/",
  },
  "click",
  username
);

// at the end of the day react converts every code in a tree called as dom tree
ReactDOM.createRoot(document.getElementById("root")).render(reactelement); // to c
