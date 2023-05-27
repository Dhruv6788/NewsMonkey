import React, { Component } from "react";
export class Newsitem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,Author,publishedAt} = this.props;
    return (
      <div>
        <div className="card my-3 shadow-lg">
        <img
            src={imageUrl}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5  className="card-title ">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Artical By : {Author}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Published on : {publishedAt}</h6>
            <p className="card-text mt-1">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-xm btn-dark">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsitem;
