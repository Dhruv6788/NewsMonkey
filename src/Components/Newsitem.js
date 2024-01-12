import React, { Component } from "react";
import 'animate.css';
export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, Author, publishedAt, source } = this.props;
    return (
      <div>
        <div className="card card-sm-6 my-3 shadow-lg bg-dark animate__animated animate__zoomInUp">
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title text-light">
              <strong>{title}</strong>
            </h5>
            <h6 className="card-subtitle mt-2 text-light">Article By: {Author}</h6>
            <h6 className="card-subtitle mt-2 text-light">Published on: {publishedAt}</h6>
            <p className="card-text mt-1 text-light">{description}</p>
            <p className="card-text mt-1 text-light">From : {source.name}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-xm btn-light d-inline-block"
            >
              <span className="text-primary">R</span>
              <span className="text-danger">e</span>
              <span className="text-warning">a</span>
              <span className="text-primary">d </span>
              <span className="text-success">M</span>
              <span className="text-primary">o</span>
              <span className="text-primary">r</span>
              <span className="text-primary">e</span>
              &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

