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

  return (
    <FrontPageLayout>
      <SEO title={siteTitle} keywords={[`gatsby`, `blog`, `wordpress`]} />

    </FrontPageLayout>
  );
};

export const query = graphql`
  query wordpressPostsBlogListFrontPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default BlogIndex;
