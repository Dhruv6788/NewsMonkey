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
            alt="..."
          />
          <div className="card-body">
            <h5  className="card-title">{title}{`...`}</h5>
            <p className="card-text">{description}{`...`}</p>
            <p className="card-text"><strong>Author</strong> : {Author}</p>
            <p className="card-text"><strong>Published on</strong> : {publishedAt}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-xm btn-danger">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsitem;
