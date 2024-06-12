import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
import Background from "./components/background";
import PasswordGenerator from "./components/password-Generator";
import CustomizedPasswordGenerator from "./components/customizedPassword";

function App() {
  return (
    <>
      {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Hello Tailwind
      </h1> */}
      {/* <Card username="Prachi" password="prachips" />
      <Card username="Khushi" password="khushis" />
      <Card /> */}
      {/* <Background /> */}
      {/* <PasswordGenerator /> */}
      <CustomizedPasswordGenerator />
    </>
  );
}

export default App;
