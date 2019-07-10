import React from 'react';

const Footer = props => {
  return (
    <footer className="footer py-4 bg-light">
      <div className="container-fluid">
        <div className="col-md-12 d-flex justify-content-center">
          <span className="text-muted text-uppercase">
            ©{new Date().getFullYear()} Michael Movsesov, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
