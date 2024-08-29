import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
import Background from "./components/background";
import PasswordGenerator from "./components/password-Generator";
import CustomizedPasswordGenerator from "./components/customizedPassword";
import usecurrrency from "./customhooks/useCurrInfo";
import IndexCurr from "./components/IndexCurr";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
