import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../style/style.scss";

const FrontPageLayout = ({ children }) => (
  <>
    <Header />
      <main className="container">
        <section className="section">
          {children}
        </section>
        <section className="section">
          <h2>Services</h2>
          <p>I guess I would have some services here.</p>
        </section>
      </main>
    <Footer />
  </>
);

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FrontPageLayout;
