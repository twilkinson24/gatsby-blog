import React from "react";
import { graphql, StaticQuery, Link } from 'gatsby'


import SEO from "../components/seo";
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
      <div className="projects-wrap">
        <SEO title={'Title Here'} keywords={[`gatsby`, `blog`, `wordpress`]} />
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
                          media_type
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
                <div className="projects-wrapper">
                  {data.allWordpressAcfProjects.edges.map((project, index) => (
                      <ProjectCard
                        key={`${index}1234`}
                        title={project.node.acf.project_title}
                        description={project.node.acf.project_description}
                        media={project.node.acf.project_image}
                        index={index}
                      />
                    ))}
                </div>
              )} />
        </div>
      </div>
  );
};

export default Projects

/*
export const query = graphql`
  query wordpressACFProjects {
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
              source_url
            }
          }
        }
      }
    }
  }
`;

export default Projects;
*/