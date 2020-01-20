import React from "react";
import { graphql, Link } from "gatsby";

import FrontPageLayout from "../components/front-page-layout";
import SEO from "../components/seo";
import PostCard from "../components/post-card";

/**
 * Get pagination with ellipsis
 * @link https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 * @param {Number} current
 * @param {Number} last
 * @returns {Array}
 */


const BlogIndex = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allWordpressPost.edges;

  return (
    <FrontPageLayout>
      <SEO title={siteTitle} keywords={[`gatsby`, `blog`, `wordpress`]} />
      <div className="columns is-multiline is-mobile blog-list">
        {posts.map((post, index) => (
          <PostCard
            key={post.node.wordpress_id}
            title={post.node.title}
            excerpt={post.node.excerpt}
            media={post.node.featured_media}
            slug={post.node.slug}
            index={index}
          />
        ))}
      </div>
    
    </FrontPageLayout>
  );
};

export const query = graphql`
  query wordpressPosts($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(
      filter: { status: { eq: "publish" } }
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          wordpress_id
          title
          slug
          excerpt
          featured_media {
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
`;

export default BlogIndex;
