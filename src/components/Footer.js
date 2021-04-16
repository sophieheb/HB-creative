import React from 'react';

import styles from '../styles/footer.module.css';
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
        <a className={`${styles.footer_link} col-md-2 col-12 text-center py-md-0 py-4`} href="/">HOME</a>
        <a className={`${styles.footer_link} col-md-2 col-12 text-center py-md-0 py-4`} href="works">WORKS</a>

        <a className={`${styles.footer_link} col-md-2 col-12 text-center py-md-0 py-4`} href="about">ABOUT</a>
        <a className={`${styles.footer_link} col-md-2 col-12 text-center py-md-0 py-4`} href="contact">CONTACT</a>
      </div>
      <div className="row justify-content-center">
        <a href="https://www.facebook.com/HollyButlerCreative">
          <img
            src={facebookLogo}
            alt="Facebook logo"
            className="p-3 h-100"
          />
        </a>
        <a href="https://www.instagram.com/h.b_creative/">
          <img
            src={instagramLogo}
            alt="Instagram logo"
            className="p-3 h-100"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
