import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHeader from '../components/HomeHeader';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const articles = data.allMarkdownRemark.edges;
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={'Michael Movsesov'}
        keywords={[`UX`, `UI`, `Developer`, `Engineer`]}
      />
      <div className="home__main bg-light">
        <HomeHeader
          siteTitle={siteMetadata.title}
          siteDescription={siteMetadata.description}
        />
        <div className="container pt-8 grid grid-cols-12 gap-3 mt-10">
          <div className="col-span-12 mb-7">
            <h3 className="mm_section-title relative text-gray-400 font-bold">
              Latest
            </h3>
          </div>
          {articles.map(article => {
            return (
              <div key={article.node.id} className="col-span-12 mb-6">
                <ArticleCard
                  title={article.node.frontmatter.title}
                  excerpt={article.node.frontmatter.description}
                  path={
                    article.node.frontmatter.is_external
                      ? article.node.frontmatter.external_url
                      : article.node.frontmatter.path
                  }
                  isExternal={article.node.frontmatter.is_external}
                  iconClass={article.node.frontmatter.icon_class}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const articleQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/articles/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            is_external
            external_url
            icon_class
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
