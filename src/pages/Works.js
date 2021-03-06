import React from 'react';

import works1 from '../assets/works-1.png';
import works2 from '../assets/works-2.png';
import works3 from '../assets/works-3.png';
import works4 from '../assets/works-4.png';
import works5 from '../assets/works-5.png';
import works6 from '../assets/works-6.png';
import works7 from '../assets/works-7.png';
import works8 from '../assets/works-8.png';
import works9 from '../assets/works-9.png';

function Works() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works1}
              className="img-fluid"
              alt="Holly's work in a seating area"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works2}
              className="img-fluid"
              alt="Holly's work next to a beachy lamp."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works3}
              className="img-fluid"
              alt="Holly's work on a shelf next to a plant."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works4}
              className="img-fluid"
              alt="Holly's work above a sofa."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works5}
              className="img-fluid"
              alt="Holly's work above a bed."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works6}
              className="img-fluid"
              alt="Holly's work in a seating area"
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works7}
              className="img-fluid"
              alt="Holly's work above a sofa."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works8}
              className="img-fluid"
              alt="Holly's work above two twin beds."
            />
          </div>
          <div className="col-md-4 p-4 col-12 col-sm-6">
            <img
              src={works9}
              className="img-fluid"
              alt="Close up of Holly's work"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-md-6 col-11 pl-0">
            <h1 className="text-right mb-0">BESPOKE ART</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-5 pr-4 mb-0">Rich, layered textures and a soothing colour palette create eye-catching depth; something new to see at every glace and a lovely addition to any coastal lover&apos;s home.</p>
            <div className="m-5 pl-5">
              <a className="btn btn-primary" href="/contact">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
