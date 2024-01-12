import React, { Component } from 'react';
import 'animate.css';
export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron" style={{ marginTop: "90px" }}>
            <h1 className="display-4 text-light">
              Welcome to
              <span className="typing-animation">
                <span className="text-primary animate__animated animate__fadeInLeft animate__delay-0.5s"> N</span>
                <span className="text-danger animate__animated animate__fadeInLeft animate__delay-1s">E</span>
                <span className="text-warning animate__animated animate__fadeInLeft animate__delay-1.5s">W</span>
                <span className="text-primary animate__animated animate__fadeInLeft animate__delay-2s">S </span>
                <span className="text-primary animate__animated animate__fadeInLeft animate__delay-2.5s">M</span>
                <span className="text-danger animate__animated animate__fadeInLeft animate__delay-3s">O</span>
                <span className="text-warning animate__animated animate__fadeInLeft animate__delay-3.5s">N</span>
                <span className="text-primary animate__animated animate__fadeInLeft animate__delay-4s">K</span>
                <span className="text-danger animate__animated animate__fadeInLeft animate__delay-4.5s">E</span>
                <span className="text-warning animate__animated animate__fadeInLeft animate__delay-5s">Y</span>
              </span>
            </h1>
            <p className="text-light">
              Your Gateway to the World's Latest Stories. Get instant access to breaking news, in-depth analysis, and personalized feeds on politics, technology, sports, entertainment, and more. With our sleek and user-friendly interface, staying ahead has never been easier. Explore captivating articles, stunning visuals, and share-worthy content. Trustworthy and unbiased, we bring you news from renowned sources worldwide. Download the News App now and become an informed global citizen, empowered to make a difference."
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg bg-light" href="/" role="button">
                <span className="text-primary ">A</span>
                <span className="text-danger">B</span>
                <span className="text-warning">O</span>
                <span className="text-primary">U</span>
                <span className="text-primary">T </span>
                <span className="text-danger">U</span>
                <span className="text-warning">S</span>
                <span className="text-primary ">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
