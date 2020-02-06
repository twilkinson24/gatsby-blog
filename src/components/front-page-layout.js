import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import AboutMe from "./about-me";
import Services from './services'
import Projects from "../templates/projects";
import Footer from "./footer";
import "../style/style.scss";


const FrontPageLayout = ({ children }) => (
  <>
    <Header />
      <main>
        <AboutMe />
        <Services />
        <div className="gray-bg">
          <div className="container">
            <section className="section">
              <h3 className="title is-3">Recent Blog Posts</h3>
              {children}
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
