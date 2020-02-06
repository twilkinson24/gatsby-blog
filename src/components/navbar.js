import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import logo from "../images/logo-trans-bg.png"
import logoSticky from "../images/logo-orange-trans-bg.png"
import Sticky from 'react-stickynode'

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <Sticky top={0} innerZ={9999} activeClass="is-fixed-top">
                  <nav className="navbar not-homepage">
                    <div className="container">
                      <div className="navbar-brand">
                        <Link
                          to="/"
                          className="navbar-item"
                          title="Gatsby Starter WordPress Community"
                        >   
                          <img src={logo} className="logo-main" alt="TW logo for Taylor Wilkinson" />
                          <img src={logoSticky} className="logo-sticky" alt="TW logo for Taylor Wilkinson" />
                          
                        </Link>
                        <div
                          className="navbar-burger burger"
                          data-target="navMenu"
                        >
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div id="navMenu" className="navbar-menu">
                        <div className="navbar-end has-text-centered">
                          <Link
                            className="navbar-item"
                            to={`/`}
                          >
                            Services
                          </Link>
                          
                          <Link
                              className="navbar-item"
                              to={`/blog`}
                            >
                            Blog
                          </Link>
                          <Link
                              className="navbar-item"
                              to={`/contact`}
                            >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                  </Sticky>
    );
  }
}

export default Navbar;
