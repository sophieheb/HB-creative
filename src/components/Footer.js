import React from 'react';

import '../styles/footer.module.css';
import facebookLogo from '../assets/facebookLogo.svg';
import instagramLogo from '../assets/instagramLogo.svg';
import logo from '../assets/logo-light.png';

function Footer() {
  return (
    <div className="container-fluid bg-primary p-5">
      <div className="row">
        <div className="col-6 col-sm-4 col-md-2 mx-auto text-center">
          <img
            src={logo}
            className="img-fluid w-md-50 w-100"
            alt="HB Creative logo"
          />
        </div>
      </div>
      <div
        className="row mx-auto py-4 justify-content-center"
      >
        <a className="text-white col-md-2 col-12 text-center" href="works">WORKS</a>
        <a className="text-white col-md-2 col-12 text-center" href="shop">SHOP</a>
        <a className="text-white col-md-2 col-12 text-center" href="about">ABOUT</a>
        <a className="text-white col-md-2 col-12 text-center" href="contact">CONTACT</a>
      </div>
      <div className="row justify-content-center">
        <a href="https://www.facebook.com/HollyButlerCreative">
          <img
            src={facebookLogo}
            alt="Facebook logo"
            className="pr-1 h-75"
          />
        </a>
        <a href="https://www.instagram.com/h.b_creative/">
          <img
            src={instagramLogo}
            alt="Instagram logo"
            className="pl-1 h-75"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
