import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import avatarImage from './../../content/assets/img/michael_movsesov_avatar_small.jpg';

const Projects = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const projects = data.projects.edges;
  const bio = data.bio.edges[0].node;

  return (
    <Layout>
      <SEO title="Projects" />
      <header className="projects__hero d-flex flex-column flex-wrap justify-content-center align-items-center text-white">
        <h1 className="projects__hero-title h3 mb-1">{siteMetadata.title}</h1>
        <h2 className="projects__hero-subtitle h6 text-uppercase mb-2">
          {siteMetadata.description}
        </h2>
        <AniLink
          swipe
          to="/"
          className="projects__hero-avatar"
          style={{ backgroundImage: `url(${avatarImage})` }}
        />
      </header>
      <div className="projects__main bg-light pt-7">
        <section className="mt-8 projects__about">
          <div className="container-fluid">
            <div className="projects__main-section-title col-md-12 mb-4 pl-0">
              <h3 className="h6 text-muted">Hello :)</h3>
            </div>
            <div className="projects__about-card">
              <div className="row">
                <div className="col-12">
                  <div dangerouslySetInnerHTML={{ __html: bio.html }} />
                  <div className="projects__about-social mt-6">
                    <a
                      href="https://github.com/michaelmov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" />
                    </a>
                    <a
                      href="https://codepen.io/michaelmov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-codepen" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/michaelmov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                    <a
                      href="https://twitter.com/MichaelMov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="mailto:michael.movsesov@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects__list mt-8">
          <div className="container-fluid">
            <div className="projects__main-section-title col-md-12 mb-4 pl-0">
              <h3 className="h6 text-muted">Projects</h3>
            </div>
            <div className="row">
              {projects.map((project, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div key={project.node.id} className="col-12 mb-4">
                    <AniLink
                      swipe
                      direction="left"
                      to={project.node.frontmatter.path}
                      className="article-card"
                    >
                      <article className="bg-white projects__list-card row m-0">
                        <div
                          className={`projects__list-card-image col-12 ${
                            isEven ? 'order-md-12' : ''
                          } col-md-6 p-0`}
                        >
                          <div className="projects__list-card-image-inner">
                            <Img
                              className="projects__list-card-image-inner"
                              fluid={
                                project.node.frontmatter.thumbnail
                                  .childImageSharp.fluid
                              }
                              objectFit="cover"
                              objectPosition="50% 50%"
                            />
                          </div>
                        </div>
                        <div className="projects__list-card-info col-12 order-md-1 col-md-6 p-3">
                          <h4 className="mb-2">
                            {project.node.frontmatter.title}
                          </h4>
                          <p className="d-none d-lg-block">
                            {project.node.frontmatter.description}
                          </p>
                          <img
                            className="projects__list-card-logo"
                            src={
                              project.node.frontmatter.logo.childImageSharp
                                .fluid.src
                            }
                            alt={project.node.frontmatter.title}
                          />
                        </div>
                      </article>
                    </AniLink>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
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
    bio: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
      edges {
        node {
          id
          html
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            logo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
