import React, { Component } from "react";
import "./PostBlog.css";
class PostBlog extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="container">
          <div class="page-header">
            <h1>
              New Blog Post <small>A responsive blog post template</small>
            </h1>
          </div>

          {/* <!-- New Blog Post - START --> */}
          <div class="container">
            <div class="row" id="row_style">
              <h4 class="text-center">Submit new post</h4>
              <div class="col-md-4   col-md-offset-4">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Title" />
                </div>
                <textarea id="editor" cols="30" rows="10">
                  Submit your text post here...
                </textarea>
                <br />
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Tags" />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" id="submit">
                    Submit new post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostBlog;
