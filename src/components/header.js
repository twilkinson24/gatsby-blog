import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import avatar from "../images/avatar-tw2.png"
import compIcon from "../images/sm-comp.png"

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
                        <img src={compIcon} alt="cartoon computer with code" style={{ maxHeight: '40px', marginRight: '1rem'}} />
                        <h1 className="site-title">T<span style={{color: '#4a4a4a'}}>W</span></h1>
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
              </div>
              <div className="hero-body">
                <div className="container">
                  <section className="section">
                    <div className="columns">
                      <div className="column">
                        <h1 className="title"><span className="text-orange">Hey!</span>I'm Taylor</h1>
                        <h2 className="subtitle"><span className="text-blue">and I love web development</span></h2>
                        <ul>
                          <li>
                            <h3>Front-end Development</h3>
                          </li>
                          <li>
                            <h3>WordPress Development</h3>
                          </li>
                          <li>
                            <h3>Custom Web Solutions</h3>
                          </li>
                        </ul>
                        <div className="action-buttons">
                          <button className="button">Projects</button>
                          <button className="button">Contact</button>
                        </div>
                      </div>
                      <div className="column hero-avatar-wrap">
                        <img
                          src={avatar}
                          alt="Taylor Wilkinson - freelance web developer"
                          style={{ width: "250px" }}
                        />
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
