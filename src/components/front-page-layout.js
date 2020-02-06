import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import AboutMe from "./about-me";
import Footer from "./footer";
import Projects from "../templates/projects";
import "../style/style.scss";
import avatarTwo from "../images/TaylorAvatar.png"
import brightIdeaImg from "../images/icons8-developer-64.png"


const FrontPageLayout = ({ children }) => (
  <>
    <Header />
      <main>
        <AboutMe />
        <div className="gray-bg">
          <div className="container">
            <section className="section">
              <h3 className="title is-3">Recent Blog Posts</h3>
              {children}
            </section>
          </div>
        </div>

        <div className="services-wrap">
          <div className="container">
            <section className="section services">
              <h3 className="title is-3">Services</h3>
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
        
        
        <div className="gray-bg">
          <div className="container">
            <section className="section">
              <h3 className="title is-3">Projects</h3>
              <Projects />
            </section>
          </div>
        </div>
      </main>
    <Footer />
  </>
);

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FrontPageLayout;
