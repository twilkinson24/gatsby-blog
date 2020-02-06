import React from "react";
import avatarTwo from "../images/TaylorAvatar.png"


const Services = () => (
    <div className="services-wrap">
    <div className="container">
      <section className="section services">
        <h3 className="title is-3 text-orange has-text-centered">What I Do</h3>
        <p className="has-text-centered"><span className="bottom-line"></span></p>
        <div className="columns">
          <div className="column">
            <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Design
                </p>
              </div>
            </div>
          </div>
          <div className="column">
          <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Development
                </p>
              </div>
            </div>
          </div>
          <div className="column">
          <div class="card has-text-centered">
              <div class="card-content">
                <p class="title">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-mobile">
              <p>
                <strong>What I love to do</strong> is find practical solutions and collaborate quality people.
              </p>
              <p>WordPress is generally my tool of choice, but no two projects are the same. Building modern, elegant and accessible websites that provide value for my clients is <em>always the goal.</em></p>
              <p><a href="#">More about me and the web dev tools I use</a></p>
            </div>
            <div className="column is-one-quarter has-text-centered">
              <img src={avatarTwo} className="cartoon-avatar" alt="Cartoon Avatar of Taylor Wilkinson" />
            </div>
            <div className="column is-5 is-mobile">
            <p><strong>Recent projects have involved:</strong></p>
              <ul className="list-style-circle">
                <li>PSD to WordPress</li>
                <ul>
                  <li>Custom-coded Theme Development</li>
                  <li>Divi &amp; Elementor Development</li>
                </ul>
                <li>Headless WordPress With Gatsby.js</li>
                <li>WordPress Site Optimization</li>
                <li>Landing Pages</li>
              </ul>
            </div>
        </div>
      </section>
    </div>
  </div>
);

export default Services;