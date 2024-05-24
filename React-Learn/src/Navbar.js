import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClsExComp from "./ClsExComp";
import TaxCalculation from "./TaxCalculation";
import Hooks from "./hooks";
import Loginfunc from "./Loginfunc";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/ClsExComp">Open ClsExComp</Link>
            </li>
            <li>
              <Link to="/TaxCalculation">Open TaxCalculation</Link>
            </li>
            <li>
              <Link to="/hooksz">counter</Link>
            </li>
            <li>
              <Link to="/Loginfunc">Login</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/ClsExComp" element={<ClsExComp />} />
            <Route exact path="/TaxCalculation" element={<TaxCalculation />} />
            <Route exact path="/hooks" element={<Hooks />} />
            <Route exact path="/Loginfunc" element={<Loginfunc />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Navbar;
