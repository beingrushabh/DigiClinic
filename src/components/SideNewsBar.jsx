import React, { Component } from "react";
import axios from "axios";
import "./News.css";

class SideNewsBar extends Component {
  state = {
    news: [],
  };
  async componentDidMount() {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e1f711dcc0c24559b93c5baa458ef502"
      )
      .then((data) => {
        this.setState({
          news: data.data.articles,
        });
      });
  }
  render() {
    const newsToDisplay = this.state.news.slice(0, 4).map((instance) => {
      return (
        <SideNewsTemplate
          urlToImage={instance.urlToImage}
          title={instance.title}
        />
      );
    });
    return (
      <div>
        <div class="sidebar-box">
          <h3 class="heading">Top News</h3>
          <div class="post-entry-sidebar">
            <ul>{newsToDisplay}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNewsBar;

class SideNewsTemplate extends Component {
  state = {};
  render() {
    const image = this.props.urlToImage;
    return (
      <div className="sideNewsTemplate">
        <li>
          <a href="/News">
            <img src={image} alt="Image placeholder" class="mr-4" />
            <div class="text">
              <h5>{this.props.title}</h5>
            </div>
          </a>
        </li>
      </div>
    );
  }
}
