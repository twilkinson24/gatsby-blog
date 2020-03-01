import React from "react"
import { Link } from "gatsby"

const Services = () => (
  <div className="services-wrap" id="services">
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
                    <span style={{display: 'block', width: '170px' }}>A challenge!</span>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="has-text-centered" style={{marginBottom: '1rem'}}>Other plugins I've worked with include:</h3>
            <ul className="flex other-plugins-list">
              <li>Advanced Custom Fields</li>
              <li>BuddyPress</li>
              <li>WooCommerce</li>
              <li>Elementor</li>
            </ul>
            
            <p className="has-text-centered"><Link to="#contact-form">Contact me</Link> if you'd like to know more about the tools I use.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Services;