import React from "react";

const Footer = () => (
  <footer className="container">
    <section className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
          <p>
          © Taylor Wilkinson{" "}{new Date().getFullYear()}
            
          </p>
          <p>
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and WordPress
          </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
