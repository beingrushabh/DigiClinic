import React, { Component } from "react";

class NewsReadMore extends Component {
  state = {};
  render() {
    const image = this.props.urlToImage;
    return (
      <div>
        <header class="masthead" style={{ backgroundImage: `url(${image})` }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading">
                  <h1>{this.props.title}</h1>
                  <h2 class="subheading">{this.props.description}</h2>
                  <span class="meta">
                    Posted by
                    <a href="#">{this.props.author}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <p>{this.props.contents}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default NewsReadMore;
