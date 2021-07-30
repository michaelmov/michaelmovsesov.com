import React from 'react';
import PropTypes from 'prop-types';
import styles from './../styles/modules/LinkButton.module.css';
import { Link } from 'gatsby';

const LinkButton = ({ children, className, to }) => {
  return (
    <Link to={to} className={`${className} ${styles.LinkButton}`}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LinkButton;
