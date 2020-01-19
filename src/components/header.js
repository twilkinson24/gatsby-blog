import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import logo from "../images/logo.svg";
import avatar from "../images/avatar-tw.jpg"

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
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <Link
                        to="/"
                        className="navbar-item"
                        title="Gatsby Starter WordPress Community"
                      >   
                        <img
                          src={logo}
                          alt="Gatsby Starter WordPress Community"
                          style={{ width: "88px" }}
                        />
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
                            to={`/contact`}
                          >
                            Contact
                          </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hero-body">
                <div className="container">
                  <section className="section columns">
                    <div className="column">
                      <h1 className="title"><span className="text-orange">Hey!</span>I'm Taylor</h1>
                      <h2 className="subtitle">and I love web development</h2>
                      <div className="action-buttons">
                        <button className="button">Projects</button>
                        <button className="button">Contact Me</button>
                      </div>
                    </div>
                    <div className="column">
                    <Link
                    to="/"
                    title="Gatsby Starter WordPress Community"
                  >
                    <img
                      src={avatar}
                      className="img-rounded"
                      alt="Gatsby Starter WordPress Community"
                      style={{ width: "200px" }}
                    />
                  </Link>
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
