import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./About.css";
class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <Carousel className="carousel">
          <div>
            <section id="about" className="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src="assets/img/about.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                    </h3>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="icofont-check-circled"></i> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i> Duis aute
                        irure dolor in reprehenderit in voluptate velit
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate trideta
                        storacalaperda
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <section id="about" className="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                    </h3>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="icofont-check-circled"></i> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i> Duis aute
                        irure dolor in reprehenderit in voluptate velit
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i> Ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate trideta
                        storacalaperda
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="assets/img/about.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default About;
