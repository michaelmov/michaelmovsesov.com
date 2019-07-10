const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // Cache templates
  const articleTemplate = path.resolve('src/templates/Article.js');
  const projectTemplate = path.resolve('src/templates/Project.js');

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
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
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
    res.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
      });
    });
  });
};
