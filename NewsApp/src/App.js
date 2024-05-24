import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/navbar";
import News from "./Components/News";
import NewsItem from "./Components/NewsItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";

export default class App extends Component {
  name = "Prachi";
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/News" element={<News />} />
          </Routes>
        </BrowserRouter>

        {/* <div className="App"> */}
        {/* <h1>Hello My first Class based Component with {this.name}</h1> */}
        {/* <Navbar></Navbar> */}
        {/* <News></News> */}
        {/* </div> */}
      </>
    );
  }
}
