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
          <ul>
            <li>Custom Theme Development</li>
            <li>Genesis Theme Development</li>
            <li>Headless WordPress With Gatsby.js</li>
            <li>PSD to WordPress</li>
            <li>Landing Pages</li>
            <li>Site Optimization</li>
          </ul>
        </section>
      </main>
    <Footer />
  </>
);

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default FrontPageLayout;
