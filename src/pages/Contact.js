import React, { useState, useEffect } from 'react';
import styles from '../styles/contact.module.css';

import sofaPic from '../assets/works7.png';

function Contact() {
  return (
    <div>
      <div className={`container-fluid p-0 ${styles.banner}`} />
      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-6 pl-0 pr-5">
            <h1 className="text-right">GET IN TOUCH</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-5 pr-4">Let's have a chat! For commissions, collaborations and any other queries, please just drop me an email and I'll get back to you in 24 - 48 hours.</p>
            <div className="ml-5 pl-5">
              <button className="btn btn-primary" type="button">CONTACT</button>
            </div>
          </div>
          <div className="col-6 pr-0 pl-4">
            <img
              src={sofaPic}
              className="img-fluid bg-yellow "
              alt="HB Creative logo"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
