import React from 'react';
import { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { DiscussionEmbed } from 'disqus-react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Article = ({ data }) => {
  const article = data.markdownRemark;
  let heroImage;
  let heroOverlayClass = '';
  let disqusEmbed = null;

  const disqusShortname = 'michaelmovsesov';
  const disqusConfig = {
    identifier: article.id,
    title: article.frontmatter.title,
  };

  useEffect(() => {
    const initTitleParallax = () => {
      const articleHeroSection = document.querySelector('.article__hero');
      const articleHeroText = document.querySelector('#article-hero-text');
      const heroHeight = articleHeroSection.clientHeight;

      // Header parallax
      window.addEventListener('scroll', e => {
        const scroll = window.scrollY;

        if (scroll <= heroHeight) {
          articleHeroText.style.opacity = 1 - scroll / 250;
          articleHeroText.style.transform = `translateY(${scroll / 3.5}%)`;
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
    initTitleParallax();
  });

  if (article.frontmatter.hero_image) {
    heroImage = (
      <BackgroundImage
        className="article__hero-image"
        fluid={article.frontmatter.hero_image.childImageSharp.fluid}
      />
    );

    heroOverlayClass = 'article__hero-bg-overlay';
  }

  if (article.frontmatter.comments) {
    disqusEmbed = (
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
  }
  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <header
        className={`article__hero flex items-center justify-center text-white ${heroOverlayClass}`}
      >
        {heroImage}
        <div className="container grid-cols-12" style={{ zIndex: 1 }}>
          <div
            id="article-hero-text"
            className="col-span-12 text-center lg:-mt-48"
          >
            <h1 className="font-display leading-relaxed text-xl lg:text-4xl lg:leading-relaxed mb-10">
              {article.frontmatter.title}
            </h1>
            <h2 className="tracking-widest text-sm lg:text-lg font-thin">
              {article.frontmatter.date}
            </h2>
          </div>
        </div>
      </header>
      <div />
      <main className="article__main relative z-20 bg-white">
        <div className="container">
          <div className="article__content bg-white px-1 pt-20 lg:px-12 lg:pt-36">
            <Link to="/">
              <div
                className="article__author-avatar"
                style={{ backgroundImage: `url(${avatarImage})` }}
              />
            </Link>
            <article
              id="article-wrapper"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          </div>
          {disqusEmbed}
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
        comments
      }
      html
    }
  }
`;

export default Article;
