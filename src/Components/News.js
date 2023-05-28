import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
   
  }

  async componentDidMount() {
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.API}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ articles: parseddata.articles,
       totalResults: parseddata.totalResults,
       loading:false 
      });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&pagesize=${this.props.pagesize}&page=${this.state.page - 1}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({ 
      articles: parseddata.articles,
      page : this.state.page - 1,
      loading: false
    });

  };

  handleNextClick = async () => {
      this.setState({loading:true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({ 
        articles: parseddata.articles,
        page : this.state.page + 1,
        loading : false
      });
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <div className="container">
          <h2 style={{ marginTop: "70px" }}> 
          <span className="text-primary">N</span>
              <span className="text-danger">E</span>
              <span className="text-warning">W</span>
              <span className="text-primary">S </span>
              <span className="text-primary">M</span>
              <span className="text-danger">O</span>
              <span className="text-warning">N</span>
              <span className="text-primary">K</span>
              <span className="text-danger">E</span>
              <span className="text-warning">Y </span>
             :  HEADLINES
          </h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && articles &&
              articles.map((element) => (
                <div key={element.url} className="col-md-4">
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : "Stay updated with the latest news. Breaking stories, in-depth analysis, and trending topics—your go-to source for comprehensive news coverage"}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://t4.ftcdn.net/jpg/04/04/07/77/240_F_404077753_d8U1U3VCfQcVUIu9Hm7epibxEdJRlFfF.jpg"}
                    newsUrl={element.url}
                    Author={element.author}
                    publishedAt={element.publishedAt.slice(0,10)}
                  />
                </div>

              ))}
          </div>
        </div>
        {!this.state.loading && <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-success" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button  className="btn btn-primary">Page : {this.state.page}</button>
          <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-danger" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>}

       {!this.state.loading &&  
              <div className="position-static-fixed">
        <footer className="bg-dark text-center text-lg-start mt-3">
      <div className="text-center p-3 text-light">
        © 2020 Copyright:
        <a className="text-light text-decoration-none" href="/">NewsMonkey</a>
      </div>
      </footer>
        </div>}
      </div>
    );
  }
}
export default News

