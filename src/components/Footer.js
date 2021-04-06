import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/footer.module.css';
import facebookLogo from '../assets/facebookLogo.svg';
import instagramLogo from '../assets/instagramLogo.svg';
import logo from '../assets/logo-light.png';

function Footer() {
  return (
    <div className="container-fluid bg-primary p-5">
      <div className="row">
        <div className="col-2 mx-auto text-center">
          <img
            src={logo}
            className="img-fluid w-50"
            alt="HB Creative logo"
          />
        </div>
      </div>
      <Navbar
        className="row mx-5 py-4"
        variant="dark"
      >
        <Nav className="mx-auto">
          <Nav.Link classhref="works">WORKS</Nav.Link>
          <Nav.Link href="shop">SHOP</Nav.Link>
          <Nav.Link href="about">ABOUT</Nav.Link>
          <Nav.Link href="contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
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
