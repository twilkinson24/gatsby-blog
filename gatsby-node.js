const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPage = path.resolve(`./src/templates/blog-page.js`);
  const blogList = path.resolve(`./src/templates/blog-list.js`);
  const blogListBlog = path.resolve(`./src/templates/blog-list-blog.js`);
  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
          }
        }
      }
      allWordpressPost(
        filter: { status: { eq: "publish" } }
        sort: { fields: [date], order: DESC }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.allWordpressPage.edges;
    pages.forEach(page => {
      createPage({
        path: page.node.slug,
        component: blogPage,
        context: { slug: page.node.slug }
      });
    });

    const posts = result.data.allWordpressPost.edges;
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: `/blog/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next
        }
      });
    });

     

    const postsPerPage = 3;
    const postsPerPageBlog = 6;
    // const numPages = Math.ceil(posts.length / postsPerPage);
    const numPagesBlog = Math.ceil(posts.length / postsPerPageBlog);
    const numPages = Math.ceil(posts.length / postsPerPageBlog);

    Array.from({ length: numPagesBlog }).forEach((_, i) => {
      createPage({
        path: `/`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: 0,
          numPagesBlog,
          currentPage: i + 1
        }
      });
    });

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blogListBlog,
        context: {
          limit: postsPerPageBlog,
          skip: i * postsPerPageBlog,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });
};
