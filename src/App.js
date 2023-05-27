


import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
        <Route exact strict path="/" element={
          <News
              key="general"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="us"
              pagesize={8}
              category="general"
            />} />

          <Route exact strict path="/general" element={
          <News
              key="general"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="us"
              pagesize={7}
              category="general"
            />} />

          <Route exact strict path="/business" element={
          <News
              key="business"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={6}
              category="business"
            />} />
          <Route exact strict path="/entertainment" element={
          <News
              key="entertainment"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={9}
              category="entertainment"
            />} />
          <Route exact strict path="/science" element={
          <News
              key="science"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={6}
              category="science"
            />} />
          <Route exact strict path="/sports" element={
          <News
              key="sports"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={9}
              category="sports"
            />} />
            <Route exact strict path="/health" element={
            <News
              key="health"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={9}
              category="health"
            />} />
          <Route exact strict path="/technology" element={
          <News
              key="technology"
              API="e4b928f2c28741e3bed2715ded178af6"
              country="in"
              pagesize={9}
              category="technology"
            />} />
        </Routes>
      </Router>
    );
  }
}
