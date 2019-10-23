import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Project = ({ data }) => {
  const project = data.markdownRemark;
  let heroImage;
  let heroOverlayClass = '';
  
  if (project.frontmatter.hero_image) {
    heroImage = (
      <BackgroundImage
        className="article__hero-image"
        fluid={project.frontmatter.hero_image.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
      />
    );

    heroOverlayClass = 'article__hero-bg-overlay';
  }
  return (
    <Layout>
      <SEO title="Projects" />
      <header className={`project__hero article__hero d-flex align-items-center justify-content-center text-white ${heroOverlayClass}`}>
        {heroImage}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 article__hero-text d-flex flex-column align-items-center">
              <h1 className="h2 text-center article__hero-title mb-4">
                {project.frontmatter.title}
              </h1>
              <a
                className="d-block"
                href={project.frontmatter.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-invert">
                  {project.frontmatter.live_text}
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="article__main project__main">
        <div className="container-fluid">
          <div className="article__content bg-white px-4 py-8">
            <article id="article-wrapper">
              <p>
                <AniLink fade duration={0.2} to="/projects">
                  Back to Projects
                </AniLink>
              </p>
              <h5 className="mb-2">Client</h5>
              <p>
                <img
                  src={project.frontmatter.logo.childImageSharp.fluid.src}
                  className="project__main-logo"
                  alt={project.frontmatter.logo.childImageSharp.fluid.src}
                />
              </p>
              <div
                className="article__content-inner"
                dangerouslySetInnerHTML={{ __html: project.html }}
              />
              <p>
                <AniLink fade duration={0.2} to="/projects">
                  Back to Projects
                </AniLink>
              </p>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        live
        live_text
        logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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

export default Project;
