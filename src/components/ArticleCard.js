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
const ArticleCard = ({
  title,
  excerpt,
  path,
  isExternal,
  iconClass,
  border,
}) => {
  const iconBaseClasses = 'text-3xl';
  return (
    <article className="mm_article-card">
      <ArticleLink isExternal={isExternal} link={path}>
        <div className="bg-white p-12">
          <div className="mm_article-icon text-white">
            <i
              className={
                iconClass
                  ? `${iconClass} ${iconBaseClasses}`
                  : `far fa-newspaper ${iconBaseClasses}`
              }
            />
          </div>
          <h1 className="text-xl font-display font-bold pb-2 relative leading-relaxed">
            {title}
            {isExternal && (
              <i className="fas fa-external-link-alt text-primary-100 mb-0 text-sm absolute ml-3 mt-1"></i>
            )}
          </h1>
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
  border: PropTypes.bool,
};

ArticleCard.defaultProps = {
  title: 'Hello World',
  excerpt: 'Hello world',
  path: '/',
  isExternal: true,
  iconClass: 'far fa-newspaper',
  border: true,
};

export default ArticleCard;
