// import React, { Component } from 'react'
// import Newsitem from './Newsitem';
// export class News extends Component {
//   articles =  [];
//   constructor(){
//     super();
//     console.log("Hello");
//     this.state = {
//       articles:this.articles,
//       loading: false
//     };  
//   }

//   async componentDidMount()
//   {
//     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a36792e7e2264374ae0cee276bca1318";
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     this.setState({articles: parseddata.articles});
//   }  
// render() {
//     return (
//       <div>
//         <div className="container">
//         <h2 style={{marginTop:"70px"}}>NewsMonkey - Headlines</h2>
//         <div className="row">
//         {this.state.articles !== undefined && this.state.articles !== null && (
//             this.state.articles.map((element) => (
//             <div key={element.url} className="col-md-4">
//         <Newsitem
//           title={element.title ? element.title.slice(0, 20) : ""}
//           description={{element.description} ? {element.description} : "Stay updated with the latest news. Breaking stories, in-depth analysis, and trending topics—your go-to source for comprehensive news coverage"}
//           imageUrl={element.urlToImage?element.urlToImage:"./logo.png"}
//           newsUrl={element.url}
//           Author={element.author}
//           publishedAt={element.publishedAt}
//         />
//       </div>
//     ))
//   )}
// </div>

//         </div>
//         <div className="container d-flex justify-content-between">
//         <div className="btn btn-success">
//           &larr;Previous
//         </div>
//         <div className="btn btn-danger">
//            Next &rarr;
//         </div>
//       </div>
//    </div>
//     )
//   }
// }

// export default News


import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a36792e7e2264374ae0cee276bca1318&q=sports";
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <div className="container">
          <h2 style={{ marginTop: "70px" }}>NewsMonkey - Headlines</h2>
          <div className="row">
            {articles &&
              articles.map((element) => (
                <div key={element.url} className="col-md-4">
                  <Newsitem
                    title={element.title ? element.title.slice(0, 20) : ""}
                    description={element.description ? element.description.slice(0, 90) : "Stay updated with the latest news. Breaking stories, in-depth analysis, and trending topics—your go-to source for comprehensive news coverage"}
                    imageUrl={element.urlToImage ? element.urlToImage : "./logo.png"}
                    newsUrl={element.url}
                    Author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <div className="btn btn-success">
            &larr; Previous
          </div>
          <div className="btn btn-danger">
            Next &rarr;
          </div>
        </div>
      </div>
    );
  }
}

export default News

