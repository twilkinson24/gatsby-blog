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


  return (
    <div>
          <div className="container">
            <section className="section">
                <h3 className="title is-3 has-text-centered text-orange">Some Recent Projects</h3>
                <p className="has-text-centered"><span className="bottom-line"></span></p>
                <p className="has-text-centered">*New projects coming soon!*</p>

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