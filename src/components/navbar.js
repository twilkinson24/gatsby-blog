import React, { Component } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import compIcon from "../images/sm-comp.png"

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
          return (
            <nav
              className="navbar not-homepage"
              role="navigation"
              aria-label="main-navigation"
            >
              <div className="container">
                <div className="navbar-brand">
                  <Link
                    to="/"
                    className="navbar-item"
                    title="Gatsby Starter WordPress Community"
                  >
                    <img src={compIcon} alt="cartoon computer with code" style={{ maxHeight: '40px', marginRight: '1rem'}} />
                    <h1 className="site-title">Taylor <span style={{color: '#4a4a4a'}}>Wilkinson</span></h1>
                  </Link>
                  <div className="navbar-burger burger" data-target="navMenu">
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
          );
        }}
      />
    );
  }
}

export default Navbar;
