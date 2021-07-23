import React from 'react';
// import PropTypes from 'prop-types';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

// AuthorCard.propTypes = {};

const AuthorCard = props => {
  return (
    <aside className="mm_author-card sticky px-20 pt-10 top-0">
      <div className="mm_author-card__inner col-span-6 border-2 border-black border-solid">
        <img
          src={avatarImage}
          alt="Michael Movsesov"
          className="rounded-full w-1/3"
        />
        <h1 className="font-display mt-2">Michael Movsesov</h1>
      </div>
    </aside>
  );
};

export default AuthorCard;
