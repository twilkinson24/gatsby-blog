import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";

import Sticky from 'react-stickynode';
import Typer from '../components/typer'


import WaterWave from 'react-water-wave'


import logo from "../images/logo-trans-bg.png"
import logoSticky from "../images/logo-orange-trans-bg.png"
import avatar from "../images/avatar-tw2.png"
import siteLogo from "../images/logo.png"

class Header extends Component {

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


  /* wordpressWpSettings {
              title
              description
            } */

  render() {
    
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressPage {
              edges {
                node {
                  title
                  wordpress_id
                  slug
                }
              }
            }
          }
        `}
        render={data => {
          const wordpressPages = data.allWordpressPage.edges;
          const wordpressMetadata = data.wordpressWpSettings;
          return (
              <section className="hero is-medium">
                <div className="hero-head">
                <Sticky top={0} innerZ={9999} activeClass="is-fixed-top">
                  <nav className="navbar">
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
                          {wordpressPages.map(page => (
                            <Link
                              className="navbar-item"
                              to={`/${page.node.slug}`}
                              key={page.node.wordpress_id}
                            >
                              {page.node.title}
                            </Link>
                          ))}
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
                </div>

                <div className={`hero-body`}>
                  <div className="container">
                  
                    <section className="section">
                      <div className="columns">
                        <div className="column has-text-centered banner-content">
                          <p className="lead text-white">Hey</p>
                          <h2 className="title is-2 text-d-blue">I'm Taylor</h2>
                           <Typer heading={"I'm a"} dataText={["Web Developer","WordPress Developer", "Front-End Developer", "Freelancer"]} />
                          <div className="action-buttons cta-buttons">
                            <button className="button">About</button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>

          );
        }}
      />
    );
  }
}

export default Header;
