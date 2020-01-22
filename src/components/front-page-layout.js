import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../style/style.scss";
import avatarTwo from "../images/avatar-placeholder.jpg"
import avatarTay from "../images/test-2.jpg"


const FrontPageLayout = ({ children }) => (
  <>
    <Header />
      <main>
        <div className="gray-bg">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column">
                  <h3 className="title is-3">Recent Blog Posts</h3>
                </div>
              </div>
              {children}
            </section>
          </div>
        </div>

          <div className="img-far-right">
            <div style={{ position: 'relative' }}>
              <p style={{position: 'absolute', width: '100%'}}>
                <strong>Websites built for you!</strong>
              </p>
              <img
                src={avatarTay}
                className="img-far-right"
                alt="Taylor Wilkinson - freelance web developer"
              />
              </div>
          </div>

        <div className="container">
          <section className="section services">
            <h3 className="title is-3">Services</h3>
            <div className="columns">
                <div className="column">
                  Talk about what I do as a developer
                </div>
                <div className="column">
                  <p>I guess I would have some services here.</p>
                  <ul>
                    <li>Custom Theme Development</li>
                    <li>Genesis Theme Development</li>
                    <li>Headless WordPress With Gatsby.js</li>
                    <li>PSD to WordPress</li>
                    <li>Landing Pages</li>
                    <li>Site Optimization</li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
        
        
        <div className="gray-bg">
          <div className="container">
            <section className="section">
            <h3 className="title is-3">Projects</h3>
              <div className="columns">
                  <div className="column">
                    Put the project cards here
                  </div>
                  <div className="column">
                    <p>I guess I would have some projects here.</p>
                    <ul>
                      <li>Custom Theme Development</li>
                      <li>Genesis Theme Development</li>
                      <li>Headless WordPress With Gatsby.js</li>
                      
                    </ul>
                  </div>
              </div>
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
