import React from 'react';

import { graphql } from 'gatsby';

import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

import SEO from '../components/seo';

const Screenshot = ({ data }) => {
  const screenshot = data.markdownRemark;

  return (
    <main className="container flex justify-center">
      <SEO
        title={screenshot.frontmatter.title}
        meta={[
          {
            name: 'robots',
            content: 'noindex,',
          },
        ]}
        canonical={window.location.hostname + screenshot.frontmatter.path}
      />
      <article
        className="mm_screenshot__article relative flex flex-col overflow-hidden bg-white pt-16 pl-28 pr-20 pb-0"
        style={{ minWidth: '1200px', minHeight: '630px' }}
      >
        <h1 className="text-primary-400 flex-grow font-display text-6xl leading-relaxed font-bold">
          {screenshot.frontmatter.title}
        </h1>
        <footer className="mm_screenshot__footer absolute h-36 left-0 right-0 bottom-0 flex justify-between items-center bg-gray-100 px-8">
          <div className="flex items-center">
            <img
              src={avatarImage}
              alt="Author"
              className="w-20 h-20 rounded-full mr-3 border-4 border-primary-100"
            />
            <h2 className="text-3xl text-gray-600 font-display">
              Michael Movsesov
            </h2>
          </div>
          <h3 className="text-3xl text-gray-600 font-display">
            {screenshot.frontmatter.date}
          </h3>
        </footer>
      </article>
    </main>
  );
};

export const ScreenshotQuery = graphql`
  query ScreenshotByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        path
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default Screenshot;
