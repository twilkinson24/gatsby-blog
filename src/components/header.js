import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";

import Sticky from 'react-stickynode';
import Typer from '../components/typer'

import logo from "../images/logo-trans-bg.png"
import logoSticky from "../images/logo-orange-trans-bg.png"
import bubble from './../images/bubble2.png'
import Particles from 'react-particles-js';

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
                 <Particles 
                    width="100%"
                    height="90vh" 
                    params={{
                      "particles": {
                        "number": {
                          "value": 150,
                          "density": {
                            "enable": true,
                            "value_area": 868.0624057955
                          }
                        },
                        "color": {
                          "value": "#ecd018"
                        },
                        shape: {
                          type: 'images',
                          images: [
                              {src: bubble, height: 200, width: 200},
                          ]
                      },
                        "opacity": {
                          "value": 0.1,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 2,
                            "opacity_min": 0.1,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 6,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.3,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": false,
                        },
                        "move": {
                          "enable": true,
                          "speed": 5,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": false,
                            "mode": "grab"
                          },
                          "onclick": {
                            "enable": false,
                            "mode": "push"
                          },
                          "resize": false
                        },
                        "modes": {
                          "grab": {
                            "distance": 400,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 200,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true
                    }}
                    style={{
                      "backgroundColor":"transparent",
                      "position": "absolute",
                      "width": "100%",
                      "height": "100%"
                    }}
                  />
                  <div className="hero-wrapper">
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
                              <p className="lead text-white">Hey!</p>
                              <h2 className="title is-2 text-d-blue">I'm Taylor</h2>
                              <Typer heading={"I'm a"} dataText={["Web Developer","WordPress Developer", "Front-End Developer", "Freelancer"]} />
                              <div className="action-buttons cta-buttons">
                                <a href="#about-me" className="button button--ujarak hover-trans bg-dark-blue">About</a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
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
