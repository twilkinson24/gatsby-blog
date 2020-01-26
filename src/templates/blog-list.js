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
const pagination = (current, last) => {
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;

  let range = [];
  let rangeWithDots = [];
  let l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }
  for (let j of range) {
    if (l) {
      if (j - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(j);
    l = j;
  }

  return rangeWithDots;
};

const BlogIndex = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allWordpressPost.edges;
  const { currentPage, numPages } = props.pageContext;
//   const projects = data.allWordpressProjects.edges;

console.log('data 2')
console.log(data)


  return (
    <FrontPageLayout>
      <SEO title={siteTitle} keywords={[`gatsby`, `blog`, `wordpress`]} />
      <div className="columns is-multiline is-mobile blog-list">
        {posts.map((post, index) => (
          <PostCard
            key={post.node.wordpress_id}
            title={post.node.title}
            excerpt={'hide'}
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
  query wordpressPostsBlogListFrontPage($skip: Int!, $limit: Int!) {
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
