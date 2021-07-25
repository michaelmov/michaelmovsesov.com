import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

const AuthorCard = ({ isVisible, className }) => {
  return (
    <aside
      className={`mm_author-card ${
        !isVisible ? 'invisible' : 'visible'
      } ${className}`}
    >
      <div className="mm_author-card__inner col-span-6">
        <img
          src={avatarImage}
          alt="Michael Movsesov"
          className="rounded-full w-1/3"
        />
        <h1 className="font-display mt-2 text-gray-600">Michael Movsesov</h1>
        <h2 className="font-body text-xs text-gray-400 tracking-wide">
          FRONT-END ENGINEER
        </h2>
      </div>
    </aside>
  );
};

AuthorCard.propTypes = {
  isVisible: PropTypes.bool,
  className: PropTypes.string,
};

export default AuthorCard;
