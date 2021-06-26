import PropTypes from 'prop-types';
import React from 'react';
import avatarImage from './../../content/assets/img/michael_movsesov_avatar.jpg';

const HomeHeader = ({ siteTitle, siteDescription }) => (
  <header className="home__hero d-flex align-items-center text-white">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center my-1">
          <a href="/" className="d-block">
            <div
              className="home__hero-avatar"
              style={{ backgroundImage: `url(${avatarImage})` }}
            />
          </a>
        </div>
        <div className="col d-flex my-1 justify-content-center align-items-center align-items-md-start flex-column">
          <h1 className="home__hero-title h3 mb-1">{siteTitle}</h1>
          <h2 className="home__hero-subtitle h6 text-uppercase mb-2">
            {siteDescription}
          </h2>
          <div className="home__hero-social">
            <a
              href="https://twitter.com/MichaelMov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCQLGh1Y6dE4AAZmHKIS0XPg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
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
