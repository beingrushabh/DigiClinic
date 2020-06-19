import React, { Component } from "react";
import FrontList from "./FrontList";
import Head from "./header";
import doctorPic from "../resources/doctor.png";
import Features from "./Features";
import Services from "./Services";
import About from "./About";
import TopBlogsList from "./TopBlogsList";
import News from "./News";
import OurDoctors from "./OurDoctors";
import Testimonial from "./Testimonial";
import SideNewsBar from "./SideNewsBar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Head />
        <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Worlds 1st Online hospital</h1>
                <h2>Let us host a treatment for you!!</h2>
                <div class="d-flex">
                  <a href="#about" class="btn-get-started scrollto">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                    class="venobox btn-watch-video"
                    data-vbtype="video"
                    data-autoplay="true"
                  >
                    {" "}
                    Watch Video <i class="icofont-play-alt-2"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 hero-img">
                <img src={doctorPic} className="img-fluid animated" />
              </div>
            </div>
          </div>
        </section>

        <Services />

        <OurDoctors />

        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-4">
              <SideNewsBar />
            </div>
            <div className="col-lg-4 col-md-4">
              <TopBlogsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
