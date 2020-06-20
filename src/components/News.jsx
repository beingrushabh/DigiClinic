import React, { Component } from "react";
import "./TheBlog.css";
import "./News.css";
import Blog_img from "../resources/Doctor_blog.jpg";
import axios from "axios";
import NewsInstance from "./NewsInstance";
class News extends Component {
  state = {
    news: [{}],
  };

  news = new Object();
  async componentDidMount() {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e1f711dcc0c24559b93c5baa458ef502"
      )
      .then((data) => {
        this.setState({
          news: data.data.articles,
        });
        console.log(this.state.news);
      });
  }
  render() {
    const AllNews = this.state.news.map((instance) => {
      return (
        <NewsInstance
          author={instance.author}
          title={instance.title}
          urlToImage={instance.urlToImage}
          description={instance.description}
          content={instance.content}
          url={instance.url}
        />
      );
    });
    return (
      <div>
        <div class="py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <span>Category</span>
                <h3>News</h3>
                <p>
                  Daily news are essetial component to plan out today and
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section bg-white">
          <div class="container">
            <div class="row">{AllNews}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
