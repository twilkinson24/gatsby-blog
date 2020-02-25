import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import AboutMe from "./about-me"
import Services from './services'
import Testimonial from './testimonial'
import Projects from "../templates/projects"
import ContactForm from "../pages/contact-form"
import PageTransition from 'gatsby-plugin-page-transitions';
import scrollTo from 'gatsby-plugin-smoothscroll';



import Footer from "./footer"
import "../style/style.scss"


const FrontPageLayout = ({ children }) => (
  <PageTransition>
    <Header />
      <main>
        <AboutMe />
        <div className="white-bg">
          <div className="container">
            <section className="section">
            <h3 className="title is-3 text-orange has-text-centered">Recent Blog Posts</h3>
            <p className="has-text-centered"><span className="bottom-line"></span></p>
              {children}
            </section>
          </div>
        </div>
        <Services />
        <Projects />
        <Testimonial />
        <ContactForm />
      </main>
    <Footer />
  </PageTransition>
);

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FrontPageLayout;
