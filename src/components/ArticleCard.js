import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ArticleLink = ({ children, link, isExternal }) => {
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return <Link to={link}>{children}</Link>;
  }
};
const ArticleCard = ({ title, excerpt, path, isExternal, iconClass }) => {
  return (
    <article className="article-card ml-4">
      <ArticleLink isExternal={isExternal} link={path}>
        <div className="bg-white pl-6 pr-4 py-4">
          <div className="article-card__icon text-white d-flex justify-content-center align-items-center">
            <i className={iconClass || 'far fa-newspaper'} />
          </div>
          <h4 className="mb-1">{title}</h4>
          <p>{excerpt}</p>
        </div>
      </ArticleLink>
    </article>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  isExternal: PropTypes.bool,
  iconClass: PropTypes.string,
};

ArticleCard.defaultProps = {
  title: 'Hello World',
  excerpt: 'Hello world',
  path: '/',
  isExternal: true,
  iconClass: 'far fa-newspaper',
};

export default ArticleCard;
