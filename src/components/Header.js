import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserView,
  MobileView,
} from 'react-device-detect';
import styles from '../styles/header.module.css';

import logo from '../assets/logo-dark.png';

function Header({ headerColor }) {
  const [collapsed, setCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = collapsed ? 'unset' : 'hidden';
    document.body.style.height = collapsed ? 'auto' : '100vh';
  }, [collapsed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

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
      {/* <MobileView>
        <div className={`${scrolled ? styles.scrolled : null} ${collapsed ? null : 'vh-100'} w-100 d-flex flex-column bg-teal`}>
          <Navbar className="d-flex justify-content-between">
            <Navbar.Brand href="/" className="w-50">
              <img
                src={textLogo}
                className="w-100"
                alt="Techniclarity logo"
              />
            </Navbar.Brand>
            <Burger collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} />
          </Navbar>
          {collapsed ? null
            : (
              <div className={`container flex-grow-1 d-flex justify-content-between flex-column pb-4 pt-3 ${styles.menu}`}>
                <img
                  src={cloudTop}
                  alt="Cloud Background"
                  className="position-absolute h-25"
                  style={{ top: '10%', left: '50%' }}
                />
                <img
                  src={cloudBottom}
                  alt="Cloud Background"
                  className="position-absolute h-25"
                  style={{ top: '40%', right: '45%' }}
                />
                <div className="row flex-column h-75">
                  <Nav className="col-12 flex-column" navbar={false}>
                    <Nav.Link href="tuition" className={styles.link}>Tuition</Nav.Link>
                    <Nav.Link href="course" className={styles.link}>Course</Nav.Link>
                    <Nav.Link href="about" className={styles.link}>About</Nav.Link>
                    <Nav.Link href="contact" className={styles.link}>Contact</Nav.Link>
                  </Nav>
                </div>
                <div className="row d-flex justify-content-between align-items-end px-3 ">
                  <div className="flex-row h-50 align-items-end d-flex">
                    <a href="https://instagram.com/the.techniclarity">
                      <img
                        src={instagramLogo}
                        alt="Instagram logo"
                        className="img-fluid d-inline-block pr-2"
                      />
                    </a>
                    <a href="https://facebook.com/the.techniclarity">
                      <img
                        src={facebookLogo}
                        alt="Facebook logo"
                        className="img-fluid d-inline-block pl-2"
                      />
                    </a>
                  </div>
                  <div className="w-25">
                    <img
                      src={symbolLogo}
                      alt="Techniclarity logo"
                      className="img-fluid"
                    />
                  </div>

                </div>
              </div>
            )}
        </div>

      </MobileView> */}
    </>
  );
}

export default Header;
