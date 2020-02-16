import React from "react";

const Services = () => (
  <div className="services-wrap">
    <div className="container">
      <section className="section services">
        <h3 className="title is-3 has-text-centered text-orange">What I Do</h3>
        <p className="has-text-centered"><span className="bottom-line"></span></p>
      
        <div className="columns">
          <div className="column is-10 is-mobile services-intro" style={{ margin: '0 auto'}}>
            <p>
              <strong>I love to build quality websites</strong> for and alongside quality people.
            </p>
            <p>WordPress is generally my tool of choice, but no two projects are the same. I strive to build modern, elegant and accessible websites that help my clients be successful.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-mobile" style={{ margin: '0 auto'}}>
            <div className="columns">
              <div className="column is-6 is-mobile projects-n-favorites">
                <p><strong>Recent projects have involved:</strong></p>
                <ul className="list-style-circle">
                  <li>PSD to WordPress</li>
                  <li>Headless WordPress With Gatsby.js</li>
                  <li>WordPress Edits and Redesigns</li>
                  <li>WooCommerce implementation</li>
                  <li>Landing Pages</li>
                </ul>
              </div>
              <div className="column is-6 is-mobile projects-n-favorites">
                <p><strong>WordPress favorites:</strong></p>
                <ul className="list-style-none">
                  <li className="flex">
                    <span className="favorite-label"><em>Theme:</em></span>
                    <span style={{ display: 'block' }}>Genesis by StudioPress</span>
                  </li>
                  <li className="flex">
                    <span className="favorite-label"><em>Page Builder:</em></span>
                    <span style={{display: 'block'}}>Divi by Elegant Themes</span>
                  </li>
                  <li className="flex">
                    <span className="favorite-label"><em>Hosting Co:</em></span>
                    <span style={{display: 'block'}}>Flywheel</span>
                  </li>
                  <li className="flex">
                    <span className="favorite-label"><em>Type of job:</em></span>
                    <span style={{display: 'block', width: '170px' }}>PSD to Code / A challenge</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="has-text-centered has-text-left-mobile"><a href="#">More about me and the web dev tools I use</a></p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Services;