import React, { Component } from "react";

class Services extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="services" class="services section-bg">
          <div class="container">
            <div class="section-title">
              <span>Services</span>
              <h2>Services</h2>
              <p>
                All the services ranging from <b>checkup to test reports</b>,{" "}
                <b>Health tips to yoga lessons</b>
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-doctor"></i>
                  </div>
                  <h4>
                    <a href="">Live Diagnosis</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon">
                    <i className="icofont-tasks-alt"></i>
                  </div>
                  <h4>
                    <a href="">Smart scheduled appointments</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-heart-beat-alt"></i>
                  </div>
                  <h4>
                    <a href="">Free Online therapies</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-prescription"></i>
                  </div>
                  <h4>
                    <a href="">Prescription from best doctors</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-herbal"></i>
                  </div>
                  <h4>
                    <a href="">Free Health tips</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="icofont-medicine"></i>
                  </div>
                  <h4>
                    <a href="">Home delivery of all medications</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
