import React from "react";

const Services = () => (
    <div className="services-wrap">
    <div className="container">
      <section className="section services">
        <h3 className="title is-3 has-text-centered text-orange">What I Do</h3>
        <p className="has-text-centered"><span className="bottom-line"></span></p>
      
        <div className="columns">
          <div className="column is-6 is-mobile">
              <p>
                <strong>What I love to do</strong> is find practical solutions and collaborate quality people.
              </p>
              <p>WordPress is generally my tool of choice, but no two projects are the same. Building modern, elegant and accessible websites that provide value for my clients is <em>always the goal.</em></p>
              <p><a href="#">More about me and the web dev tools I use</a></p>
            </div>
            <div className="column is-6 is-mobile">
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