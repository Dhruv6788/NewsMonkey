import React, { Component } from 'react';
import Newsitem from './Newsitem';
import 'animate.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import Jumbotron from './Jumbotron';

export class News extends Component {
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsMonkey : ${this.capitalizeFirstLetter(this.props.category)}`
  }
 
  async componentDidMount() {
    this.updateNews();
    this.startAnimation();
  }

  updateNews = async () => {
    this.props.setProgress(10);
    const { country, category,pagesize } = this.props;
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.API}&pagesize=${pagesize}&page=${page}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      page: page + 1,
      loading: false,
      totalResults: parseddata.totalResults
    });
    this.props.setProgress(100);

  }

  fetchMoreData = async () => {
    const { country, category,pagesize} = this.props;
    const { page, articles } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.API}&pagesize=${pagesize}&page=${page}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: articles.concat(parseddata.articles),
      page: page + 1,
      totalResults: parseddata.totalResults
    });
  }

  startAnimation() {
    setInterval(() => {
      const headline = document.getElementById('headline');
      headline.classList.remove('animate__animated', 'animate__pulse');
      void headline.offsetWidth;
      headline.classList.add('animate__animated', 'animate__pulse');

      
    }, 10000);
  }

  render() {
    const { articles, totalResults } = this.state;
    return (
      <>
      
        <Jumbotron/>
        <h5 id="headline" className="text-center animate__animated animate__pulse" style={{ marginTop: "70px" }}>
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
          <span className="text-light">: TOP {this.props.category.toUpperCase()}  HEADLINES</span>
        </h5>
       
      {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {articles && articles.map((element) => (
                <div key={element.url} className="col-md-4">
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : "Stay updated with the latest news. Breaking stories, in-depth analysis, and trending topics—your go-to source for comprehensive news coverage"}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://t4.ftcdn.net/jpg/04/04/07/77/240_F_404077753_d8U1U3VCfQcVUIu9Hm7epibxEdJRlFfF.jpg"}
                    newsUrl={element.url}
                    Author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source}
                    content={element.content}
                  />
                </div>
              ))}
            </div>
            </div>
          </InfiniteScroll>
      </>
    );
  }
}

export default News;
