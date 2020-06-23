import React, { Component } from "react";
import {Link} from "react-router-dom";

class Head extends Component {
  state = {};
  render() {
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="index.html">DigiClinic</a>
            </h1>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Blogs</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li className="drop-down">
                  <a href="">Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="drop-down">
                      <a href="#">Deep Drop Down</a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <Link to={'/login'}>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to={'/register'}>
                    Register
                  </Link>
                  <Link to={'/logout'}>
                    Log out
                  </Link>
                </li>
              </ul>
            </nav>

            <a href="#about" className="get-started-btn scrollto">
              Get Started
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Head;
