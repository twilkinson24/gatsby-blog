import React from "react";

const Footer = () => (
  <footer className="container">
    <div className="section content">
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
  </footer>
);

export default Footer;
