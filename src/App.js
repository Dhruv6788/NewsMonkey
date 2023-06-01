

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {


  country = "in"
  pagesize = 9
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };



  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color='#ffffff'
            progress={this.state.progress}
          />
        </div>

        <Routes>
          <Route path="/home" element={
            <News
              key="home"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="general"
              setProgress={this.setProgress}
            />
          } />

          <Route path="/newsapp" element={
            <News
              setProgress={this.setProgress}
              key="logobtn"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="general"
            />
          } />

          <Route path="/general" element={
            <News
              setProgress={this.setProgress}
              key="general"
              API={process.env.REACT_APP_API_KEY}

              country={this.country}
              pagesize={this.pagesize}
              category="general"
            />
          } />

          <Route path="/business" element={
            <News
              setProgress={this.setProgress}
              key="business"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="business"
            />
          } />

          <Route path="/entertainment" element={
            <News
              setProgress={this.setProgress}
              key="entertainment"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="entertainment"
            />
          } />

          <Route path="/science" element={
            <News
              setProgress={this.setProgress}
              key="science"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="science"
            />
          } />

          <Route path="/sports" element={
            <News
              setProgress={this.setProgress}
              key="sports"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="sports"
            />
          } />

          <Route path="/health" element={
            <News
              setProgress={this.setProgress}
              key="health"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="health"
            />
          } />

          <Route path="/technology" element={
            <News
              setProgress={this.setProgress}
              key="technology"
              API={process.env.REACT_APP_API_KEY}
              country={this.country}
              pagesize={this.pagesize}
              category="technology"
            />
          } />
        </Routes>
      </Router>
    );
  }
}

