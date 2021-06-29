import PropTypes from 'prop-types';
import React from 'react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

const HomeHeader = ({ siteTitle, siteDescription }) => (
  <header className="mm_home-header">
    <div className="container grid grid-cols-12 gap-4">
      <div className="lg:col-span-2 col-span-12 flex lg:flex-col justify-center items-center">
        <a href="/" className="block">
          <div
            className="h-32 w-32 rounded-full bg-no-repeat bg-cover border-4 border-solid border-secondary-300"
            style={{ backgroundImage: `url(${avatarImage})` }}
          />
        </a>
      </div>
      <div className="lg:col-span-6 col-span-12 flex flex-col lg:justify-center lg:pl-3">
        <h1 className="font-display text-2xl lg:text-3xl mb-2">{siteTitle}</h1>
        <h2 className="text-sm lg:text-md mb-2 tracking-wider font-light">
          {siteDescription}
        </h2>
        <div className="text-3xl">
          <a
            href="https://twitter.com/MichaelMov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter mr-3" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQLGh1Y6dE4AAZmHKIS0XPg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube mr-3" />
          </a>
          <a
            href="https://github.com/michaelmov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-3" />
          </a>
          <a
            href="https://codepen.io/michaelmov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen mr-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelmov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin mr-3" />
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
  </header>
);

HomeHeader.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

HomeHeader.defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

export default HomeHeader;
