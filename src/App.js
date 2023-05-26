// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
// import Footer  from "./Components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar/>
        </div>
        <News API="fe299883370c45ec84529599f2274c79" pagesize={6}/>
      </div>
    );
  }
}
