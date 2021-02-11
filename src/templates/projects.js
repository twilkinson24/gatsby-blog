import React from "react";
import { graphql, StaticQuery, Link } from 'gatsby'

import ProjectCard from "../components/project-card";

/**
 * Get pagination with ellipsis
 * @link https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 * @param {Number} current
 * @param {Number} last
 * @returns {Array}
 */

const Projects = props => {
  const { data } = props;
//const siteTitle = data.site.siteMetadata.title;
//  const { currentPage, numPages } = props.pageContext;
//const projects = data.allWordpressProjects.edges;

console.log('data')
console.log(data)

  return (
    <div>
          <div className="container">
            <section className="section">
                <h3 className="title is-3 has-text-centered text-orange">Some Recent Projects</h3>
                <p className="has-text-centered"><span className="bottom-line"></span></p>
                <p className="has-text-centered">*New projects coming soon!*</p>
                <p className="has-text-centered">
                  <Link to="#contact-form">Contact me</Link> with any questions, or if you'd like to see more samples of my work.
                </p>
                <p className="has-text-centered">
                  Interested in working together? <Link to="/work-together">Let me know!</Link>
                </p>
                <div className="projects-wrap">
                  <div className="columns is-multiline is-mobile blog-list">
                    <StaticQuery query={graphql`{
                          site {
                            siteMetadata {
                              title
                            }
                          }
                          allWordpressAcfProjects {
                            edges {
                              node {
                                acf {
                                  project_title
                                  project_description
                                  github_link
                                  live_demo_url
                                  project_image {
                                    localFile {
                                      childImageSharp {
                                        fixed(width: 700) {
                                          src
                                        }
                                      }
                                    }
                                }
                              }
                            }
                          }
                        }
                      }
                        `}
                        render={data => (
                          <div className="projects-wrapper columns">
                            {data.allWordpressAcfProjects.edges.map((project, index) => (
                                <ProjectCard
                                  key={`${index}1234`}
                                  title={project.node.acf.project_title}
                                  description={project.node.acf.project_description}
                                  github_link={project.node.acf.github_link}
                                  live_demo_url={project.node.acf.live_demo_url}
                                  media={project.node.acf.project_image.localFile.childImageSharp.fixed.src}
                                  index={index}
                                />
                              ))}
                          </div>
                        )} />
                  </div>
                </div>
              </section>
            </div>
          </div>
  );
};

export default Projects