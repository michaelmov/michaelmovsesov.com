import React from 'react';
import { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Article = ({ data }) => {
  const article = data.markdownRemark;
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

  if (article.frontmatter.comments) {
    disqusEmbed = (
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
  }
  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <header
        className={`article__hero flex items-center justify-center text-white`}
      >
        <div className="container grid-cols-12" style={{ zIndex: 1 }}>
          <div
            id="article-hero-text"
            className="col-span-12 text-center lg:-mt-48"
          >
            <h1 className="font-display leading-relaxed text-2xl lg:text-4xl lg:leading-relaxed mb-10">
              {article.frontmatter.title}
            </h1>
            <h2 className="tracking-wide text-gray-300 font-thin">
              {article.frontmatter.date}
            </h2>
          </div>
        </div>
      </header>
      <div />
      <main className="article__main relative z-20 bg-white mb-16">
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
  query ArticleByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
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
