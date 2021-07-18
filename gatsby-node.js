const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Cache templates
  const articleTemplate = path.resolve('src/templates/Article.js');

  return graphql(`
    {
      articles: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/articles/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    // Create article pages
    res.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: articleTemplate,
      });
    });

    // Create project pages
    // res.data.projects.edges.forEach(({ node }) => {
    //   createPage({
    //     path: node.frontmatter.path,
    //     component: projectTemplate,
    //   });
    // });
  });
};
