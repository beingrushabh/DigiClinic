import React, { Component } from "react";
import "./News.css";
class NewsInstance extends Component {
  state = {};
  render() {
    const image = this.props.urlToImage;
    return (
      <div class="col-lg-4 mb-4">
        <div class="entry2 newsInstance">
          <a href="single.html">
            <img src={image} alt="Image" class="img-fluid rounded" />
          </a>
          <div class="excerpt">
            <span class="post-category text-white bg-success mb-3">Health</span>

            <h2>
              <a href="single.html">{this.props.title}</a>
            </h2>
            <div class="post-meta align-items-center text-left clearfix">
              <span class="d-inline-block mt-1">
                By <a href="#">{this.props.author}</a>
              </span>
              {/* <span>&nbsp;-&nbsp; {new Date()}</span> */}
            </div>

            <p>{this.props.description}</p>
            <p>
              <a href={this.props.url}>Read More</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsInstance;
