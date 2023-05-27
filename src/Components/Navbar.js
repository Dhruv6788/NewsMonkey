
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="navbar_id" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" style={{ color: "white" }} href="/"><strong>
              <span className="text-primary">N</span>
              <span className="text-danger">E</span>
              <span className="text-warning">W</span>
              <span className="text-primary">S </span>

              <span className="text-primary">M</span>
              <span className="text-danger">O</span>
              <span className="text-warning">N</span>
              <span className="text-primary">K</span>
              <span className="text-danger">E</span>
              <span className="text-warning">Y</span>
              </strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <strong><li className="nav-item"><Link className="nav-link text-primary" to="/">Home</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-primary" to="/general">General</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-danger" to="/entertainment">Entertainment</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-warning" to="/business">Business</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-primary" to="/health">Health</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-success" to="/science">Science</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-danger" to="/sports">Sports</Link></li></strong>
                <strong><li className="nav-item"><Link className="nav-link text-secondary" to="/technology">Technology</Link></li></strong>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
