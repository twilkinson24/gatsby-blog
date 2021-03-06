import React from "react";
import { Link } from "gatsby";

import headShot from '../images/avatar-tw.jpg'
import scrollTo from 'gatsby-plugin-smoothscroll';


const AboutMe = () => (
        <div className="container">
            <section className="section" id="about-me">
                <div className="columns">
                    <div className="column">
                        <div className="about-me-text">
                            <h3 className="title is-3 text-orange">About Me</h3>
                            <h4 className="title is-4">WordPress Developer | Front-End Developer</h4>
                            <p><span className="bottom-line"></span></p>
                            <p>A life-long learner from the great state of Michigan,
                                I discovered a passion for web development and haven’t looked back since!
                            </p>
                            <p>
                                I love finding practical solutions and collaborating with quality
                                people to build web sites and web applications.
                            </p>
                            <p>
                                If you're interested, I invite you to learn more about the <Link to='/blog/my-favorite-development-tools'>tools I use to build websites</Link> or the 
                                 <a onClick={() => scrollTo('#services')}> services I offer</a>.
                            </p>
                            <p>
                                <em>
                                    Providing value for my clients is always the goal. 
                                </em>
                            </p>
                            <div className="cta-buttons">
                                <Link to="/work-together" className="button button--inverted button--ujarak bg-dark-blue">
                                    Hire Me
                                </Link>
                                <a onClick={() => scrollTo('#contact-form')} className="button blue-bg-trans button button--ujarak">
                                    Say What's Up
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="about-me-img">
                            <img src={headShot} alt="Taylor Wilkinson - Web Developer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
);

export default AboutMe;