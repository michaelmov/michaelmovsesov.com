const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Cache templates
  const articleTemplate = path.resolve('src/templates/Article.js');
  const screenshotTemplate = path.resolve('src/templates/Screenshot.js');

  return graphql(`
    {
      articles: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/articles/" } }
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
        context: { slug: node.frontmatter.path },
      });
    });

    // Create article screenshot pages
    res.data.articles.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}/screenshot`,
        component: screenshotTemplate,
        context: { slug: node.frontmatter.path },
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
