import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClsExComp from "./ClsExComp";
import TaxCalculation from "./TaxCalculation";
import Hooks from "./hooks";
import Loginfunc from "./Loginfunc";
import Loging from "./Loging";
import Converter from "./Converter";
import Milekm from "./Milekm";
import Footinch from "./Footinch";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/Loging">Login </Link>
            </li>
            <li>
              <Link to="/Converter">Fahrenheit to Celsius Converter</Link>
            </li>
            <li>
              <Link to="/Milekm">Mile to Km Converter</Link>
            </li>
            <li>
              <Link to="/Footinch">Foot to Inch Converter</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/Loging" element={<Loging />} />
            <Route exact path="/Converter" element={<Converter />} />
            <Route exact path="/Milekm" element={<Milekm />} />
            <Route exact path="/Footinch" element={<Footinch />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Routing;
