import React from 'react';

const Footer = props => {
  return (
    <footer className="footer py-12 bg-gray-100">
      <div className="container">
        <div className="flex justify-center items-center">
          <span className="uppercase tracking-wide text-gray-400">
            ©{new Date().getFullYear()} Michael Movsesov, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
