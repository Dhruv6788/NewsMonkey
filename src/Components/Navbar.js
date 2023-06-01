import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

export class Navbar extends Component {
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      const newsLogo = document.getElementById('newslogo');
      newsLogo.classList.remove('animate__animated', 'animate__swing');
      void newsLogo.offsetWidth;
      newsLogo.classList.add('animate__animated', 'animate__swing');
    }, 5000);
  }
  
  render() {
    return (
      <div>
        <nav id="navbar_id" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex">
            <Link
              id="newslogo"
              className="navbar-brand animate__animated animate__swing"
              style={{ color: "white" }}
              to="/newsapp"
              onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
              onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
            >
              <strong>
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
              </strong>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/home"
                     onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                     onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                     >
                      Home
                     </Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-danger" to="/entertainment" 
                    onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                    onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                     >Entertainment</Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-warning" to="/business"
                     onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                     onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                    >Business
                    </Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-primary" to="/health"
                    onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                    onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                    >Health</Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-success" to="/science"
                    onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                    onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                    >Science</Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-danger" to="/sports"
                    onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                    onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                    >Sports</Link>
                  </li>
                </strong>
                <strong>
                  <li className="nav-item">
                    <Link className="nav-link text-secondary" to="/technology"
                    onMouseEnter={(e) => e.target.classList.add("animate__animated", "animate__swing")}
                    onMouseLeave={(e) => e.target.classList.remove("animate__animated", "animate__swing")}
                    >Technology</Link>
                  </li>
                </strong>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
