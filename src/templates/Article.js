import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AuthorCard from '../components/AuthorCard';

const Article = ({ data, pageContext }) => {
  const article = data.markdownRemark;
  let disqusEmbed = null;

  const disqusShortname = 'michaelmovsesov';
  const disqusConfig = {
    identifier: article.id,
    title: article.frontmatter.title,
  };

  const authorAvatarRef = useRef(null);
  const [isAuthorCardVisible, setIsAuthorCardVisible] = useState(false);

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

  const observeAuthorCard = changes => {
    changes.forEach(change => {
      console.log(change);
      if (change.intersectionRatio === 0 && !change.isIntersecting) {
        setIsAuthorCardVisible(true);
      } else {
        setIsAuthorCardVisible(false);
      }
    });
  };

  useEffect(() => {
    initTitleParallax();

    let observerOptions = {
      root: null, //root
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(
      observeAuthorCard,
      observerOptions
    );

    observer.observe(authorAvatarRef.current);

    return () => {
      if (isAuthorCardVisible) observer.unobserve(authorAvatarRef.current);
    };
  }, [isAuthorCardVisible, authorAvatarRef]);

  if (article.frontmatter.comments) {
    disqusEmbed = (
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
  }
  return (
    <Layout>
      <SEO
        title={article.frontmatter.title}
        meta={[
          {
            property: `og:image`,
            content: `https://michaelmovsesov.com/${pageContext.ogImage.path}`,
          },
          {
            property: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            property: `twitter:title`,
            content: article.frontmatter.title,
          },
          {
            property: `twitter:description`,
            content: article.frontmatter.description,
          },
          {
            property: `twitter:image`,
            content: `https://michaelmovsesov.com/${pageContext.ogImage.path}`,
          },
          {
            property: `twitter:creator`,
            content: `@MichaelMov`,
          },
          {
            property: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            property: `og:image:width`,
            content: `${pageContext.ogImage.size.width}`,
          },
          {
            property: `og:image:height`,
            content: `${pageContext.ogImage.size.height}`,
          },
        ]}
      />
      <header
        className={`article__hero flex items-center justify-center text-white`}
      >
        <div className="container grid-cols-12" style={{ zIndex: 20 }}>
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
      <main className="article__main relative z-20 bg-white mb-16 pt-10">
        <div
          className="sticky top-0 w-full ml-auto mr-auto pt-6 pl-6 hidden xl:block"
          style={{ maxWidth: '1300px' }}
        >
          <AuthorCard isVisible={isAuthorCardVisible} />
        </div>
        <div className="container">
          <div className="article__content bg-white px-1 pt-20 lg:px-12 lg:pt-36">
            <Link to="/">
              <div
                className="article__author-avatar"
                style={{ backgroundImage: `url(${avatarImage})` }}
                ref={authorAvatarRef}
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
        description
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
