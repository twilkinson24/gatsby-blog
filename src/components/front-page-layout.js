import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import AboutMe from "./about-me"
import Services from './services'
import Testimonial from './testimonial'
import Projects from "../templates/projects"
import Footer from "./footer"
import "../style/style.scss"


const FrontPageLayout = ({ children }) => (
  <>
    <Header />
      <main>
        <AboutMe />
        <Services />
        <Projects />   
        <Testimonial />
        <div className="gray-bg">
          <div className="container">
            <section className="section">
            <h3 className="title is-3 text-orange has-text-centered">Recent Blog Posts</h3>
            <p className="has-text-centered"><span className="bottom-line"></span></p>
              {children}
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
