import React from 'react';
import styles from '../styles/contact.module.css';

import sofaPic from '../assets/works7.png';

function Contact() {
  return (
    <div>
      <div className={`container-fluid p-0 ${styles.banner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0">
            <h1 className="text-right pl-4">GET IN TOUCH</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0 pr-4">
              Let&apos;s have a chat! For commissions, collaborations and any other queries,
              please just drop me an email and I&apos;ll get back to you in 24 - 48 hours.
            </p>
            <div className="ml-5 pl-md-5 pl-0 ">
              <button className="btn btn-primary" type="button">CONTACT</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12 col-md-10 pr-0 pl-4 my-5">
            <img
              src={sofaPic}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
