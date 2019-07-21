import React from 'react';
import { useEffect } from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { DiscussionEmbed } from 'disqus-react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar_small.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Article = ({ data }) => {
  const article = data.markdownRemark;
  let heroImage;
  const disqusShortname = 'michaelmovsesov';
  const disqusConfig = {
    identifier: article.id,
    title: article.frontmatter.title,
  };

  const initTitleParallax = () => {
    const articleHeroSection = document.querySelector('.article__hero');
    const articleHeroText = document.querySelector('.article__hero-text ');
    const heroHeight = articleHeroSection.clientHeight;

    // Header parallax
    window.addEventListener('scroll', e => {
      const scroll = window.scrollY;

      if (scroll <= heroHeight) {
        articleHeroText.style.transform = `translate(0px, ${scroll / 3.5}%)`;
        articleHeroText.style.opacity = 1 - scroll / 250;
      }
    });

    // Make all article images 100% width
    const articleImages = document.querySelectorAll('#article-wrapper img');
    articleImages.forEach(image => {
      if (image.parentElement.nodeName === 'P') {
        image.parentElement.style.width = '100%';
      }
    });
  };

  useEffect(() => {
    initTitleParallax();
  }, []);

  if (article.frontmatter.hero_image) {
    heroImage = (
      <BackgroundImage
        className="article__hero-image"
        fluid={article.frontmatter.hero_image.childImageSharp.fluid}
      />
    );
  }
  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <header
        className={`article__hero d-flex align-items-center justify-content-center text-white ${
          heroImage ? 'article__hero-bg-overlay' : ''
        }`}
      >
        {heroImage}
        <div className="container-fluid" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-12 article__hero-text">
              <h1 className="h2 text-center article__hero-title mb-4">
                {article.frontmatter.title}
              </h1>
              <h2 className="h6 article__hero-date text-center font-weight-normal">
                {article.frontmatter.date}
              </h2>
            </div>
          </div>
        </div>
      </header>
      <div />
      <main className="article__main">
        <div className="container-fluid">
          <div className="article__content bg-white px-4 pt-12">
            <AniLink swipe to="/">
              <div
                className="article__author-avatar"
                style={{ backgroundImage: `url(${avatarImage})` }}
              />
            </AniLink>
            <article
              id="article-wrapper"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          </div>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </main>
    </Layout>
  );
};

export const articleQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

export default Article;
