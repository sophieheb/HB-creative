import React from 'react';
import styles from '../styles/works.module.css';

import works1 from '../assets/works1.png';
import works2 from '../assets/works2.png';
import works3 from '../assets/works3.png';
import works4 from '../assets/works4.png';
import works5 from '../assets/works5.png';
import works6 from '../assets/works6.png';
import works7 from '../assets/works7.png';
import works8 from '../assets/works8.png';
import works9 from '../assets/works9.png';

function Works() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works1}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works2}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works3}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works4}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works5}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works6}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works7}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works8}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works9}
              className="img-fluid"
              alt="HB Creative logo"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-md-6 col-11">
            <h1 className="text-right">BESPOKE ART</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-5 pr-4">Painting and drawing has always been a part of my life. I progressed with it through school, then later at Bournemouth Arts Uni but only found my true groove with it in the last few years; finding peace with it, like a form of therapy.</p>
          </div>
        </div>
      </div>
      <div className={`container-fluid p-0 ${styles.banner}`} />
    </div>
  );
}

export default Works;
