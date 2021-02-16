import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import AboutMe from "./about-me"
import Services from './services'
import Testimonial from './testimonial'
import Projects from "../templates/projects"
import PageTransition from 'gatsby-plugin-page-transitions';
import scrollTo from 'gatsby-plugin-smoothscroll';



import Footer from "./footer"
import "../style/style.scss"


const FrontPageLayout = ({ children }) => (
  <PageTransition>
    <Header />
      <main>
        <AboutMe />
        <Services />
        <Projects />
        <Testimonial />
      </main>
    <Footer />
  </PageTransition>
);

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FrontPageLayout;
