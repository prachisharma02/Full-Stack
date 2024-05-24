import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import Funcompex from "./Funcompex";
import Forms from "./forms";
import ClsExCom from "./ClsExComp";
import TaxCalculation from "./TaxCalculation";
import Hooks from "./hooks";
import Login from "./login";
import Loginfunc from "./Loginfunc";
import Stateobject from "./StateObject";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Comp3 from "./comp";
import Component1 from "./contextHooks";
import Converter from "./Converter";
import Loging from "./Loging";
import Routing from "./Routing";
import Signing from "./Signing";
import Footinch from "./Footinch";
import LoginForm from "./LoginFormf";
import Loginformc from "./loginformc";

// function F1() {
//   return <h1>welcome</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <F1
    
    /> */}
    {/* <Funcompex nm=" prachi" at="bciit" occupation="teacher" />
    <Funcompex nm=" avinash" at="bpt" occupation="student" />
    <Funcompex nm=" garima" at="hm" occupation="faculty" /> */}
    {/* <Forms></Forms>
    <ClsExCom></ClsExCom> */}
    {/* <TaxCalculation></TaxCalculation> */}
    {/* <Hooks count="2"></Hooks> */}
    {/* <Login></Login>
    <Loginfunc></Loginfunc> */}
    {/* <Stateobject></Stateobject> */}
    {/* <Navbar></Navbar> */}
    <LoginForm></LoginForm>
    {/* <Loginformc /> */}
    {/* <Comp3 userattb="prachi"></Comp3>
    <Component1></Component1> */}
    {/* <Routing /> */}
    {/* <Signing></Signing> */}
    {/* <Loging />
    <Converter /> */}
    {/* <Footinch></Footinch> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
