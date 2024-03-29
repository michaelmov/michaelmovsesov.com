/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    const interesectionObserver = import(`intersection-observer`); // eslint-disable-line no-unused-vars
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
