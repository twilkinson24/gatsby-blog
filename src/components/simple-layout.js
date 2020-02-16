import React from "react";
import PropTypes from "prop-types";

import Navbar from "./navbar";
import Footer from "./footer";
import "../style/style.scss";
import PageTransition from 'gatsby-plugin-page-transitions';



const SimpleLayout = ({ children }) => (
  <PageTransition>
    <Navbar />
      <section className="section page">
        <main className="container">{children}</main>
      </section>
    <Footer />
  </PageTransition>
);

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SimpleLayout;
