import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "../style/style.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">
      <section className="section">
        <h2>Projects</h2>
        <p>I guess I would have some projects here.</p>
      </section>
      <section className="section">
        {children}
      </section>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
