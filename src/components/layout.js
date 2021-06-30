/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import './../styles/global.css';

const Layout = ({ children }) => {
  return (
    <>
      <main className="font-body bg-gray-100 text-gray-700">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
