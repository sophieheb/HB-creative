import React from 'react';
import styles from '../styles/contact.module.css';

import contactPic from '../assets/works-2.png';

function Contact() {
  return (
    <div>
      <div className={`container-fluid p-0 ${styles.banner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0 pr-md-4 pr-0">
            <h1 className="text-right pl-4">GET IN TOUCH</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0 pr-4">
              Let&apos;s have a chat! For commissions, collaborations and any other queries,
              please just drop me an email and I&apos;ll get back to you in 24 - 48 hours.
            </p>
            <div className="ml-5 pl-md-5 pl-0 ">
              <a className="btn btn-primary" type="button" href="mailto:h.jenkins44@outlook.com?subject=Website Enquiry">CONTACT</a>
            </div>
          </div>
          <div className="col-12 col-md-6 pr-0 pl-4 my-5  my-md-0 mb-md-0">
            <img
              src={contactPic}
              className="img-fluid"
              alt="Holly's work in a home setting"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
