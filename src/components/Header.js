import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserView,
  MobileView,
} from 'react-device-detect';
import styles from '../styles/header.module.css';
import Burger from './Burger'
import facebookLogo from '../assets/facebookLogoDark.svg';
import instagramLogo from '../assets/instagramLogoDark.svg';
import logo from '../assets/logo-dark.png';

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    document.getElementById('root').style.overflow = collapsed ? 'unset' : 'hidden';
    document.getElementById('root').style.height = collapsed ? 'auto' : '100vh';
  }, [collapsed]);

  return (
    <>
      <BrowserView>

        <Navbar
          className="row mx-5 navbar-light"
        >
          <Nav className="col-5 ">
            <Nav.Link href="works">WORKS</Nav.Link>
            <Nav.Link href="shop">SHOP</Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="col-2 mr-0 py-4 text-center">
            <img
              src={logo}
              className="w-md-50"
              alt="HB Creative logo"
            />
          </Navbar.Brand>
          <Nav className="col-5 d-flex justify-content-end ">
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Nav.Link href="contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
      </BrowserView>

      <MobileView>
        <div className={`w-100 d-flex flex-column`}>
          <div className="row">
          <Navbar >
          <Burger className="col-4" collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} />
            <Navbar.Brand href="/" className="col-4">
              <img
                src={logo}
                className="w-100"
                alt="HB Creative Logo"
              />
            </Navbar.Brand>
            <div className="col-4">

        <a href="https://www.instagram.com/h.b_creative/">
          <img
            src={instagramLogo}
            alt="Instagram logo"
            className="pr-1 h-50"
          />
        </a>
        <a href="https://www.facebook.com/HollyButlerCreative">
          <img
            src={facebookLogo}
            alt="Facebook logo"
            className="pl-1 h-50"
          />
        </a>
      </div>
            
          </Navbar>
          </div>
    <div className={`w-100 d-flex flex-column position-relative`}>
          {collapsed ? null
            : (
              <div className={`row vh-100 position-absolute ${styles.menu}`}>
                  <Nav className="flex-column px-5 pt-5">
                  <Nav.Link href="home" className="text-secondary align-center">HOME</Nav.Link>
                  <Nav.Link href="works" className="text-secondary">WORKS</Nav.Link>
                  <Nav.Link href="shop" className="text-secondary">SHOP</Nav.Link>
                  <Nav.Link href="about" className="text-secondary">ABOUT</Nav.Link>
                   <Nav.Link href="contact" className="text-secondary">CONTACT</Nav.Link>
                  </Nav>
              </div>
            )}
        </div>
        </div>

      </MobileView>
    </>
  );
}

export default Header;
