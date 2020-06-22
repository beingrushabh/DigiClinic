import React, { Component } from "react";
import "./TheBlog.css";
import Blog_img from "../resources/Doctor_blog.jpg";

class TopBlogsList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="sidebar-box">
          <h3 class="heading">Popular Posts</h3>
          <div class="post-entry-sidebar">
            <ul>
              <li>
                <a href="/Blogs">
                  <img src={Blog_img} alt="Image placeholder" class="mr-4" />
                  <div class="text">
                    <h4>
                      There’s a Cool New Way for Men to Wear Socks and Sandals
                    </h4>
                    <div class="post-meta">
                      <span class="mr-2">March 15, 2018 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Blog_img} alt="Image placeholder" class="mr-4" />
                  <div class="text">
                    <h4>
                      There’s a Cool New Way for Men to Wear Socks and Sandals
                    </h4>
                    <div class="post-meta">
                      <span class="mr-2">March 15, 2018 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Blog_img} alt="Image placeholder" class="mr-4" />
                  <div class="text">
                    <h4>
                      There’s a Cool New Way for Men to Wear Socks and Sandals
                    </h4>
                    <div class="post-meta">
                      <span class="mr-2">March 15, 2018 </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBlogsList;
